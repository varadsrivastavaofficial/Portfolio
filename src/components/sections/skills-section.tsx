import { SKILLS_DATA } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Code2, LineChart, Palette, Cpu, Layers, BookOpen } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const categoryIcons: Record<string, typeof Code2> = {
  'Python & Quantitative': Code2,
  'BI & Financial Analytics': LineChart,
  'Languages & AI Engineering': Cpu,
  'Creative & Media': Palette,
  'Core Courses & Mathematics': BookOpen,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Layers className="h-3.5 w-3.5" /> Technical Arsenal
          </div>
          <h2
            id="skills-heading"
            className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
          >
            Core <span className="text-primary">Competencies & Courses</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Bridging quantitative economics, machine learning algorithms, actuarial risk validation, and mathematical foundations.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Object.entries(SKILLS_DATA).map(([category, skills], index) => {
          const Icon = categoryIcons[category] || Code2;
          return (
            <Reveal key={category} delay={index * 80}>
              <Card className="group h-full border-border/50 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 flex flex-col justify-between">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="font-headline text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2.5">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground group-hover:text-neutral-200 transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
