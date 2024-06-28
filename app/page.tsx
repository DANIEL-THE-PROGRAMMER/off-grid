import Image from "next/image";
import Header from "./components/views/header";
import { Section } from "./components/views/section";
import { SectionOne } from "./components/sections/sectionone";

export default function Home() {
  return (
    <>
      <Header />
      <Section>
        <SectionOne />
      </Section>
    </>
  );
}
