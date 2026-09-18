'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const FRAME_COUNT = 96;
const FRAME_URL_PREFIX =
  'https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Portfolio/frame_';

const getFrameUrl = (frame: number) =>
  `${FRAME_URL_PREFIX}${String(frame).padStart(4, '0')}.webp`;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedStatusRef = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));
  const lastDrawnIndexRef = useRef<number>(-1);
  const currentRequestedFrameRef = useRef<number>(0);

  const [isInitialReady, setIsInitialReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Core drawing logic with fallback to nearest loaded frame
  const drawFrame = useCallback((targetIndex: number) => {
    currentRequestedFrameRef.current = targetIndex;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Check if target image is loaded
    let targetImg = imagesRef.current[targetIndex];
    let isTargetValid =
      loadedStatusRef.current[targetIndex] &&
      targetImg &&
      targetImg.complete &&
      targetImg.naturalWidth > 0;

    // If not loaded, find the closest loaded frame to prevent black screen / flickering
    if (!isTargetValid) {
      let nearestIndex = -1;
      let minDistance = Infinity;

      for (let i = 0; i < FRAME_COUNT; i++) {
        if (
          loadedStatusRef.current[i] &&
          imagesRef.current[i] &&
          imagesRef.current[i].complete &&
          imagesRef.current[i].naturalWidth > 0
        ) {
          const distance = Math.abs(i - targetIndex);
          if (distance < minDistance) {
            minDistance = distance;
            nearestIndex = i;
          }
        }
      }

      if (nearestIndex !== -1) {
        targetImg = imagesRef.current[nearestIndex];
        isTargetValid = true;
      }
    }

    if (!isTargetValid || !targetImg || targetImg.naturalWidth === 0) {
      return;
    }

    // High DPI / Canvas aspect cover sizing
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    const imgW = targetImg.naturalWidth;
    const imgH = targetImg.naturalHeight;
    const hRatio = canvas.width / imgW;
    const vRatio = canvas.height / imgH;
    const ratio = Math.max(hRatio, vRatio);

    const drawW = imgW * ratio;
    const drawH = imgH * ratio;
    const offsetX = (canvas.width - drawW) / 2;
    const offsetY = (canvas.height - drawH) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(targetImg, 0, 0, imgW, imgH, offsetX, offsetY, drawW, drawH);
    lastDrawnIndexRef.current = targetIndex;
  }, []);

  useEffect(() => {
    // 1. Initialize image objects
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      images.push(img);
    }
    imagesRef.current = images;

    let loadedCounter = 0;
    const onFrameLoad = (index: number) => {
      loadedStatusRef.current[index] = true;
      loadedCounter++;
      setLoadedCount(loadedCounter);

      // Once initial frames are loaded, reveal canvas
      if (index === 0 || loadedCounter >= 6) {
        setIsInitialReady(true);
      }

      // If the newly loaded frame is currently the requested one or close, redraw
      if (
        Math.abs(index - currentRequestedFrameRef.current) <= 1 ||
        lastDrawnIndexRef.current === -1
      ) {
        drawFrame(currentRequestedFrameRef.current);
      }
    };

    // Priority loading: load first 12 frames immediately
    const PRIORITY_COUNT = 12;
    for (let i = 0; i < Math.min(PRIORITY_COUNT, FRAME_COUNT); i++) {
      const img = images[i];
      img.onload = () => onFrameLoad(i);
      img.onerror = () => {
        // Fallback or retry
        console.warn(`Failed to load frame ${i + 1}`);
      };
      img.src = getFrameUrl(i + 1);
    }

    // Chunked progressive loader for remaining frames to prevent network congestion
    let nextChunkStart = PRIORITY_COUNT;
    const CHUNK_SIZE = 8;

    const loadNextChunk = () => {
      if (nextChunkStart >= FRAME_COUNT) return;
      const end = Math.min(nextChunkStart + CHUNK_SIZE, FRAME_COUNT);
      for (let i = nextChunkStart; i < end; i++) {
        const img = images[i];
        img.onload = () => {
          onFrameLoad(i);
        };
        img.onerror = () => {
          console.warn(`Failed to load frame ${i + 1}`);
        };
        img.src = getFrameUrl(i + 1);
      }
      nextChunkStart = end;
      if (nextChunkStart < FRAME_COUNT) {
        setTimeout(loadNextChunk, 100);
      }
    };

    // Start background chunk loading after short delay
    const chunkTimer = setTimeout(loadNextChunk, 300);

    // Scroll & Resize Handlers
    let frameId: number;
    const handleScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const scrollTop = window.scrollY;
        const maxScrollTop = heroRef.current.scrollHeight - window.innerHeight;
        if (maxScrollTop > 0) {
          const fraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
          setScrollProgress(fraction);
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(fraction * FRAME_COUNT)
          );
          drawFrame(frameIndex);
        }
      });
    };

    const handleResize = () => {
      drawFrame(currentRequestedFrameRef.current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(chunkTimer);
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [drawFrame]);

  // Dynamic opacity and transform calculations for hero overlay
  // Main title fades out between 0% and 25% scroll progress to give clear view of animation
  const heroOpacity = Math.max(0, 1 - scrollProgress * 4.5);
  const heroTranslateY = -scrollProgress * 60;
  const isOverlayVisible = heroOpacity > 0.01;

  return (
    <section id="hero" ref={heroRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* WebP Animation Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isInitialReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Gradient Overlays for Cinematic Contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-background/20 to-background/80" />

        {/* Primary Hero Text (Visible at top of page, smoothly fades out as you scroll) */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto transition-all duration-300 pointer-events-auto"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
            display: isOverlayVisible ? 'flex' : 'none',
          }}
        >
          <h1
            className="font-headline text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl drop-shadow-2xl"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            Varad Srivastava
          </h1>

          <p
            className="mt-4 font-headline text-2xl font-bold text-primary sm:text-3xl"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
          >
            Quantitative Finance & Risk Analytics
          </p>

          <p
            className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-200 leading-relaxed font-body"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            Bridging the gap between data and decision-making with quantitative analysis, machine learning trading algorithms, and actuarial risk modeling.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.6)]"
            >
              <Link href="#projects">Explore Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-primary/80 bg-background/50 backdrop-blur-md text-primary font-semibold px-8 py-6 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 6) }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
        </div>

        {/* Frame Progress Indicator (Subtle bottom bar) */}
        {loadedCount < FRAME_COUNT && (
          <div className="absolute top-20 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 border border-border/50 text-[11px] text-muted-foreground backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            Loaded {loadedCount}/{FRAME_COUNT} frames
          </div>
        )}
      </div>
    </section>
  );
}
