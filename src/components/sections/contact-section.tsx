'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Linkedin, Github, GraduationCap, Copy, Check } from 'lucide-react';



import { Reveal } from '@/components/shared/reveal';
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PROFILE_DATA } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast({
      title: 'Copied to Clipboard!',
      description: `${label} (${text}) is now copied.`,
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2
              id="contact-heading"
              className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to quantitative finance roles, trading research, data science internships, and research collaborations.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Channels from Resume */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <Card className="border-border/50 bg-card/60 backdrop-blur-xl p-6 shadow-xl">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" /> Contact Channels
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Direct communication details verified from resume.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  {/* Primary Email */}
                  <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-background/50 border border-border/40">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Primary Email</p>
                        <a
                          href={`mailto:${PROFILE_DATA.email}`}
                          className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {PROFILE_DATA.email}
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(PROFILE_DATA.email, 'email', 'Primary Email')}
                      className="h-8 w-8 rounded-lg shrink-0 hover:bg-primary/10 text-muted-foreground hover:text-primary"
                      title="Copy Primary Email"
                    >
                      {copiedKey === 'email' ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* College Email */}
                  <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-background/50 border border-border/40">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Academic Email</p>
                        <a
                          href={`mailto:${PROFILE_DATA.collegeEmail}`}
                          className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {PROFILE_DATA.collegeEmail}
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(PROFILE_DATA.collegeEmail, 'collegeEmail', 'Academic Email')}
                      className="h-8 w-8 rounded-lg shrink-0 hover:bg-primary/10 text-muted-foreground hover:text-primary"
                      title="Copy Academic Email"
                    >
                      {copiedKey === 'collegeEmail' ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-background/50 border border-border/40">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Campus / Base</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        {PROFILE_DATA.institution}
                      </p>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-3 flex flex-wrap gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-border/60 hover:border-primary/50 hover:bg-primary/10 text-xs font-semibold"
                    >
                      <Link
                        href={PROFILE_DATA.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-border/60 hover:border-primary/50 hover:bg-primary/10 text-xs font-semibold"
                    >
                      <Link
                        href={PROFILE_DATA.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <Card className="border-border/50 bg-card/60 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="font-headline text-2xl text-foreground">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and I will respond to you promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
