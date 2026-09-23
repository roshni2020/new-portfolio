"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="eyebrow">Experience</div>
        {experience.map((j, i) => (
          <motion.div key={j.role} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7, delay: i * 0.05 }}
            style={{ display: "grid", gridTemplateColumns: "minmax(160px, 1fr) 3fr", gap: "3vw", padding: "5vh 0", borderTop: "1px solid #2a2620" }} className="job">
            <aside>
              <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.3rem", lineHeight: 1.15 }}>{j.when}</div>
              <div style={{ color: "#b7ab98", fontSize: ".9rem", marginTop: 4 }}>{j.where}</div>
            </aside>
            <div>
              <h3 style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: .95, letterSpacing: "-.02em" }}>{j.role}</h3>
              <h4 style={{ fontWeight: 600, letterSpacing: ".2em", fontSize: ".8rem", margin: ".6rem 0 1.4rem", textTransform: "uppercase", color: "#b7ab98" }}>{j.org}</h4>
              <ul style={{ paddingLeft: "1.1rem", maxWidth: "52rem", color: "#ededed" }}>
                {j.bullets.map((b) => <li key={b} style={{ marginBottom: ".6rem", fontSize: "1.05rem", lineHeight: 1.5 }}>{b}</li>)}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "1.2rem" }}>{j.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </div>
          </motion.div>
        ))}

        <div style={{ display: "grid", gridTemplateColumns: "minmax(160px, 1fr) 3fr", gap: "3vw", padding: "5vh 0", borderTop: "1px solid #2a2620", borderBottom: "1px solid #2a2620" }} className="job">
          <aside><div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.3rem" }}>Education</div></aside>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            {education.map((e) => (
              <div key={e.title}>
                <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.1rem" }}>{e.when}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, margin: ".4rem 0" }}>{e.title}</h3>
                <p style={{ color: "#b7ab98" }}>{e.org}. {e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 700px){ .job{grid-template-columns:1fr !important} }`}</style>
    </section>
  );
}
