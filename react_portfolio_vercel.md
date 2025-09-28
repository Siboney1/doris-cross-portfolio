// PortfolioCarousel.jsx
import React, { useEffect, useState } from "react";

export default function PortfolioCarousel({ logos, visible = 4, autoplayInterval = 2500, height = 84 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [logos.length, autoplayInterval]);

  const displayed = [];
  for (let i = 0; i < visible; i++) {
    displayed.push(logos[(currentIndex + i) % logos.length]);
  }

  return (
    <div className="flex justify-center items-center space-x-8 overflow-hidden px-4">
      {displayed.map((logo, idx) => (
        <a key={idx} href={logo.href || "#"} target="_blank" rel="noopener noreferrer">
          <img src={logo.src} alt={logo.name} className="object-contain" style={{ height: `${height}px` }} />
        </a>
      ))}
    </div>
  );
}

