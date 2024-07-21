import Team from "@/components/team";
import Servizi from "@/components/servizi";

import Hero from "@/components/hero";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Servizi />
      <Team />
    </div>
  );
}
