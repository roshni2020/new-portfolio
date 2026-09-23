"use client";

import { useEffect, useRef } from "react";

// Drives the cursor with direct DOM writes — no React state, so mouse moves never re-render anything.
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = dot.current!;
    el.style.display = "block";
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const onOver = (e: MouseEvent) => { el.dataset.hot = (e.target as HTMLElement).closest("a,button,[data-cursor-hover='true']") ? "1" : ""; };
    const tick = () => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; el.style.transform = `translate(${cx - 10}px, ${cy - 10}px) scale(${el.dataset.hot ? 2.5 : 1})`; raf = requestAnimationFrame(tick); };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onOver); };
  }, []);

  return (
    <>
      <div ref={dot} style={{ display: "none", position: "fixed", top: 0, left: 0, width: 20, height: 20, borderRadius: "50%", border: "2px solid rgba(255,255,255,.8)", pointerEvents: "none", zIndex: 9999, mixBlendMode: "difference", transition: "background .15s, border-color .15s", willChange: "transform" }} />
      <style>{`[data-hot="1"]{background:#fff;border-color:#fff!important}`}</style>
    </>
  );
}
