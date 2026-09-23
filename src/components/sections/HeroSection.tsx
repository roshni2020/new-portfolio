"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SplitText } from "@/components/ui/SplitText";
import { SceneWrapper } from "@/components/3d/SceneWrapper";
import { LINKS } from "@/data/resume";
import { openChat } from "@/components/ui/ChatWidget";

const item: Variants = { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } };

export function HeroSection({ chat }: { chat: boolean }) {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <SceneWrapper />
      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%", padding: "14vh 4vw 12vh", display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,.8fr)", gap: "4vw", alignItems: "center" }}>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }} style={{ minWidth: 0 }}>
          <motion.div variants={item} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: ".72rem", letterSpacing: ".2em", fontWeight: 600, color: "#b7ab98", marginBottom: "3vh" }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3ddc84", boxShadow: "0 0 0 4px #3ddc8433" }} />
            OPEN TO FULL-TIME & CONTRACT · BAY AREA OR REMOTE
          </motion.div>

          <motion.p variants={item} style={{ color: "#ededed", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", fontSize: "clamp(1.2rem, 2.6vw, 2.4rem)", lineHeight: 1, marginBottom: "2vh" }}>
            Roshni Kobula Raja
          </motion.p>
          <motion.div variants={item} style={{ width: 70, height: 3, background: "#e8a33b", marginBottom: "3vh" }} />

          <div style={{ overflow: "hidden" }}><SplitText text="Shipping" as="h1" className="split-heading" /></div>
          <div style={{ overflow: "hidden" }}><SplitText text="Agents" as="h1" className="split-heading-accent" /></div>
          <div style={{ overflow: "hidden" }}><SplitText text="That Work." as="h1" className="split-heading" /></div>

          <motion.p variants={item} style={{ marginTop: "4vh", color: "#b7ab98", fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.5, maxWidth: 520 }}>
            Software engineer — AI/ML & agentic systems. Retrieval and ranking pipelines, LangGraph agents, and the pytest suites that keep them honest. 12+ hackathons and counting.
          </motion.p>

          <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "4vh" }}>
            {chat && <Magnetic>
              <button onClick={openChat} data-cursor-hover="true" style={btn(true)}>
                <Sparkles size={16} /> Ask my avatar
              </button>
            </Magnetic>}
            <Magnetic>
              <a href={LINKS.resume} download data-cursor-hover="true" style={btn(chat ? false : true)}>
                <Download size={16} /> Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" data-cursor-hover="true" style={btn(false)}>
                Work <ArrowDown size={16} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="hero-art" style={{ justifySelf: "end", width: "min(100%, 420px)", aspectRatio: "3/4", borderRadius: "220px 220px 24px 24px", overflow: "hidden", boxShadow: "0 40px 90px #000a, 0 0 0 1px #2a2620", position: "relative" }}>
          <motion.img src="/avatar.jpg" alt="Illustration of Roshni Kobula Raja" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }} />
        </motion.div>
      </div>
      <style>{`@media (max-width: 900px){ .container{grid-template-columns:1fr !important} .hero-art{justify-self:center !important; width:min(70vw,320px) !important; order:-1} .split-heading,.split-heading-accent{white-space:normal} }`}</style>
    </section>
  );
}

const btn = (primary: boolean): React.CSSProperties => ({
  display: "inline-flex", alignItems: "center", gap: ".5rem",
  background: primary ? "#e8a33b" : "transparent", color: primary ? "#0d0d0d" : "#ededed",
  border: primary ? "1px solid #e8a33b" : "1px solid #b7ab98",
  fontWeight: 800, letterSpacing: ".12em", fontSize: ".8rem", textTransform: "uppercase",
  padding: ".9rem 1.6rem", borderRadius: 999, textDecoration: "none", cursor: "pointer", fontFamily: "inherit",
});
