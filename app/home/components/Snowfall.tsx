"use client";

import React, { useEffect, useRef } from "react";

const Snowfall = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSnowflake = () => {
      const snowflake = document.createElement("img");
      snowflake.src = "/6.png";
      snowflake.className = "absolute z-10 animate-snow-fall";
      const size = Math.random() * 20 + 10;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.opacity = `${Math.random()}`;
      container.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    const interval = setInterval(createSnowflake, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-500 "
    ></div>
  );
};

export default Snowfall;
