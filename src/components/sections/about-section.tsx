import { Reveal } from '@/components/shared/reveal';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Picture%20Varad/Gemini_Generated_Image_4uxioh4uxioh4uxi.png"
                alt="Varad Srivastava"
                fill
                className="object-cover"
                data-ai-hint="portrait man"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="text-center lg:text-left">
              <h2
                id="about-heading"
                className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              >
                About Me
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I am a dedicated and analytical finance enthusiast with a strong
                academic foundation in financial principles and risk management.
                My passion lies in leveraging quantitative tools and
                data-driven insights to solve complex financial problems.
                Through academic projects and self-study, I have developed
                proficiency in financial modeling, portfolio analysis, and
                programming with Python. I am eager to apply my skills and grow
                in a dynamic, professional environment.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
                >
                  <Link href="/education">
                    Education
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary bg-transparent text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
                >
                  <Link href="/volunteering">
                    Volunteering
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
