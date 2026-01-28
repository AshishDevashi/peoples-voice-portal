import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BeliefCards } from "@/components/home/BeliefCards";
import { InitiativesTimeline } from "@/components/home/InitiativesTimeline";
import { CTASection } from "@/components/home/CTASection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BeliefCards />
      <InitiativesTimeline />
      <ContactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
