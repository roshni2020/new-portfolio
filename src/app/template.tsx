"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate overlay up
    tl.to(overlayRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut"
    })
    // Bring content up slightly
    .fromTo(contentRef.current, 
      { y: 50, opacity: 0 }, 
      // clearProps: a leftover transform would turn the fixed 3D canvas into a page-tall absolute layer
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", clearProps: "transform" },
      "-=0.4"
    );
  }, []);

  return (
    <>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-[#0d0d0d] z-[9999] pointer-events-none"
        style={{ top: 0, transform: "translateY(0%)" }}
      />
      <div ref={contentRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </>
  );
}
