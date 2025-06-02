import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeToggle } from "./components/themeToggle";
import { Home } from "./pages/Home";
import { MusicPage } from "./pages/MusicPage";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<MusicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;