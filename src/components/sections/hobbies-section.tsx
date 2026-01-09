import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { ArrowRight } from 'lucide-react';

export function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="hobbies-heading"
    >
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="hobbies-heading"
            className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Hobbies & Interests
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            When I&apos;m not analyzing data or markets, I&apos;m dedicated to
            martial arts and creative video editing.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
            >
              <Link href="/hobbies">
                Explore My Hobbies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
