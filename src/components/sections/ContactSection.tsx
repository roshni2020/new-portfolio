"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, FileDown, ArrowRight, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { LINKS } from "@/data/resume";
import { openChat } from "@/components/ui/ChatWidget";

const socials = [
  { icon: Briefcase, label: "LinkedIn", sub: "The fullest picture — 500+ connections, recaps, photos", href: LINKS.linkedin, hot: true },
  { icon: Mail, label: "Email", sub: `${LINKS.email} — I actually reply`, href: `mailto:${LINKS.email}` },
  { icon: Code2, label: "GitHub", sub: "Where the weekends go", href: LINKS.github },
  { icon: FileDown, label: "Resume", sub: "One page, PDF", href: LINKS.resume, download: true },
];

export function ContactSection({ chat }: { chat: boolean }) {
  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid #2a2620", padding: "12vw 4vw" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "8vw" }}>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }} style={{ flex: "1 1 45%", minWidth: 300 }}>
          <h2 style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "2rem" }}>
            Let&rsquo;s<br /><span style={{ color: "#e8a33b" }}>Talk.</span>
          </h2>
          <p style={{ color: "#b7ab98", fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)", lineHeight: 1.4, maxWidth: 560, marginBottom: "3rem" }}>
            Hiring for AI engineering, backend or ML? Email me, my inbox is open.
          </p>
          {chat && <Magnetic>
            <button onClick={openChat} data-cursor-hover="true" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#e8a33b", color: "#0d0d0d", border: 0, fontWeight: 800, letterSpacing: ".12em", fontSize: ".8rem", padding: ".9rem 1.6rem", borderRadius: 999, cursor: "pointer", fontFamily: "inherit" }}>
              <Sparkles size={16} /> ASK MY AVATAR
            </button>
          </Magnetic>}
        </motion.div>

        <div style={{ flex: "1 1 40%", minWidth: 300, display: "flex", flexDirection: "column" }}>
          {socials.map(({ icon: Icon, label, sub, href, hot, download }, i) => (
            <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" download={download} data-cursor-hover="true"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.6rem 0", borderBottom: `1px solid ${hot ? "#e8a33b" : "#2a2620"}`, color: hot ? "#e8a33b" : "#ededed", textDecoration: "none" }}>
              <Icon size={26} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: "1.4rem", textTransform: "uppercase", letterSpacing: "-.01em" }}>{label}</div>
                <div style={{ color: "#b7ab98", fontSize: ".9rem" }}>{sub}</div>
              </div>
              <ArrowRight size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
