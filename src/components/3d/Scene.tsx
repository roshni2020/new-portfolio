"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Fluid bronze blob, scoped to the hero: it lives inside the hero <section>, only animates while the hero is
// on screen, and falls back to a static gradient when WebGL isn't available.
export function Scene() {
  const [ready, setReady] = useState<null | boolean>(null); // null = deciding, false = no WebGL
  const [visible, setVisible] = useState(true);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ok = false;
    try { ok = !!document.createElement("canvas").getContext("webgl2"); } catch {}
    const t = setTimeout(() => setReady(ok), 0);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    if (host.current) io.observe(host.current);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);

  return (
    <div ref={host} aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 45% 55% at 62% 40%, #3a2a1466, transparent 70%)" }}>
      {ready && (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} frameloop={visible ? "always" : "never"}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 8, 7]} intensity={2.2} color="#ffe2b8" />
          <pointLight position={[-6, -4, 4]} intensity={30} color="#e8a33b" />
          <Blob />
        </Canvas>
      )}
    </div>
  );
}

const DUST = (() => { const a = new Float32Array(500 * 3); let x = 12345; for (let i = 0; i < a.length; i++) { x = (x * 16807) % 2147483647; a[i] = (x / 2147483647 - 0.5) * 20; } return a; })(); // seeded, so render is pure

function Blob() {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<{ distort: number } | null>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const mobile = viewport.width < 5;

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1; };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, dt) => {
    const m = mesh.current; if (!m) return;
    m.rotation.y += dt * 0.15; m.rotation.x += dt * 0.07;
    const tx = (mobile ? 0 : 1.4) + mouse.current.x * 0.5, ty = (mobile ? 1.8 : 1.2) + mouse.current.y * 0.4;
    m.position.x += (tx - m.position.x) * 0.05;
    m.position.y += (ty - m.position.y) * 0.05;
  });

  return (
    <>
      <Sphere ref={mesh} args={[1, 96, 96]} scale={mobile ? 1.3 : 1.7}>
        <MeshDistortMaterial ref={mat as never} color="#3a2a14" distort={0.55} speed={2} roughness={0.25} metalness={0.9} emissive="#e8a33b" emissiveIntensity={0.08} />
      </Sphere>
      <Points positions={DUST}>
        <PointMaterial color="#b7ab98" size={0.03} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
      </Points>
    </>
  );
}
