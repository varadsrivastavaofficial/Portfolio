import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VOLUNTEERING_DATA } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Reveal } from '@/components/shared/reveal';

export default function VolunteeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Reveal>
              <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Volunteering
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Giving back to the community is important to me.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VOLUNTEERING_DATA.map((vol) => (
              <Reveal key={vol.title}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <CardHeader>
                    <div className="aspect-[3/2] relative overflow-hidden rounded-lg border">
                      <Image
                        src={vol.image.imageUrl}
                        alt={vol.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={vol.image.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="font-headline text-xl text-primary">
                      {vol.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {vol.description}
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
