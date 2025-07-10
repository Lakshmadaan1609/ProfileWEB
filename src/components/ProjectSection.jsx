import { useState } from "react";
import { Github, ExternalLink, X, Triangle } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Transition } from "@headlessui/react";

// Placeholder images (replace with real images if available)
import zakoMomoImg from "../assets/zako-momo.png";
import powerpayImg from "../assets/power-Pay.png";
import placeholderImg from "../assets/engineerworks.png";
import humanActivityImg from "../assets/HAR.jpeg";
import cancerDetectionImg from "../assets/pcd.jpeg";
import bedImg from "../assets/bed.png";


// Top 3 featured projects (custom order)
const featuredProjects = [
  {
    title: "ZakoMomo",
    description: "Online Food Order. Payment Support. Partner With us.",
    image: zakoMomoImg,
    github: "https://github.com/Lakshmadaan1609/ZakoMomo",
    live: "https://zako-momos.vercel.app/",
    tags: ["React", "GSAP", "TailwindCSS"],
  },
  {
    title: "EngineerWorks",
    description: "A FullStack platform for engineering solutions Access to admin dashboard",
    image: placeholderImg,
    github: "https://github.com/Lakshmadaan1609/EngineerWorks",
    live: "https://engineering-works-full-stack-mern.vercel.app/",
    tags: ["React", "Express","MongoDB","Node.js"],
    highlights: ["MERN STACK", "Admin Dashboard", "User Dashboard"],
  },
  {
    title: "Powerpay",
    image: powerpayImg,
    github: "https://github.com/Lakshmadaan1609/Powerpay",
    live: "https://power-pay-full-stack.vercel.app/",
    tags: ["Fintech", "Payments"],
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "BlissFull Beds",
    description: "E-commerce platform for premium bedding and furniture",
    image: bedImg,
    github: "https://github.com/Lakshmadaan1609/bliss-full-beds",
    live: "https://bliss-full-beds-e-comm.vercel.app/",
    tags: ["E-commerce", "React", "Node.js"],
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

// Other projects (replace with real data from GitHub API if available)
const otherProjects = [
  {
    title: "Human Activity Detection",
    description: "Detecting The Human Physical Movement from Analyzing Activity Data",
    image: humanActivityImg,
    github: "https://github.com/Lakshmadaan1609/Human-Activity-Recognition",
    live: "",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    highlights: ["ML model for activity recognition", "Data preprocessing pipeline", "Accuracy > 90%"],
  },
  {
    title: "Personalised Cancer Detection",
    description: "A Collaborative Research On Detecting the Cancer Before it Generation",
    image: cancerDetectionImg,
    github: "https://github.com/Lakshmadaan1609/Personalised-Cancer-Diagnosis-",
    live: "",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    highlights: ["Early detection algorithms", "Personalized risk assessment", "Research collaboration"],
  },
  {
    title: "Sample Project 1",
    description: "This is a sample project description. Replace with real data.",
    image: placeholderImg,
    github: "https://github.com/Lakshmadaan1609/sample-project-1",
    live: "",
    tags: ["React", "Node.js"],
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Sample Project 2",
    description: "This is a sample project description. Replace with real data.",
    image: placeholderImg,
    github: "https://github.com/Lakshmadaan1609/sample-project-2",
    live: "",
    tags: ["React", "Node.js"],
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Sample Project 3",
    description: "This is a sample project description. Replace with real data.",
    image: placeholderImg,
    github: "https://github.com/Lakshmadaan1609/sample-project-3",
    live: "",
    tags: ["React", "Node.js"],
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

// Helper to get perView from keen-slider instance
function getPerView(slider) {
  if (!slider.current) return 3;
  return slider.current.options.slides?.perView || 3;
}

// ProjectCard component for reuse
function ProjectCard({ project, onView, isFeatured }) {
  return (
    <div className={
      isFeatured
        ? "bg-[#181f2a] rounded-3xl shadow-2xl border-2 border-yellow-700/30 flex flex-col md:flex-row overflow-hidden w-full max-w-3xl min-h-[380px] transition-all duration-300 ease-in-out"
        : "keen-slider__slide bg-[#181f2a] rounded-xl shadow-lg flex flex-col overflow-hidden border border-[#232b3b] cursor-pointer transition-all duration-200 hover:shadow-yellow-200/20 hover:scale-[1.01] focus:scale-[1.01]"
    }>
      <img
        src={project.image}
        alt={project.title}
        className={isFeatured ? "w-full md:w-2/3 h-56 md:h-auto object-cover object-top transition-transform duration-300 ease-in-out hover:scale-105" : "w-full h-40 object-cover object-top transition-transform duration-200 hover:scale-105"}
        style={isFeatured ? { minHeight: 180 } : {}}
      />
      <div className={isFeatured ? "flex-1 flex flex-col p-8 justify-between" : "p-5 flex flex-col flex-1"}>
        <div>
          <h3 className={isFeatured ? "text-2xl font-bold text-white mb-2 line-clamp-1" : "text-lg font-bold text-white mb-1 line-clamp-1"}>{project.title}</h3>
          {/* Special badges for ZakoMomo and Powerpay */}
          {project.title === "ZakoMomo" && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.description.split('.').filter(Boolean).map((feature, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-yellow-400 to-pink-400 text-[#181f2a] px-2 py-0.5 rounded-full text-sm font-semibold shadow"
                >
                  {feature.trim()}
                </span>
              ))}
            </div>
          )}
          {project.title === "Powerpay" && (
            <div className="flex flex-wrap gap-2 mb-4">
              {["GSAP Animations", "Lottie Animations", "React", "TailwindCSS"].map((feature, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-green-400 to-blue-400 text-[#181f2a] px-2 py-0.5 rounded-full text-sm font-semibold shadow"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
          <p className={isFeatured ? "text-gray-400 text-base mb-4 line-clamp-3" : "text-gray-400 text-sm mb-2 line-clamp-2"}>{project.description}</p>
          <div className={isFeatured ? "flex flex-wrap gap-3 mb-6" : "flex flex-wrap gap-2 mb-3"}>
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={isFeatured ? "bg-[#232b3b] text-gray-200 px-4 py-1 rounded-full text-base font-medium transition-colors duration-200 hover:bg-yellow-400 hover:text-[#181f2a]" : "bg-[#232b3b] text-gray-200 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 hover:bg-yellow-400 hover:text-[#181f2a]"}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Action buttons for featured, icons for other */}
        {isFeatured ? (
          <button
            className="mt-auto flex items-center gap-2 bg-yellow-400 text-[#181f2a] hover:bg-yellow-500 font-semibold px-6 py-3 rounded transition-all duration-200 ease-in-out shadow hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={onView}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="16" height="16" rx="4" />
              <path d="M11 11h.01" />
            </svg>
            View Project
          </button>
        ) : (
          <div className="flex gap-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition"
                title="Live (Vercel)"
              >
                <ExternalLink size={22} />
              </a>
            ) : (
              <span className="text-gray-400" title="No live link">
                <Triangle size={22} />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const [modalProject, setModalProject] = useState(null);
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1 } },
    },
  });
  const [otherSliderRef, otherSlider] = useKeenSlider({
    loop: false,
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1, spacing: 8 } },
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 12 } },
    },
  });

  return (
    <section className="py-20 px-4 min-h-[80vh]">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            <span className="text-yellow-500">Featured Projects</span>
          </h2>
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {featuredProjects.map((project, idx) => (
                <div key={project.title + idx} className="keen-slider__slide flex justify-center">
                  <ProjectCard
                    project={project}
                    isFeatured={true}
                    onView={() => {
                      if (project.live) {
                        window.open(project.live, '_blank', 'noopener,noreferrer');
                      } else {
                        setModalProject(project);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Slider Arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#181f2a] hover:bg-yellow-600/20 text-white rounded-full p-2 shadow transition z-10"
              onClick={() => slider.current?.prev()}
              aria-label="Previous featured project"
              style={{ left: '-2.5rem' }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 26l-8-10 8-10" /></svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#181f2a] hover:bg-yellow-600/20 text-white rounded-full p-2 shadow transition z-10"
              onClick={() => slider.current?.next()}
              aria-label="Next featured project"
              style={{ right: '-2.5rem' }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 6l8 10-8 10" /></svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${slider.current?.track.details.rel === i ? "bg-yellow-400" : "bg-gray-600"}`}
                  onClick={() => slider.current?.moveToIdx(i)}
                  aria-label={`Go to featured project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other Projects Dropdown */}
        <div className="relative mt-12">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-[#181f2a] font-semibold rounded-full shadow hover:bg-yellow-500 transition mb-4 mx-auto"
            onClick={() => setShowOtherProjects((prev) => !prev)}
            aria-expanded={showOtherProjects}
          >
            {showOtherProjects ? "Hide Other Projects" : "Show Other Projects"}
            <svg
              className={`transition-transform duration-300 ${showOtherProjects ? "rotate-180" : "rotate-0"}`}
              width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <Transition
            show={showOtherProjects}
            enter="transition duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
          <div ref={otherSliderRef} className="keen-slider">
            {otherProjects.map((project, idx) => (
                  <ProjectCard
                key={project.title + idx}
                    project={project}
                    isFeatured={false}
                    onView={e => { e.stopPropagation(); setModalProject(project); }}
                  />
                ))}
              </div>
          {/* Dots for Other Projects */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(otherProjects.length / getPerView(otherSlider)) }).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  otherSlider.current && Math.floor(otherSlider.current.track.details.rel / getPerView(otherSlider)) === i
                    ? "bg-yellow-400"
                    : "bg-gray-600"
                }`}
                onClick={() => otherSlider.current?.moveToIdx(i * getPerView(otherSlider))}
                aria-label={`Go to other project page ${i + 1}`}
              />
            ))}
          </div>
            </div>
          </Transition>
        </div>

        {/* Modal for Project Details */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
            <div className="bg-[#181f2a] rounded-2xl shadow-2xl max-w-lg w-full p-8 relative text-white animate-fadeIn">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400"
                onClick={() => setModalProject(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{modalProject.title}</h3>
              <p className="text-gray-300 mb-4">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modalProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-[#232b3b] text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-5 mb-4 text-sm text-gray-400">
                {modalProject.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-2">
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                {modalProject.live && (
                  <a
                    href={modalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 