"use client";

import { Canvas } from "@react-three/fiber";
import { HeroObject } from "./HeroObject";
import { useEffect, useState } from "react";

export function Scene() {
  const [dpr, setDpr] = useState(1);
  useEffect(() => { setDpr(Math.min(window.devicePixelRatio, 1.5)); }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={dpr} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#0d0d0d"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 7]} intensity={2.2} color="#ffe2b8" />
        <pointLight position={[-6, -4, 4]} intensity={30} color="#e8a33b" />
        <HeroObject />
      </Canvas>
    </div>
  );
}
