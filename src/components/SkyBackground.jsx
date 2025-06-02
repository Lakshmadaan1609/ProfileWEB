import { useEffect, useState } from "react";

const generateClouds = () => {
  const clouds = [];
  const numClouds = 8;
  for (let i = 0; i < numClouds; i++) {
    clouds.push({
      id: i,
      top: Math.random() * 60,
      left: Math.random() * 100,
      size: 150 + Math.random() * 200,
      delay: Math.random() * 10,
      duration: 40 + Math.random() * 30,
      layers: Math.floor(Math.random() * 4) + 3,
      opacity: 0.3 + Math.random() * 0.2,
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
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000 bg-gradient-to-b from-blue-100/80 to-blue-300/80 dark:from-blue-900/80 dark:to-blue-400/80">
      {clouds.map((cloud) => (
        <div key={cloud.id} className="absolute" style={{
          top: `${cloud.top}%`,
          left: `-${cloud.size}px`,
          animationDuration: `${cloud.duration}s`,
          animationDelay: `${cloud.delay}s`,
        }}>
          {[...Array(cloud.layers)].map((_, layerIndex) => (
            <div
              key={layerIndex}
              className="absolute bg-white/70 dark:bg-gray-300/70 rounded-full shadow-md animate-cloud"
              style={{
                width: `${cloud.size * (1 - layerIndex * 0.15)}px`,
                height: `${cloud.size * 0.35 * (1 - layerIndex * 0.1)}px`,
                top: `${layerIndex * 12}px`,
                left: `${layerIndex * 15}px`,
                opacity: cloud.opacity * (1 - layerIndex * 0.1),
                animationDuration: `${cloud.duration}s`,
                animationDelay: `${cloud.delay}s`,
                transform: `scale(${1 + Math.random() * 0.2})`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkyBackground;
