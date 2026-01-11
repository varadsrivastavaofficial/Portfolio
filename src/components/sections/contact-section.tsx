import { Mail } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2
              id="contact-heading"
              className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Contact
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I&apos;m currently seeking internship opportunities and am open to
              connecting with professionals in the industry. Feel free to reach
              out via email.
            </p>
            <div className="mt-10">
                <Button asChild size="lg">
                    <Link href="mailto:varadsrivastavaofficial@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        varadsrivastavaofficial@gmail.com
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
