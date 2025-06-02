// src/components/SkyBackground.jsx
import { useEffect, useState } from "react";

const generateClouds = () => {
  const clouds = [];
  const numClouds = 5;
  for (let i = 0; i < numClouds; i++) {
    clouds.push({
      id: i,
      top: Math.random() * 80,
      left: Math.random() * 100,
      size: 100 + Math.random() * 100,
      delay: Math.random() * 5,
      duration: 30 + Math.random() * 20,
    });
  }
  return clouds;
};

const SkyBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    setClouds(generateClouds());
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000 bg-gradient-to-b from-blue-100/80 to-blue-300/80 dark:from-blue-900/80 dark:to-blue-700/80">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute bg-white/70 dark:bg-gray-300/70 rounded-full opacity-70 shadow-md animate-cloud"
          style={{
            top: `${cloud.top}%`,
            left: `-${cloud.size}px`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SkyBackground;
