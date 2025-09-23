import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, ArrowUp } from "lucide-react";
import { Link, Element } from "react-scroll";
import lfwa from "../assets/lfwa.png";
import powerPay from "../assets/power-Pay.png";
import zakoMomo from "../assets/zako-momo.png";
import har from "../assets/HAR.jpeg";
import pcd from "../assets/pcd.jpeg";
import bed from "../assets/bed.png";

export const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Learn French With Anks",
      description: "A comprehensive French learning platform for Canada PR preparation with TEF/TCF exam coaching, real-time chat support, and personalized learning paths.",
      image: lfwa,
      technologies: ["Next.js", "WebSockets", "Real-time Chat", "TypeScript"],
      category: "Education",
      type: "Learning Platform",
      liveUrl: "https://learn-frenchwith-anks-frontend.vercel.app/",
      githubUrl: "https://github.com/yourusername/lfwa",
      featured: true
    },
    {
      id: 2,
      title: "PowerPay Payment System",
      description: "Secure payment processing application with real-time transaction monitoring, fraud detection, and multi-currency support.",
      image: powerPay,
      technologies: ["React", "Stripe API", "Node.js", "PostgreSQL"],
      category: "Fintech",
      type: "Payment System",
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/powerpay",
      featured: true
    },
    {
      id: 3,
      title: "Zako Momo Delivery App",
      description: "Food delivery application with real-time order tracking, payment integration, and restaurant management system.",
      image: zakoMomo,
      technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      category: "Mobile App",
      type: "Food Delivery",
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/zako-momo",
      featured: true
    },
    {
      id: 4,
      title: "HAR Healthcare System",
      description: "Healthcare management system with patient records, appointment scheduling, and medical data analytics.",
      image: har,
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      category: "Healthcare",
      type: "Management System",
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/har-healthcare",
      featured: false
    },
    {
      id: 5,
      title: "PCD Project Management",
      description: "Project collaboration and development platform with version control, task management, and team communication tools.",
      image: pcd,
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      category: "Productivity",
      type: "Project Management",
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/pcd-platform",
      featured: false
    },
    {
      id: 6,
      title: "Smart Bed Monitoring System",
      description: "IoT-based smart bed system with health monitoring, sleep tracking, and emergency alerts.",
      image: bed,
      technologies: ["React", "IoT", "Python", "TensorFlow"],
      category: "IoT",
      type: "Health Monitoring",
      liveUrl: "#",
      githubUrl: "https://github.com/yourusername/smart-bed",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-header bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-600 dark:from-purple-400 dark:via-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            Recent <span className="text-base font-normal">Projects</span>
          </h2>
          <a
            href="mailto:laksh@example.com"
            className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors cursor-pointer"
          >
            Get In Touch →
          </a>
        </motion.div>

        {/* Featured Projects */}
        <Element name="featured-projects">
          <div className="flex gap-6 overflow-x-auto pb-4 mb-16 scrollbar-hide">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/10 backdrop-blur-sm border border-yellow-600/20 rounded-3xl overflow-hidden hover:bg-yellow-600/10 transition-all duration-500 ease-in-out min-w-[350px] max-w-[400px] flex-shrink-0"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  
                  {/* Category Tags */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs rounded-full font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-all duration-500 ease-in-out">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm group-hover:text-gray-300 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                  
                  {/* Hover Details Overlay */}
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-105 flex flex-col justify-center items-center p-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded-full border border-yellow-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-all duration-300 ease-in-out font-medium hover:scale-105 hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 px-6 py-3 border border-yellow-600/50 hover:bg-yellow-600/10 text-yellow-400 rounded-lg transition-all duration-300 ease-in-out font-medium hover:scale-105 hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Element>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-600/10 to-blue-500/10 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-yellow-600 to-blue-500"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">1</div>
                <div className="text-sm text-muted-foreground">Year Working</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-yellow-600 to-blue-500"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
            <p className="text-lg text-foreground mt-6 font-medium">
              Ready to bring your ideas to life with modern technology
            </p>
          </div>
          
          <a
            href="mailto:laksh@example.com"
            className="inline-block bg-gradient-to-r from-yellow-600 to-blue-500 hover:from-yellow-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </motion.div>

        {/* Scroll to Top Button */}
        
      </div>
      
    </section>
  );
};

export default ProjectSection;