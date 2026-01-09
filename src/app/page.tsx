import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { HobbiesSection } from '@/components/sections/hobbies-section';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ResumeSection } from '@/components/sections/resume-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
