'use client';

import { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowRight, Eye, Briefcase, GraduationCap, Award, ShieldCheck, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  CERTIFICATIONS_DATA,
  VOLUNTEERING_DATA,
  LANGUAGES_DATA,
} from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ResumeSection() {
  const { toast } = useToast();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownloadClick = () => {
    toast({
      title: 'Intentionally Closed',
      description: 'Resume downloading is intentionally closed. Please explore the interactive in-browser preview or reach out directly.',
      variant: 'destructive',
    });
  };


  return (
    <section
      id="resume"
      className="container mx-auto py-24 sm:py-32 px-4 w-full max-w-full"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-4xl mx-auto w-full">
        <Reveal>
          <div className="p-6 sm:p-12 rounded-3xl bg-card/60 backdrop-blur-xl border border-primary/30 shadow-2xl relative overflow-hidden text-center sm:text-left w-full">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <h2
                  id="resume-heading"
                  className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
                >
                  Explore My <span className="text-primary">Resume</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-serif">
                  A structured overview of my quantitative research, academic background in Economics & Data Science at IISER Bhopal, machine learning trading internships, and technical certifications.
                </p>

                <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs text-neutral-300 justify-center sm:justify-start">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Trading Algorithms & ML
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Actuarial Risk AI Agent
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> IISER Bhopal Major & Minor
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                {/* Interactive In-Browser Preview Modal */}
                <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-6 py-6 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(218,165,32,0.5)]"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Preview Resume
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border/70 p-4 sm:p-10 font-serif">
                    <DialogHeader className="border-b border-border/40 pb-5 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <DialogTitle className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
                            {PROFILE_DATA.name}
                          </DialogTitle>
                          <DialogDescription className="text-primary font-semibold text-sm sm:text-base mt-1">
                            B.S. Economics • Minor in Data Science Engineering @ {PROFILE_DATA.institution}
                          </DialogDescription>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p className="flex items-center gap-1.5 font-medium">
                            <Mail className="h-3.5 w-3.5 text-primary" /> {PROFILE_DATA.email}
                          </p>
                        </div>
                      </div>
                    </DialogHeader>

                    {/* Resume Body */}
                    <div className="space-y-8 my-6 text-sm">
                      {/* Profile Summary */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4" /> Profile Summary
                        </h4>
                        <p className="text-muted-foreground leading-relaxed bg-background/50 p-4 rounded-xl border border-border/40">
                          {PROFILE_DATA.bio}
                        </p>
                      </div>

                      {/* Education */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" /> Education
                        </h4>
                        <div className="space-y-3">
                          {EDUCATION_DATA.map((edu) => (
                            <div key={edu.title} className="p-3.5 rounded-xl bg-background/50 border border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <p className="font-bold text-foreground">{edu.title}</p>
                                <p className="text-xs text-muted-foreground">{edu.institution}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                {edu.grade && (
                                  <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold">
                                    {edu.grade}
                                  </Badge>
                                )}
                                <span className="text-xs text-muted-foreground font-mono">{edu.year}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Professional Experience */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" /> Professional Experience
                        </h4>
                        <div className="space-y-4">
                          {EXPERIENCE_DATA.map((exp) => (
                            <div key={exp.company} className="p-4 rounded-xl bg-background/50 border border-border/40">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-foreground text-base">{exp.company}</span>
                                  <Badge className="bg-primary/15 text-primary text-xs font-semibold">{exp.role}</Badge>
                                </div>
                                <span className="text-xs text-muted-foreground font-mono">{exp.period} • {exp.location}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">{exp.description}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((s) => (
                                  <span key={s} className="px-2 py-0.5 rounded bg-card text-[11px] text-muted-foreground border border-border/50">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Certifications & Key Achievements */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4" /> Certifications & Competitive Selections
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">10th Summer School on Artificial Intelligence</p>
                            <p className="text-[11px] text-primary">CVIT, IIIT Hyderabad (IIITH)</p>
                            <p className="text-[10px] text-muted-foreground">Computer Vision & Machine Learning Selection</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">Online Foundation Course in Mathematics (OFCM 2025)</p>
                            <p className="text-[11px] text-primary">MTTS & NBHM</p>
                            <p className="text-[10px] text-muted-foreground">Advanced Mathematical Foundations</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">Solvothon Healthcare AI Hackathon (Round 1)</p>
                            <p className="text-[11px] text-primary">IIT Delhi (IITD) & Apollo Hospitals</p>
                            <p className="text-[10px] text-muted-foreground">Competitive AI Hackathon Selection</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">1st Prize - JEE Simulated Grand Tests</p>
                            <p className="text-[11px] text-primary">PW Lucknow (All 5 Branches)</p>
                            <p className="text-[10px] text-muted-foreground">Top Rank in Simulated JEE Tests</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">AWS AI/ML Scholar & Agentic AI Nanodegree</p>
                            <p className="text-[11px] text-primary">Amazon Web Services (AWS)</p>
                            <p className="text-[10px] text-muted-foreground">2025</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">Python: Code in Place</p>
                            <p className="text-[11px] text-primary">Stanford University</p>
                            <p className="text-[10px] text-muted-foreground">2025</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">Leadership Programs</p>
                            <p className="text-[11px] text-primary">McKinsey Forward & Aspire Institute</p>
                            <p className="text-[10px] text-muted-foreground">Strategic Leadership & Critical Problem Solving</p>
                          </div>
                          <div className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <p className="font-bold text-foreground text-xs">Sports: Martial Arts (2x Runner-Up)</p>
                            <p className="text-[11px] text-primary">Sangarsh Sports Fest 2025 & 2026</p>
                            <p className="text-[10px] text-muted-foreground">Continuous Competitive Athletic Discipline</p>
                          </div>
                        </div>
                      </div>

                      {/* Positions of Responsibility */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4" /> Leadership & Positions of Responsibility
                        </h4>
                        <div className="space-y-2">
                          {VOLUNTEERING_DATA.map((vol) => (
                            <div key={vol.title + vol.organization} className="p-3 rounded-xl bg-background/50 border border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                              <div>
                                <span className="font-bold text-foreground">{vol.title}</span> — <span className="text-muted-foreground">{vol.organization}</span>
                              </div>
                              <span className="text-muted-foreground font-mono">{vol.period}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-2">
                          Languages
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Hindi (Native) • English (Proficient) • German (Early Intermediate) • Sanskrit (Early Intermediate)
                        </p>
                      </div>

                    </div>

                    <div className="pt-4 border-t border-border/40 flex justify-end gap-3">
                      <Button
                        onClick={handleDownloadClick}
                        className="bg-primary text-primary-foreground font-semibold"
                      >
                        <Download className="h-4 w-4 mr-1.5" /> Download Official PDF
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={handleDownloadClick}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border/70 hover:border-primary/50 text-muted-foreground hover:text-primary font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
