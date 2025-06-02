import { useState, useEffect } from "react";
import myPhoto from "../assets/my-photo-2.jpg";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                <div className="flex justify-center">
                    {/* Photo Container */}
                    <div className="relative w-48 h-64">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full md:rounded-2xl animate-pulse"></div>
                        <div className="absolute inset-2 bg-background rounded-full md:rounded-2xl overflow-hidden">
                            <img 
                                src={myPhoto}
                                alt="Laksh Madaan" 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        {/* Animated rings */}
                        <div className="absolute -inset-4 border-4 border-yellow-600 rounded-full md:rounded-2xl animate-[rotate_10s_linear_infinite]"></div>
                        <div className="absolute -inset-6 border-2 border-yellow-400 rounded-full md:rounded-2xl animate-[rotate_10s_linear_infinite]"></div>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h1>
                        <span className="block text-2xl">Hi, My Name Is</span>
                        <div className="text-5xl font-bold">
                           <span className="text-foreground">Laksh </span>
                           <span className="text-yellow-600">Madaan</span>
                        </div>
                    </h1>
                </div>
            </div>
        </section>
    )
}