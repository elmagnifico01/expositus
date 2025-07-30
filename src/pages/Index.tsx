import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { HiddenStoriesSection } from "@/components/sections/HiddenStoriesSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { LearningsSection } from "@/components/sections/LearningsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CuriositiesSection } from "@/components/sections/CuriositiesSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TimelineSection />
        <HiddenStoriesSection />
        <CharactersSection />
        <LearningsSection />
        <TestimonialsSection />
        <CuriositiesSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
