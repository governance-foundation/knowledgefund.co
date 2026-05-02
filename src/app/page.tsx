import HeroSection from "@/components/HeroSection";
import CoordinationProblem from "@/components/CoordinationProblem";
import ThreeCsSection from "@/components/ThreeCsSection";
import PhilosophySection from "@/components/PhilosophySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GovernanceSection from "@/components/GovernanceSection";
import AutomationSection from "@/components/AutomationSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import MissionSection from "@/components/MissionSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoordinationProblem />
      <ThreeCsSection />
      <PhilosophySection />
      <HowItWorksSection />
      <GovernanceSection />
      <AutomationSection />
      <WhyItMattersSection />
      <MissionSection />
      <FinalCTA />
    </>
  );
}
