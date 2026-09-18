import { EXPERIENCE_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/shared/reveal';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" /> Career Journey
          </div>
          <h2
            id="experience-heading"
            className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
          >
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Quantitative analysis, machine learning algorithms, actuarial risk validation, and predictive enterprise data analytics.
          </p>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <Reveal key={exp.company} delay={index * 100}>
            <Card className="group border-border/50 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border/40">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs font-semibold">
                        {exp.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-body mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/60 text-secondary-foreground text-xs font-medium border border-border/40"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
