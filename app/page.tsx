import Image from "next/image";
import Header from "./components/views/header";
import { Section } from "./components/views/section";
import { SectionOne } from "./components/sections/sectionone";
import { LetsGetSerious } from "./components/sections/letsgetserious";
import { WhySection } from "./components/sections/whysection";
import { DoSection } from "./components/sections/dosection";
import { AboutOffGrid } from "./components/sections/about";
import { Resources } from "./components/sections/resources";
import { PerformanceCheck } from "./components/sections/performancecheck";
import { Serve } from "./components/sections/whatweserve";

export default function Home() {
  return (
    <>
      <Header />
      <Section>
        <SectionOne />
      </Section>
      <LetsGetSerious />
      <WhySection />
      <DoSection />
      <AboutOffGrid />
      <Resources />
      <PerformanceCheck />
      <Serve />
    </>
  );
}
