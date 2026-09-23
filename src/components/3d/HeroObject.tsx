"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Fluid bronze blob + dust. Follows the cursor, sloshes on scroll, sinks back as you leave the hero.
export function HeroObject() {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useRef<{ distort: number } | null>(null);
  const { viewport } = useThree();
  const s = useRef({ scroll: 0, vel: 0, lastY: 0, mx: 0, my: 0 }).current;

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      s.scroll = max > 0 ? window.scrollY / max : 0;
      s.vel = Math.min(Math.abs(window.scrollY - s.lastY) / 60, 1);
      s.lastY = window.scrollY;
    };
    const onMove = (e: MouseEvent) => { s.mx = (e.clientX / window.innerWidth) * 2 - 1; s.my = -(e.clientY / window.innerHeight) * 2 + 1; };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, [s]);

  const mobile = viewport.width < 5;
  const base = mobile ? 1.4 : 1.7;
  const dust = useMemo(() => { const a = new Float32Array(600 * 3); for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 20; return a; }, []);

  useFrame((_, dt) => {
    const m = mesh.current;
    if (!m) return;
    s.vel *= 0.92;
    m.rotation.y += dt * 0.15; m.rotation.x += dt * 0.07;
    const tx = (mobile ? 0 : 1.4) + s.mx * 0.5, ty = 1.2 + s.my * 0.4;
    m.position.x += (tx - m.position.x) * 0.05;
    m.position.y += (ty - m.position.y) * 0.05;
    m.position.z = -s.scroll * 12;
    m.scale.setScalar(base * Math.max(0.4, 1 - s.scroll * 0.8));
    if (mat.current) mat.current.distort = 0.55 + s.vel * 0.5;
  });

  return (
    <>
      <Sphere ref={mesh} args={[1, 128, 128]}>
        <MeshDistortMaterial ref={mat as never} color="#3a2a14" distort={0.55} speed={2} roughness={0.25} metalness={0.9} emissive="#e8a33b" emissiveIntensity={0.08} />
      </Sphere>
      <Points positions={dust}>
        <PointMaterial color="#b7ab98" size={0.03} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
      </Points>
    </>
  );
}
