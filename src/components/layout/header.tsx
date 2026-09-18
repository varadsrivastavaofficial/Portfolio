'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/data';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Sparkles, Sun, Moon } from 'lucide-react';

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Initialize theme from localStorage / system preference
  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        { rootMargin: '-20% 0px -60% 0px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        sections.forEach((section) => observer.unobserve(section));
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      setActiveSection('');
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const navLinks = (
    <>
      {NAV_LINKS.map((link) => {
        const href = isHomePage ? link.href : `/${link.href}`;
        const isActive = isHomePage && activeSection === link.href.substring(1);

        return (
          <Link
            key={link.name}
            href={href}
            onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
            className={cn(
              'relative px-3.5 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg',
              'hover:text-primary hover:bg-primary/5',
              isActive
                ? 'text-primary font-bold'
                : 'text-muted-foreground'
            )}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'bg-background/85 border-b border-border/40 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
          aria-label="Home"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/40 bg-card p-1 shadow-md shadow-primary/10">
            <Image
              src="https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Logo%20Varad/299027867_734158458020591_4062664687879645484_n-removebg-preview.png"
              alt="Varad Srivastava Logo"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Varad Srivastava
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-card/60 border border-border/40 backdrop-blur-md">
          {navLinks}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-xl border border-border/50 text-foreground hover:text-primary hover:bg-card transition-all"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-4 w-4 text-primary transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-primary transition-transform duration-300 hover:-rotate-12" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(218,165,32,0.4)] transition-all"
          >
            <Link href={isHomePage ? '#contact' : '/#contact'}>
              Get in Touch
            </Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg border border-border/50 text-foreground hover:bg-card"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card/95 backdrop-blur-xl border-border/60">
                <div className="flex flex-col h-full justify-between pt-8 pb-4">
                  <div className="flex flex-col items-stretch gap-3">
                    <div className="flex items-center justify-between pb-4 mb-2 border-b border-border/40">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="font-headline font-bold text-lg text-primary">Navigation</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-lg border border-border/50 text-foreground hover:bg-card h-8 w-8"
                      >
                        {mounted && theme === 'dark' ? (
                          <Sun className="h-4 w-4 text-primary" />
                        ) : (
                          <Moon className="h-4 w-4 text-primary" />
                        )}
                      </Button>
                    </div>
                    {navLinks}
                  </div>
                  <div className="pt-4 border-t border-border/40">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground font-bold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href={isHomePage ? '#contact' : '/#contact'}>
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
