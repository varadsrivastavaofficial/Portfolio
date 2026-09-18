import Image from 'next/image';
import Link from 'next/link';
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLeft, GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 py-16 sm:py-24 w-full max-w-full">
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-full">
          {/* Top Breadcrumb / Back Button */}
          <div className="max-w-7xl mx-auto mb-8">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary gap-2"
            >
              <Link href="/#about">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Educational <span className="text-primary">Journey</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Rigorous training in Economics, quantitative analysis, mathematics, and computational modeling.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {EDUCATION_DATA.map((edu, index) => (
              <Reveal key={edu.title} delay={index * 100}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                      <Image
                        src={edu.image.imageUrl}
                        alt={edu.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        data-ai-hint={edu.image.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      {edu.grade && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-primary-foreground font-bold text-xs shadow-md">
                            <Award className="h-3 w-3 mr-1" /> {edu.grade}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow p-6">
                    <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.year}
                    </div>

                    <CardTitle className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.title}
                    </CardTitle>

                    <p className="text-sm font-medium text-neutral-300 mt-1">
                      {edu.institution}
                    </p>

                    <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed">
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
