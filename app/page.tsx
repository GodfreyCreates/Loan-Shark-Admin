import { DashboardScroll } from "@/components/Sections/DashboardScroll";
import { Features } from "@/components/Sections/features";
import Hero from "@/components/Sections/Home";
import HowItWorks from "@/components/Sections/HowItWorks";
import { Navbar } from "@/components/Sections/Navbar";
import { Testimonies } from "@/components/Sections/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Features/>
      <DashboardScroll/>
      <HowItWorks/>
      <Testimonies/>
    </main>
  );
}
