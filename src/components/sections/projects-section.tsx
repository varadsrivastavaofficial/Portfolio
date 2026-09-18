'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Code, ArrowUpRight, FolderGit2, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, type Project } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Reveal } from '@/components/shared/reveal';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Reveal delay={index * 100}>
      <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/80 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        <CardHeader className="p-0">
          <div className="aspect-[16/10] relative overflow-hidden bg-muted">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              data-ai-hint={project.image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary/90 text-primary-foreground font-semibold text-xs backdrop-blur-md shadow-md">
                {project.category}
              </Badge>
            </div>
            {project.period && (
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md text-[11px] font-semibold text-primary border border-primary/30">
                  {project.period}
                </span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-6">
          {project.subtitle && (
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              {project.subtitle}
            </p>
          )}

          <CardTitle className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>

          <CardDescription className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 bg-background/50 p-2.5 rounded-xl border border-border/40">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-left">
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">{m.label}</p>
                  <p className="text-xs font-bold text-foreground truncate">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="bg-secondary/60 text-secondary-foreground text-xs font-medium border border-border/50 hover:border-primary/40 transition-colors"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-border/30 mt-auto gap-2">
          {/* Deep Dive Case Study Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-semibold"
              >
                <BookOpen className="h-3.5 w-3.5 mr-1.5" /> Case Study
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-card border-border/70 p-6 sm:p-8 font-serif">
              <DialogHeader>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest w-fit mb-2">
                  <Layers className="h-3.5 w-3.5" /> {project.category} Deep Dive
                </div>
                <DialogTitle className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-primary font-medium">
                  {project.subtitle} • {project.period}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 my-4 text-sm max-h-[60vh] overflow-y-auto pr-2">
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1.5 text-primary">
                    Financial Problem Statement
                  </h4>
                  <p className="text-neutral-300 leading-relaxed bg-background/50 p-3 rounded-xl border border-border/40">
                    {project.problem}
                  </p>
                </div>

                {project.deepDive && (
                  <>
                    <div>
                      <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1.5 text-primary">
                        Quantitative Methodology & Mathematical Formulation
                      </h4>
                      <p className="text-neutral-300 leading-relaxed bg-background/50 p-3 rounded-xl border border-border/40">
                        {project.deepDive.methodology}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1.5 text-primary">
                        System Architecture & Implementation Pipeline
                      </h4>
                      <p className="text-neutral-300 font-mono text-xs leading-relaxed bg-background/70 p-3 rounded-xl border border-border/50">
                        {project.deepDive.architecture}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-1.5 text-primary">
                        Key Empirical Learnings
                      </h4>
                      <ul className="space-y-1.5">
                        {project.deepDive.keyLearnings.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-neutral-300 text-xs sm:text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/40">
                {project.sourceUrl && (
                  <Button asChild size="sm" variant="outline" className="border-border hover:border-primary/50 text-xs">
                    <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Code className="h-3.5 w-3.5 mr-1.5" /> View on GitHub
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild size="sm" className="bg-primary text-primary-foreground text-xs">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-3.5 w-3.5 mr-1.5" /> Live Demo <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {project.sourceUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border/60 hover:border-primary/60 hover:bg-primary/10 text-xs font-medium"
            >
              <Link
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Code className="h-3.5 w-3.5" /> Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Reveal>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative bg-background/50 py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <h2
              id="projects-heading"
              className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
            >
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Institutional-grade models spanning automated equity valuation, algorithmic risk validation, and predictive data analytics.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {['All', 'Valuation', 'Risk & Actuarial', 'Blockchain', 'Analytics'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                      : 'bg-card/70 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {category === 'All' ? 'All Projects' : category}
                </button>
              ))}
            </div>

          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
