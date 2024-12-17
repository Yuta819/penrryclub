import React from "react";
import Header from "@/components/PocketBike/header";
import HeroSection from "@/components/PocketBike/hero-section";
import FeatureCards from "@/components/PocketBike/feature-cards";
import FAQSection from "@/components/PocketBike/faq-section";
import Footer from "@/components/PocketBike/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-900">
      <Header />
      <HeroSection />
      <FeatureCards />
      <FAQSection />
      <Footer />
    </main>
  );
}
