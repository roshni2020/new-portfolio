"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { highlights, certs, LINKS } from "@/data/resume";

const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "5vh 4vw" };

export function WinsSection() {
  return (
    <>
      <section id="wins" className="section">
        <div className="container">
          <div className="eyebrow">Hackathon highlights</div>
          <div style={grid}>
            {highlights.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ borderLeft: "2px solid #e8a33b", paddingLeft: 20 }}>
                <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.1rem" }}>{h.award}</div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, margin: ".4rem 0" }}>{h.title}</h3>
                <p style={{ color: "#b7ab98", lineHeight: 1.5 }}>{h.body}</p>
                <Link href={`/projects/${h.slug}`} data-cursor-hover="true" style={{ display: "inline-block", marginTop: ".8rem", color: "#ededed", fontWeight: 800, fontSize: ".78rem", letterSpacing: ".15em", borderBottom: "2px solid #e8a33b", paddingBottom: 3, textDecoration: "none" }}>CASE STUDY</Link>
              </motion.div>
            ))}
          </div>
          <p style={{ color: "#b7ab98", maxWidth: "40rem", marginTop: "6vh", lineHeight: 1.5 }}>
            Twelve-plus hackathons so far, mostly in San Francisco. The rest of them, with photos, are on{" "}
            <a href={LINKS.linkedin} target="_blank" rel="noopener" data-cursor-hover="true" style={{ color: "#e8a33b", fontWeight: 600 }}>LinkedIn</a>.
          </p>
        </div>
      </section>

      <section id="certs" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Certifications</div>
          <div style={grid}>
            {certs.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <div style={{ color: "#e8a33b", fontWeight: 800, fontSize: "1.1rem" }}>{c.when}</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, margin: ".4rem 0" }}>{c.title}</h3>
                <p style={{ color: "#b7ab98" }}>{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
