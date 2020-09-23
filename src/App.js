import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import "./styles.css";

export default function App() {
  const [windowSize, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const resizeHandler = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return (
    <div className="app">
      <h1>Particles</h1>
      <Particles
        width={windowSize.width}
        height={windowSize.height}
        params={{
          fpsLimit: 60,
          particles: {
            number: {
              density: {
                enable: true,
                area: 600
              },
              value: Math.min(Math.floor(windowSize.width / 10), 100)
            },
            size: {
              value: 5
            },
            move: {
              speed: 12
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </div>
  );
}
