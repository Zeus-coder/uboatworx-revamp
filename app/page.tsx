import type { Metadata } from "next";
import { ApplicationsGrid } from "@/components/home/ApplicationsGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { ModelsShowcase } from "@/components/home/ModelsShowcase";
import { NavalTeaser } from "@/components/home/NavalTeaser";
import { StatsBar } from "@/components/home/StatsBar";
import { WhyUbwTeaser } from "@/components/home/WhyUbwTeaser";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ApplicationsGrid />
      <ModelsShowcase />
      <WhyUbwTeaser />
      <CtaBanner />
      <NavalTeaser />
    </>
  );
}
