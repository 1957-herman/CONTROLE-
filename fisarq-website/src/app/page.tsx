import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";

/** Regenera a página uma vez por dia (mantém os anos de experiência atualizados). */
export const revalidate = 86400;

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Contact />
    </>
  );
}
