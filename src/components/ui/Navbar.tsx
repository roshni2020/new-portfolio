"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { LINKS } from "@/data/resume";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Wins", href: "/#wins" },
  { name: "Work", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : "auto"; }, [open]);

  const ease = "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
  return (
    <>
      <header style={{ position: "fixed", top: scrolled ? "1rem" : "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 100, transition: ease, width: scrolled ? (mobile ? "90%" : "auto") : "100%", maxWidth: 1600, padding: scrolled ? 0 : "0 4vw" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", backgroundColor: scrolled ? "rgba(13,13,13,0.7)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", border: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent", borderRadius: scrolled ? 999 : 0, padding: scrolled ? "0.75rem 1.5rem" : 0, transition: ease }}>
          <Magnetic>
            <Link href="/" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#ededed" }}>
              R<span style={{ color: "#e8a33b" }}>K.</span>
            </Link>
          </Magnetic>

          {!mobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}>
              {navLinks.map((l) => (
                <Magnetic key={l.name}>
                  <Link href={l.href} data-cursor-hover="true" className="navlink" style={{ fontSize: ".8rem", fontWeight: 600, color: "#ededed", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".12em" }}>{l.name}</Link>
                </Magnetic>
              ))}
            </nav>
          )}

          {mobile && (
            <button onClick={() => setOpen(!open)} data-cursor-hover="true" style={{ background: "transparent", border: "none", color: "#ededed", cursor: "pointer", zIndex: 101, position: "relative", padding: ".5rem" }}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {mobile && open && (
          <motion.div initial={{ clipPath: "circle(0% at 100% 0)" }} animate={{ clipPath: "circle(150% at 100% 0)" }} exit={{ clipPath: "circle(0% at 100% 0)" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "fixed", inset: 0, backgroundColor: "#0d0d0d", zIndex: 90, display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((l, i) => (
                <div key={l.name} style={{ overflow: "hidden" }}>
                  <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "100%", opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                    <Link href={l.href} onClick={() => setOpen(false)} style={{ fontSize: "clamp(2.5rem, 10vw, 4.5rem)", fontWeight: 800, color: "#ededed", textDecoration: "none", textTransform: "uppercase", letterSpacing: "-0.04em", display: "block" }}>{l.name}</Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ position: "absolute", bottom: "8vh", left: "2rem" }}>
              <p style={{ color: "#b7ab98", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".15em" }}>Say hello</p>
              <a href={`mailto:${LINKS.email}`} style={{ color: "#e8a33b", fontSize: "1.1rem", textDecoration: "none", marginTop: ".5rem", display: "block" }}>{LINKS.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`.navlink{position:relative}.navlink::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:2px;background:#e8a33b;transition:width .3s}.navlink:hover::after{width:100%}`}</style>
    </>
  );
}
