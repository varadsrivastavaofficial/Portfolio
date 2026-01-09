import Image from 'next/image';
import Link from 'next/link';
import { Eye, Code } from 'lucide-react';
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
import { Reveal } from '@/components/shared/reveal';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        <CardHeader>
          <div className="aspect-[3/2] relative overflow-hidden rounded-lg border">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="font-headline text-xl text-primary">
            {project.title}
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground">
            {project.description}
          </CardDescription>

          <div className="mt-4 space-y-2 text-sm">
            <p><strong className='text-foreground'>Problem:</strong> {project.problem}</p>
            <p><strong className='text-foreground'>Outcome:</strong> {project.outcome}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Eye className="h-4 w-4" /> Live Demo
            </Link>
          )}
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Code className="h-4 w-4" /> Source Code
            </Link>
          )}
        </CardFooter>
      </Card>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-card py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Reveal>
            <h2
              id="projects-heading"
              className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of projects demonstrating my skills in financial
              analysis, modeling, and software development.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
