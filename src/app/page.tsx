import { Hero } from "@/components/home/Hero";
import { AudienceSection } from "@/components/home/AudienceSection";
import { CapabilityFramework } from "@/components/home/CapabilityFramework";
import { TrainingFormatsSection } from "@/components/home/TrainingFormatsSection";
import { PracticalLearningSection } from "@/components/home/PracticalLearningSection";
import { FeaturedProgramsSection } from "@/components/home/FeaturedProgramsSection";
import { TrainingBuilderSection } from "@/components/home/TrainingBuilderSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Production Hero Section */}
      <Hero />

      {/* Production Audience Section */}
      <AudienceSection />

      {/* Production Capability Framework Section */}
      <CapabilityFramework />

      {/* Production Training Formats Section */}
      <TrainingFormatsSection />

      {/* Production Practical Learning Section */}
      <PracticalLearningSection />

      {/* Production Featured Programs Section */}
      <FeaturedProgramsSection />

      {/* Production Custom Training Builder Section */}
      <TrainingBuilderSection />

      {/* Production Final CTA Section */}
      <FinalCTASection />
    </div>
  );
}
