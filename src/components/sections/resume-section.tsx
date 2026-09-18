'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, CheckCircle2, ArrowRight, Eye, Briefcase, GraduationCap, Award, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section
      id="resume"
      className="container mx-auto py-24 sm:py-32 px-4"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-card/60 backdrop-blur-xl border border-primary/30 shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                  <FileText className="h-3.5 w-3.5" /> Official Curriculum Vitae
                </div>
                <h2
                  id="resume-heading"
                  className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
                >
                  Explore My <span className="text-primary">Resume</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-serif">
                  A structured overview of my quantitative research, academic background in Economics & Data Science at IISER Bhopal, machine learning trading internships, and technical certifications.
                </p>

                <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs text-neutral-300">
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

                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border/70 p-6 sm:p-10 font-serif">
                    <DialogHeader className="border-b border-border/40 pb-5 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <DialogTitle className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
                            {PROFILE_DATA.name}
                          </DialogTitle>
                          <DialogDescription className="text-primary font-semibold text-sm sm:text-base mt-1">
                            B.S. Economics • Minor in Data Science @ {PROFILE_DATA.institution}
                          </DialogDescription>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p className="flex items-center gap-1.5 font-medium">
                            <Mail className="h-3.5 w-3.5 text-primary" /> {PROFILE_DATA.email}
                          </p>
                          <p className="flex items-center gap-1.5 font-medium">
                            <Phone className="h-3.5 w-3.5 text-primary" /> {PROFILE_DATA.phone}
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

                      {/* Certifications */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4" /> Certifications & Achievements
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {CERTIFICATIONS_DATA.map((cert) => (
                            <div key={cert.title} className="p-3 rounded-xl bg-background/50 border border-border/40 text-center sm:text-left">
                              <p className="font-bold text-foreground text-xs">{cert.title}</p>
                              <p className="text-[11px] text-primary">{cert.issuer}</p>
                              <p className="text-[10px] text-muted-foreground font-mono">{cert.year}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Positions of Responsibility */}
                      <div>
                        <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4" /> Leadership & Responsibility
                        </h4>
                        <div className="space-y-2">
                          {VOLUNTEERING_DATA.map((vol) => (
                            <div key={vol.title} className="p-3 rounded-xl bg-background/50 border border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                              <div>
                                <span className="font-bold text-foreground">{vol.title}</span> — <span className="text-muted-foreground">{vol.organization}</span>
                              </div>
                              <span className="text-muted-foreground font-mono">{vol.period}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/40 flex justify-end gap-3">
                      <Button asChild className="bg-primary text-primary-foreground font-semibold">
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1.5" /> Download Official PDF
                        </Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border/70 hover:border-primary/50 text-muted-foreground hover:text-primary font-medium"
                >
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
