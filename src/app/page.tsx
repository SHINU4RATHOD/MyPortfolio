import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ResumeAlignmentToolSection from '@/components/sections/ResumeAlignmentToolSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjectsSection />
        <TimelineSection />
        <ResumeAlignmentToolSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
