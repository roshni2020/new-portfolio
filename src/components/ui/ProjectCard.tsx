"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const even = index % 2 === 0;
  const href = `/projects/${project.slug}`;

  return (
    <div ref={ref} className="pcard" style={{ display: "flex", flexDirection: even ? "row" : "row-reverse", alignItems: "center", gap: "4vw", width: "100%" }}
      data-cursor-hover="true" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ flex: "1 1 55%", position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 12 }}>
        <Link href={href} style={{ display: "block", width: "100%", height: "100%" }}>
          <motion.div style={{ width: "100%", height: "130%", position: "absolute", top: "-15%", left: 0, y: imageY, backgroundImage: `url(${project.thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }}
            animate={{ scale: hover ? 1.05 : 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
        </Link>
      </div>

      <div style={{ flex: "1 1 45%", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          <span style={{ color: "#e8a33b", fontWeight: 800, fontSize: ".85rem", letterSpacing: ".2em" }}>{String(index + 1).padStart(2, "0")}</span>
          {project.award && <span style={{ color: "#e8a33b", fontSize: ".75rem", letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 600 }}>{project.award}</span>}
        </div>
        <Link href={href} style={{ textDecoration: "none" }}>
          <motion.h3 style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.6rem)", fontWeight: 800, color: "#ededed", lineHeight: 1, letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "1rem", textTransform: "uppercase" }}
            animate={{ x: hover ? (even ? 10 : -10) : 0 }} transition={{ duration: 0.4 }}>
            {project.title}
            <motion.span animate={{ rotate: hover ? 45 : 0, opacity: hover ? 1 : 0, x: hover ? 0 : -10 }} transition={{ duration: 0.4 }}><ArrowUpRight size={36} color="#e8a33b" /></motion.span>
          </motion.h3>
        </Link>
        <p style={{ color: "#b7ab98", fontSize: "clamp(1rem, 1.2vw, 1.25rem)", lineHeight: 1.5 }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>{project.techStack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: ".5rem", fontSize: ".8rem", letterSpacing: ".15em", fontWeight: 800 }}>
          <Link href={href} style={{ color: "#ededed", textDecoration: "none", borderBottom: "2px solid #e8a33b", paddingBottom: 3 }}>CASE STUDY</Link>
          {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener" style={{ color: "#e8a33b", textDecoration: "none" }}>LIVE ↗</a>}
          {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener" style={{ color: "#b7ab98", textDecoration: "none" }}>CODE ↗</a>}
        </div>
      </div>
      <style>{`@media (max-width: 800px){ .pcard{flex-direction:column !important; gap:4vh !important} }`}</style>
    </div>
  );
}
