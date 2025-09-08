import React from "react";

import { Hero } from "@/components/Hero";
import { PracticeAreasSection } from "@/components/PracticeAreas/PracticeAreasSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnersSection } from "@/components/Partners/PartnersSection";
import { CallToAction } from "@/components/CallToAction";
import { ConsultationSection } from "@/components/Consultation";
import { Customers } from "@/components/Customers";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <PracticeAreasSection />
      <StatsSection />
      <PartnersSection />
      <CallToAction />
      <ConsultationSection />
      <Customers />
    </main>
  );
};

export default MainPage;
