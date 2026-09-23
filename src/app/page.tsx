import { SceneWrapper } from "@/components/3d/SceneWrapper";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WinsSection } from "@/components/sections/WinsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SceneWrapper />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <HeroSection />
        <main>
          <AboutSection />
          <ExperienceSection />
          <WinsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <footer style={{ borderTop: "1px solid #2a2620", backgroundColor: "#0d0d0d", textAlign: "center", padding: "2rem", color: "#b7ab98", fontSize: "0.8rem", letterSpacing: "0.15em", position: "relative", zIndex: 20 }}>
          © {new Date().getFullYear()} ROSHNI KOBULA RAJA · DUBLIN, CA
        </footer>
      </div>
    </>
  );
}
