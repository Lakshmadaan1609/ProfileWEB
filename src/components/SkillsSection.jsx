import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "⚡" },
  { name: "React", level: 70, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 70, category: "frontend", icon: "🎨" },

  // Backend
  { name: "Node.js", level: 10, category: "backend", icon: "🟢" },
  { name: "Express", level: 5, category: "backend", icon: "🚂" },
  { name: "MongoDB", level: 20, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 10, category: "backend", icon: "🐘" },
  

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools", icon: "📦" },
  { name: "Dockers", level: 90, category: "tools", icon: "🐳" },
  { name: "Figma", level: 0, category: "tools", icon: "🎯" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-white/5 backdrop-blur-sm mt-25">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-yellow-600">Skills</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-yellow-600 text-white shadow-lg shadow-yellow-600/30"
                  : "bg-white/10 text-gray-700 hover:bg-yellow-600/10"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.1)"
              }}
              className="bg-white/10 backdrop-blur-sm border border-yellow-600/20 p-6 rounded-xl hover:bg-yellow-600/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-yellow-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-yellow-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};