"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBg() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="animated-bg"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#22c55e" },
          links: {
            enable: true,
            color: "#4ade80",
            distance: 120,
            opacity: 0.4,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
} 