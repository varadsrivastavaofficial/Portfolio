import { Instagram, Linkedin } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { ContactForm } from '@/components/shared/contact-form';

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
              out.
            </p>
          </div>
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
