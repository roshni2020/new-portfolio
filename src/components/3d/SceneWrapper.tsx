"use client";

import dynamic from "next/dynamic";

// Filter out upstream Three.js r183+ deprecation warning for THREE.Clock used by @react-three/fiber
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock: This module has been deprecated")
    ) {
      return;
    }
    originalWarn(...args);
  };
}

const SceneDynamic = dynamic(() => import("./Scene").then(mod => mod.Scene), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 bg-background flex items-center justify-center">
      {/* Fallback loading state for the 3D scene */}
    </div>
  )
});

export function SceneWrapper() {
  return <SceneDynamic />;
}
