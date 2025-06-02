import { useEffect, useState } from "react";
import { Code, Brain, Database } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id= "about" className="py-2 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-yellow-600">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center mt-25">
                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center justify-center">
                     Front-End Developer 
                        & AI Enthusiast
                        
                    </h3>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed px-4 lg:px-8">
                        A Passionate Learner of Technolgies,
                        I Specialize Myself in creating websites
                        which are responsive, Modern UI, Accesible which StandOut
                        From those boring Websites using Mordern Technolgies 
                        like ReactJS, tailwindCss and Artificial Inteligence 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdDxHThRBVznXbhtqrRSZrGmSKzNMsGgGMfJJFdqTqJTzClXKLlHQVFVncMBZbqMwPQhLng" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors duration-100 font-medium">
                            Get in Touch
                        </a>
                        <a href="/Laksh_Resume.pdf" 
                        download="Laksh_Resume.pdf"
                        className="border-foreground hover:bg-white hover:text-yellow-600 text-white px-6 py-3 rounded-lg transition-colors duration-100 font-medium">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-yellow-600/20 rounded-xl p-6 hover:bg-yellow-600/10 transition-all duration-300">
                        <Code className="w-10 h-10 text-yellow-600 -mt-4"/>
                        <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                        <p className="text-gray-700">Building responsive and modern web applications using ReactJS and Tailwind CSS</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-yellow-600/20 rounded-xl p-6 hover:bg-yellow-600/10 transition-all duration-300">
                        <Brain className="w-10 h-10 text-yellow-600 -mt-4"/>
                        <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
                        <p className="text-gray-700">Implementing AI features and creating intelligent web solutions</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-yellow-600/20 rounded-xl p-6 hover:bg-yellow-600/10 transition-all duration-300">
                        <Database className="w-10 h-10 text-yellow-600 -mt-4"/>
                        <h4 className="text-xl font-semibold mb-2">Blockchains</h4>
                        <p className="text-gray-700">Currently Developing Skills in Building Smart Contracts and Decentralized Applications</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};