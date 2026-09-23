"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { LINKS } from "@/data/resume";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container">
        <motion.div style={{ y, marginBottom: "8vw" }}>
          <div className="eyebrow">Work</div>
          <h2 style={{ fontSize: "clamp(3rem, 8vw, 8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase" }}>
            Selected<br /><span style={{ color: "#e8a33b" }}>Works.</span>
          </h2>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8vw" }}>
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
        <p style={{ marginTop: "8vw", color: "#b7ab98" }}>
          Everything else, including the smaller builds, is on <a href={LINKS.github} target="_blank" rel="noopener" data-cursor-hover="true" style={{ color: "#e8a33b", fontWeight: 600 }}>GitHub</a>.
        </p>
      </div>
    </section>
  );
}
