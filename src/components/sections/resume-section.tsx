import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="resume-heading"
    >
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="resume-heading"
            className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            My Resume
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            For a detailed overview of my skills, experience, and academic
            background, please download my resume.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
