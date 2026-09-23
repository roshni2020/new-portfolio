import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WinsSection } from "@/components/sections/WinsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const chat = !!process.env.ANTHROPIC_API_KEY; // hide the avatar CTA until the key is configured
  return (
    <>
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <HeroSection chat={chat} />
        <main>
          <AboutSection />
          <ExperienceSection />
          <WinsSection />
          <ProjectsSection />
          <ContactSection chat={chat} />
        </main>
        <footer style={{ borderTop: "1px solid #2a2620", backgroundColor: "#0d0d0d", textAlign: "center", padding: "2rem", color: "#b7ab98", fontSize: "0.8rem", letterSpacing: "0.15em", position: "relative", zIndex: 20 }}>
          © {new Date().getFullYear()} ROSHNI KOBULA RAJA · DUBLIN, CA
        </footer>
      </div>
    </>
  );
}
