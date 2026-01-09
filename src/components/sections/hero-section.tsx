'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FRAME_COUNT = 148;
const FRAME_URL_PREFIX =
  'https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Portfolio/frame_';

const getFrameUrl = (frame: number) =>
  `${FRAME_URL_PREFIX}${String(frame).padStart(4, '0')}.webp`;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<HTMLImageElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(0);
    };

    const drawFrame = (frameIndex: number) => {
      const img = imageCache.current[frameIndex];
      if (!img || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    let frameId: number;
    const handleScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxScrollTop = (heroRef.current?.scrollHeight || 0) - window.innerHeight;
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollFraction * FRAME_COUNT)
        );
        drawFrame(frameIndex);
      });
    };

    const preloadImages = () => {
      let loadedCount = 0;
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i + 1);
        imageCache.current[i] = img;
        img.onload = () => {
          loadedCount++;
          if (i === 0) {
            resizeCanvas(); // Draw first frame
          }
          if (loadedCount > 8) { // Preload first 8 frames
             setIsReady(true);
          }
        };
      }
    };
    
    preloadImages();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />
        <div
          className={`relative z-10 flex flex-col items-center text-center transition-opacity duration-1000 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="font-headline text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}
          >
            Varad Srivastava
          </h1>
          <p className="mt-4 font-headline text-2xl font-bold text-primary sm:text-3xl"
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}
          >
            Financial Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-lg text-neutral-200"
              style={{textShadow: '0 1px 5px rgba(0,0,0,0.5)'}}
          >
            Bridging the gap between data and decision-making with quantitative analysis and financial modeling.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary bg-transparent text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
