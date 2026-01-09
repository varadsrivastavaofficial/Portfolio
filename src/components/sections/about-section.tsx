import { Reveal } from '@/components/shared/reveal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="about-heading"
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="about-heading"
            className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am a dedicated and analytical finance enthusiast with a strong
            academic foundation in financial principles and risk management. My
            passion lies in leveraging quantitative tools and data-driven
            insights to solve complex financial problems. Through academic
            projects and self-study, I have developed proficiency in financial
            modeling, portfolio analysis, and programming with Python. I am
            eager to apply my skills and grow in a dynamic, professional
            environment.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
