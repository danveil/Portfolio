import { Hero } from "@/components/home/hero";
import {
  AboutSection,
  CommunitySection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  FeaturedProjectsSection,
  JourneySection,
  ResearchSection,
  SkillsSection,
} from "@/components/home/home-sections";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <div id="projects">
        <FeaturedProjectsSection />
      </div>
      <ResearchSection />
      <ExperienceSection />
      <EducationSection />
      <CommunitySection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
