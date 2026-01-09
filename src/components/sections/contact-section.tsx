import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';

const socialLinks = [
  {
    href: 'mailto:example@email.com',
    icon: Mail,
    label: 'Email',
    text: 'Get in Touch',
  },
  {
    href: 'https://www.linkedin.com/in/varadsrivastavaofficial/',
    icon: Linkedin,
    label: 'LinkedIn',
    text: 'Connect on LinkedIn',
  },
  {
    href: 'https://www.instagram.com/varadsrivastav/',
    icon: Instagram,
    label: 'Instagram',
    text: 'Follow on Instagram',
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
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
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            {socialLinks.map(({ href, icon: Icon, label, text }) => (
              <Button
                key={href}
                asChild
                size="lg"
                className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {text}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
