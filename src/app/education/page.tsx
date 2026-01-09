import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EDUCATION_DATA } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Reveal } from '@/components/shared/reveal';

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Reveal>
              <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                My Education
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                My academic background and qualifications.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EDUCATION_DATA.map((edu) => (
              <Reveal key={edu.title}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <CardHeader>
                    <div className="aspect-[3/2] relative overflow-hidden rounded-lg border">
                      <Image
                        src={edu.image.imageUrl}
                        alt={edu.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={edu.image.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="font-headline text-xl text-primary">
                      {edu.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {edu.description}
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
