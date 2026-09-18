import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { ArrowRight, Flame } from 'lucide-react';
import { HOBBIES_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="container mx-auto py-24 sm:py-32 px-4 w-full max-w-full"
      aria-labelledby="hobbies-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <h2
            id="hobbies-heading"
            className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
          >
            Hobbies & <span className="text-primary">Interests</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Beyond financial modeling and quantitative analytics, discipline and creative expression drive my personal endeavors.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-12">
        {HOBBIES_DATA.map((hobby, index) => (
          <Reveal key={hobby.title} delay={index * 100}>
            <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <Image
                    src={hobby.image.imageUrl}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    data-ai-hint={hobby.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70" />
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
                <CardDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {hobby.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="text-center">
        <Reveal delay={300}>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary/80 bg-background/50 backdrop-blur-md text-primary font-semibold px-8 py-6 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]"
          >
            <Link href="/hobbies">
              Explore All Hobbies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
