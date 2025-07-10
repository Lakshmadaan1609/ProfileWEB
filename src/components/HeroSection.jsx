import myPhoto from "../assets/my-photo-2.png";
import { Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-lg text-gray-300 mb-2">Hello, I'm</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Laksh</span>{' '}
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Madaan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                        Web Developer 
                    </h2>
                    <div className="flex gap-4 justify-center md:justify-start mb-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23263a] text-white transition-all duration-200 shadow-lg border border-gray-700 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-black hover:to-gray-800"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/laksh-madaan-287009314"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23263a] text-white transition-all duration-200 shadow-lg border border-gray-700 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                    </div>
                    <p className="text-gray-400 max-w-xl mb-8">
                        I build modern, responsive web applications and bring creative digital solutions to life..
                    </p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={myPhoto}
                        alt="Laksh Madaan"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
                        style={{ background: "#6c47b6" }}
                    />
                </div>
            </div>
        </section>
    )
}