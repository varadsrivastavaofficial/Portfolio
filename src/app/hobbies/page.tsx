import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HOBBIES_DATA } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLeft, Flame } from 'lucide-react';

export default function HobbiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Top Breadcrumb / Back Button */}
          <div className="max-w-7xl mx-auto mb-8">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary gap-2"
            >
              <Link href="/#hobbies">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
                <Flame className="h-3.5 w-3.5" /> Creative & Physical Pursuits
              </div>
              <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Hobbies & <span className="text-primary">Passions</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Cultivating high discipline through martial arts and exploring visual narratives with Adobe After Effects.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {HOBBIES_DATA.map((hobby, index) => (
              <Reveal key={hobby.title} delay={index * 100}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                      <Image
                        src={hobby.image.imageUrl}
                        alt={hobby.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        data-ai-hint={hobby.image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      {hobby.tag && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-primary/90 text-primary-foreground font-semibold text-xs backdrop-blur-md shadow-md">
                            {hobby.tag}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {hobby.title}
                    </CardTitle>

                    <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
