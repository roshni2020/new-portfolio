"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/ui/SplitText";
import { skills, LINKS } from "@/data/resume";

const stats = [["5×", "Hackathon winner"], ["12+", "Hackathons"], ["16", "Public repos"], ["MS", "Computer Science"]];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="eyebrow">About</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6vw", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 45%", minWidth: 300 }}>
            <SplitText text="Build fast." as="h2" className="split-heading" />
            <SplitText text="Learn faster." as="h2" className="split-heading-accent" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginTop: "5vh", maxWidth: 480 }}>
              {stats.map(([n, l]) => (
                <div key={l}><div style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, color: "#e8a33b", lineHeight: 0.9 }}>{n}</div><div style={{ fontSize: ".75rem", letterSpacing: ".2em", color: "#b7ab98", textTransform: "uppercase", marginTop: 6 }}>{l}</div></div>
              ))}
            </div>
          </div>

          <div style={{ flex: "1 1 40%", minWidth: 300, display: "flex", flexDirection: "column", gap: "3rem" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }}>
              <img src="/roshni.jpg" alt="Roshni Kobula Raja" style={{ float: "right", width: "38%", maxWidth: 200, aspectRatio: "3/4", objectFit: "cover", objectPosition: "50% 30%", borderRadius: "120px 120px 12px 12px", margin: "0 0 1rem 1.5rem" }} />
              <p style={{ color: "#ededed", fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)", lineHeight: 1.4, fontWeight: 500, marginBottom: "1.5rem" }}>
                MS in Computer Science, Binghamton. Ships agentic AI systems end to end, with the retrieval, ranking and test coverage to back them up.
              </p>
              <div style={{ color: "#b7ab98", fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p>I grew up in India and studied Information Technology in Chennai. My first real taste of building with data was an AI/ML internship at UT Dallas, then a data analyst internship at Kanini, where a document-analysis app I shipped cut manual processing time by 40%.</p>
                <p>In January 2024 I moved to New York for my Master&rsquo;s at Binghamton, my first long stretch away from home, and worked part-time all the way through to support myself. As a Graduate Assistant I built an agentic career-planning system with Watson Career Services, which grew into EvidPath.</p>
                <p>I graduated in May 2026 and moved to the Bay Area. Since then most of my weekends have gone to San Francisco hackathons: 12+ so far, and a five-time winner. I like problems with a real person at the end of them, like flood warnings, accessibility, and knowledge that would otherwise walk out the door. I debug to root cause and leave tests behind.</p>
              </div>
              <a href={LINKS.linkedin} target="_blank" rel="noopener" data-cursor-hover="true" style={{ display: "inline-flex", alignItems: "center", gap: 12, marginTop: "2rem", padding: ".9rem 1.4rem", border: "1px solid #e8a33b", borderRadius: 999, color: "#ededed", textDecoration: "none", fontWeight: 600, fontSize: ".95rem", clear: "both" }}>
                <b style={{ background: "#e8a33b", color: "#0d0d0d", borderRadius: 6, padding: "2px 7px", fontWeight: 800 }}>in</b> See the full picture on LinkedIn — 500+ connections, hackathon recaps, photos →
              </a>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", paddingTop: "3rem", borderTop: "1px solid #2a2620" }}>
              {skills.map((g, i) => (
                <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <h4 style={{ color: "#e8a33b", fontWeight: 700, marginBottom: ".8rem", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".25em" }}>{g.title}</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".4rem" }}>
                    {g.items.map((it) => <li key={it} style={{ color: "#b7ab98", fontSize: "1rem" }}>{it}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
