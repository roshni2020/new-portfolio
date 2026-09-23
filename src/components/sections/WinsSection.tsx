"use client";

import { motion } from "framer-motion";
import { wins, certs, LINKS } from "@/data/resume";

const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "5vh 4vw" };

export function WinsSection() {
  return (
    <>
      <section id="wins" className="section">
        <div className="container">
          <div className="eyebrow">Hackathon wins — 4 podiums in 12</div>
          <div style={grid}>
            {wins.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ borderLeft: "2px solid #e8a33b", paddingLeft: 20 }}>
                <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.3rem" }}>{w.icon} {w.when}</div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, margin: ".4rem 0" }}>{w.title}</h3>
                <p style={{ color: "#b7ab98", lineHeight: 1.5 }}>{w.body}</p>
              </motion.div>
            ))}
          </div>
          <p style={{ color: "#b7ab98", maxWidth: "40rem", marginTop: "6vh", lineHeight: 1.5 }}>
            Also built at MongoDB Build Fest (Successor), Lemma × Comma Capital (EchoLoop), and eight more weekends in San Francisco. Every one is on{" "}
            <a href={LINKS.linkedin} target="_blank" rel="noopener" data-cursor-hover="true" style={{ color: "#e8a33b", fontWeight: 600 }}>LinkedIn</a> with photos and write-ups.
          </p>
        </div>
      </section>

      <section id="certs" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Certifications</div>
          <div style={grid}>
            {certs.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.2rem" }}>{c.when}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, margin: ".4rem 0" }}>{c.title}</h3>
                <p style={{ color: "#b7ab98" }}>{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
