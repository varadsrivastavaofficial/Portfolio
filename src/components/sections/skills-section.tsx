import { SKILLS_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <Reveal>
          <h2
            id="skills-heading"
            className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Core Competencies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My technical skills span across finance, risk management, and data
            science, providing a holistic approach to analysis.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <Reveal key={category}>
            <Card className="h-full border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
