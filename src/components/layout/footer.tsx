import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Logo } from './logo';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/varadsrivastavaofficial/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/varadsrivastav/',
    icon: Instagram,
    label: 'Instagram',
  },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">
                Varad Srivastava
              </span>
            </Link>
            <p className="text-muted-foreground">
              Financial Enthusiast & Analyst
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>About This Website</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This is a personal portfolio showcasing the academic and
                  professional work of Varad Srivastava. It is built to be fast,
                  responsive, and recruiter-friendly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Terms & Conditions</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Content on this website may not be redistributed without
                  explicit permission. No liability is assumed for any decisions
                  made based on the content herein. The accuracy of information
                  is dependent on the reliability of its public sources.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Varad Srivastava. All Rights
            Reserved.
          </p>
          <p>Created by Varad Srivastava</p>
        </div>
      </div>
    </footer>
  );
}
