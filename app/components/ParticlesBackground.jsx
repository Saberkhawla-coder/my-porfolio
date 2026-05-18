"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10 h-100"
      options={{
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4
            }
          }
        },
        particles: {
          color: { value: "#22c55e" },
          links: {
            color: "#22c55e",
            distance: 250,
            enable: true,
            opacity: 0.3,
            width: 2
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            density: {
              enable: true,
              area: 1200
            },
            value: 50
          },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 2 } }
        },
        detectRetina: true
      }}
    />
  );
}