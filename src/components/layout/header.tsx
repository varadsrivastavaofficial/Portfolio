'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/data';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/studio' || pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-30% 0px -70% 0px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
      window.addEventListener('scroll', handleScroll);

      return () => {
        sections.forEach((section) => observer.unobserve(section));
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
        window.addEventListener('scroll', handleScroll);
        // On other pages, we don't need the intersection observer.
        // We can set a default or clear active section.
        setActiveSection('');
        return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);
  
  const basePath = '/studio';

  const navLinks = (
    <>
      {NAV_LINKS.map((link) => {
        const fullHref = isHomePage ? link.href : `${basePath}/${link.href}`;
        return (
            <a
            key={link.href}
            href={fullHref}
            onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
            className={cn(
                'relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary',
                'after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300',
                activeSection === link.href.substring(1)
                ? 'text-primary after:scale-x-100'
                : 'hover:after:scale-x-50'
            )}
            >
            {link.name}
            </a>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 border-b border-border/50 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image
            src="https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Logo%20Varad/299027867_734158458020591_4062664687879645484_n-removebg-preview.png"
            alt="Varad Srivastava Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="hidden sm:inline font-headline text-xl font-bold">
            Varad Srivastava
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">{navLinks}</nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="mt-8 flex flex-col items-center gap-6">
                {navLinks}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
