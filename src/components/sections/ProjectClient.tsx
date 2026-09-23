"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Magnetic } from "@/components/ui/Magnetic";
import { useRef } from "react";
import { Project } from "@/data/projects";

export function ProjectClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#ededed]">
      <Navbar />

      {/* Hero Parallax */}
      <section
        ref={containerRef}
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: -20,
            backgroundImage: `url(${project.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, #0d0d0d 0%, rgba(10,10,10,0.3) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            opacity,
            padding: "0 4vw",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "clamp(3rem, 8vw, 10rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              lineHeight: 0.9,
              marginBottom: "1rem",
            }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: "#b7ab98",
              fontSize: "clamp(1.2rem, 2vw, 2rem)",
            }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content (Editorial Layout) */}
      <main
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "10vw 4vw",
          display: "flex",
          flexWrap: "wrap",
          gap: "8vw",
        }}
      >
        {/* Sticky Sidebar (Left) */}
        <aside
          style={{
            flex: "1 1 30%",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "20vh",
              display: "flex",
              flexDirection: "column",
              gap: "4vh",
            }}
          >
            <Magnetic>
              <Link
                href="/#projects"
                data-cursor-hover="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#b7ab98",
                  textDecoration: "none",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.875rem",
                }}
              >
                <ArrowLeft size={16} /> Back to Projects
              </Link>
            </Magnetic>

            <div>
              <h3
                style={{
                  color: "#ededed",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                Tech Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#b7ab98",
                      border: "1px solid #2a2620",
                      padding: "0.4rem 1rem",
                      borderRadius: "999px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {project.liveLink && (
                <Magnetic>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#ededed",
                      color: "#0d0d0d",
                      padding: "1rem 2rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Live Site <ExternalLink size={18} />
                  </a>
                </Magnetic>
              )}
              {project.repoLink && (
                <Magnetic>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "transparent",
                      color: "#ededed",
                      border: "1px solid #2a2620",
                      padding: "1rem 2rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Source <Code2 size={18} />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </aside>

        {/* Scrolling Content (Right) */}
        <div
          style={{
            flex: "1 1 50%",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "8vw",
          }}
        >
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "2rem",
                color: "#e8a33b",
              }}
            >
              The Challenge
            </h2>
            <p
              style={{
                color: "#b7ab98",
                fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                lineHeight: 1.6,
              }}
            >
              {project.problemStatement}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "2rem",
                color: "#ededed",
              }}
            >
              Technical Decisions
            </h2>
            <p
              style={{
                color: "#b7ab98",
                fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                lineHeight: 1.6,
              }}
            >
              {project.techDecisions}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "2rem",
                color: "#ededed",
              }}
            >
              Results
            </h2>
            <p
              style={{
                color: "#b7ab98",
                fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                lineHeight: 1.6,
              }}
            >
              {project.results}
            </p>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
