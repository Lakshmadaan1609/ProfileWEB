import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import JavaImg from "../assets/JavaImg.png";
import HAR from "../assets/HAR.jpeg";
import pcd from "../assets/pcd.jpeg";

const projects = [
    {
        title: "JAVA ENGINEERING PRODUCTS",
        description: "A Product Based Website Which Deals in Engineering Machine Elements",
        image: JavaImg,
        tags: ["React", "TailwindCSS"],
        github: "https://github.com/Lakshmadaan1609/Website-JAVAENGWORKS-",
        live: "https://ai-image-generator.com",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Human Acitivity Detection",
        description: "Detecting The Human Physical Movement from Analyzing Activity Data",
        image: HAR,
        tags: ["Python", "Scikit-learn", "Machine Learning"],
        github: "https://github.com/Lakshmadaan1609/Human-Activity-Recognition",
        live: "https://ecommerce-platform.com",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Personalised Cancer Detection",
        description: "A Collaborative Research On Detecting the Cancer Before it Generation",
        image: pcd,
        tags: ["Python", "Scikit-learn", "Machine Learning"],
        github: "https://github.com/Lakshmadaan1609/Personalised-Cancer-Diagnosis-",
        live: "https://task-manager.com",
        color: "from-green-500 to-emerald-500"
    }
];

const ProjectSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-20 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-yellow-600/5" />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-yellow-600">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each one is a unique journey of learning and creativity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-xl overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                                            className="px-3 py-1 bg-yellow-600/10 text-yellow-600 rounded-full text-sm"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={false}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
