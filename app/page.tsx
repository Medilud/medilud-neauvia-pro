import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsBanner } from "@/components/sections/BenefitsBanner";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { LoyaltySection } from "@/components/sections/LoyaltySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ClinicalCasesSection } from "@/components/sections/ClinicalCasesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[88px]">
        <HeroSection />
        <BenefitsBanner />
        <ProductGrid />
        <LoyaltySection />
        <EventsSection />
        <EducationSection />
        <ClinicalCasesSection />
      </main>
      <Footer />
    </>
  );
}
