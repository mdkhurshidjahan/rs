"use client";

import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ResearchSection } from '@/components/research-section';
import { ProjectsSection } from '@/components/projects-section';
import { AwardsSection } from '@/components/awards-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
}