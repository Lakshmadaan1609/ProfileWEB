import { useState, useEffect } from "react";
import myPhoto from "../assets/my-photo-2.jpg";
import { Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-lg text-gray-300 mb-2">Hello, I'm</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Laksh</span>{' '}
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Madaan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                        Web Developer 
                    </h2>
                    <p className="text-gray-400 max-w-xl mb-8">
                        I build modern, responsive web applications and bring creative digital solutions to life..
                    </p>
                </div>
                {/* Right: Profile Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                        <img
                            src={myPhoto}
                            alt="Laksh Madaan"
                            className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-lg"
                            style={{ background: "#6c47b6" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}