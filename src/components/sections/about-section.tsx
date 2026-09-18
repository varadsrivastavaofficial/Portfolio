import { Reveal } from '@/components/shared/reveal';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, GraduationCap, HeartHandshake, Award, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { CERTIFICATIONS_DATA, LANGUAGES_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto py-24 sm:py-32 px-4 relative"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Portrait Image with Luxury Card Glow */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative group max-w-sm mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-2xl">
                  <Image
                    src="https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Picture%20Varad/Gemini_Generated_Image_4uxioh4uxioh4uxi.png"
                    alt="Varad Srivastava"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint="portrait man"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/80 backdrop-blur-md border border-border/50">
                    <p className="font-headline font-bold text-white text-lg">Varad Srivastava</p>
                    <p className="text-xs text-primary font-medium">B.S. Economics • Minor in Data Science Engineering</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">IISER Bhopal (GPA: 7.68/10)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* About Bio Content & Highlights */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="text-center lg:text-left">
                <h2
                  id="about-heading"
                  className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
                >
                  About <span className="text-primary">Me</span>
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Economics undergraduate at IISER Bhopal with a minor in Data Science Engineering, combining quantitative finance, econometrics, machine learning, and programming with hands-on experience in trading strategies, valuation, insurance analytics, and AI-driven solutions.
                </p>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Interested in risk analysis, investment research, and quantitative finance, with additional strengths in data analysis, visualisation, and creative design.
                </p>


                {/* Quick Highlights Badges */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-card/60 border border-border/40 text-center lg:text-left">
                    <GraduationCap className="h-5 w-5 text-primary mb-1 mx-auto lg:mx-0" />
                    <p className="font-bold text-foreground text-sm">IISER Bhopal</p>
                    <p className="text-xs text-muted-foreground">Economics & Data Science (CPI: 7.68)</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card/60 border border-border/40 text-center lg:text-left">
                    <Award className="h-5 w-5 text-primary mb-1 mx-auto lg:mx-0" />
                    <p className="font-bold text-foreground text-sm">95.50% & 96.60%</p>
                    <p className="text-xs text-muted-foreground">Class XII & X (CISCE Honors)</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card/60 border border-border/40 text-center lg:text-left col-span-2 sm:col-span-1">
                    <HeartHandshake className="h-5 w-5 text-primary mb-1 mx-auto lg:mx-0" />
                    <p className="font-bold text-foreground text-sm">Media Head</p>
                    <p className="text-xs text-muted-foreground">CNC, IISER Bhopal</p>
                  </div>
                </div>

                {/* Certifications & Achievements Banner */}
                <div className="mt-6 p-4 rounded-xl bg-background/50 border border-border/40 text-left">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" /> Notable Certifications & Programs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS_DATA.map((cert) => (
                      <Badge
                        key={cert.title}
                        variant="secondary"
                        className="bg-card border border-border/50 text-xs py-1 px-2.5 text-neutral-300 font-medium"
                      >
                        {cert.title} ({cert.issuer})
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Languages:</span>
                  {LANGUAGES_DATA.map((lang) => (
                    <span key={lang.language} className="inline-flex items-center gap-1">
                      <span className="text-neutral-300">{lang.language}</span> ({lang.proficiency})
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.5)]"
                  >
                    <Link href="/education">
                      Explore Education
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-primary/80 bg-background/50 backdrop-blur-md text-primary font-semibold transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]"
                  >
                    <Link href="/volunteering">
                      View Leadership & Volunteering
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
