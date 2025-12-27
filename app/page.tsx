import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
