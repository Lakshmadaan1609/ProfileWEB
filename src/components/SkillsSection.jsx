import { motion } from "framer-motion";
import { useRef, useState } from "react";
import reactLogo from '../assets/react.svg';

export const SkillsSection = () => {
  const techs = [
    { name: "PostgreSQL", icon: <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" className="h-[50px] w-auto" /> },
    { name: "GraphQL", icon: <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="GraphQL" className="h-[50px] w-auto" /> },
    { name: "Figma", icon: <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="h-[50px] w-auto" /> },
    { name: "AWS", icon: <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" className="h-[50px] w-auto" /> },
    { name: "Docker", icon: <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" className="h-[50px] w-auto" /> },
    { name: "Redis", icon: <img src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg" alt="Redis" className="h-[50px] w-auto" /> },
    { name: "MongoDB", icon: <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB" className="h-[50px] w-auto" /> },
    { name: "React", icon: <img src={reactLogo} alt="React" className="h-[50px] w-auto" /> },
    { name: "TypeScript", icon: <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" className="h-[50px] w-auto" /> },
    { name: "Node.js", icon: <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" className="h-[50px] w-auto" /> },
    { name: "Langchain", icon: <img src="https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.ico" alt="Langchain" className="h-[50px] w-auto rounded-full bg-white" /> },
    { name: "Vercel", icon: (
      <span className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-black">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="16,6 28,26 4,26" fill="white" />
        </svg>
      </span>
    ) },
    { name: "Next.js", icon: (
      <span className="flex items-center justify-center h-[50px] w-[50px] rounded-full bg-black">
        <span className="text-white text-3xl font-bold">N</span>
      </span>
    ) },
    { name: "Pinecone", icon: <img src="https://avatars.githubusercontent.com/u/78025208?s=200&v=4" alt="Pinecone" className="h-[50px] w-auto rounded-full bg-white" /> },
    { name: "TailwindCSS", icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="TailwindCSS" className="h-[50px] w-auto" /> },
    { name: "Python", icon: <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="h-[50px] w-auto" /> },
    { name: "Linux", icon: <img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="Linux" className="h-[50px] w-auto" /> },
  ];

  const sliderTechs = [...techs, ...techs];
  const [parallaxY, setParallaxY] = useState(0);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percent = y / rect.height;
    setParallaxY((percent - 0.5) * 20);
  };
  const handleMouseLeave = () => setParallaxY(0);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-header mb-2 text-center bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-600 dark:from-purple-400 dark:via-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          Technologies I Work With <span className="text-base font-normal">(My Skills)</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Modern tools for modern solutions
        </p>
        <div
          ref={containerRef}
          className="relative w-full overflow-x-hidden overflow-y-hidden group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="slider-track flex items-center gap-8 w-max py-2 group-hover:[animation-play-state:paused]"
            style={{
              animation: 'scroll-left 25s linear infinite',
              transform: `translateY(${parallaxY}px)`
            }}
          >
            {sliderTechs.map((tech, idx) => (
              <div
                key={tech.name + idx}
                className="flex flex-col items-center justify-center min-w-[80px] px-2 md:min-w-[90px] md:px-4 transition-all duration-200 hover:scale-125 rounded-xl"
              >
                {tech.icon}
                <span className="text-foreground text-xs md:text-sm mt-2 whitespace-nowrap text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider-track {
            width: max-content;
            overflow-y: hidden !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .slider-track::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};