import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
      <div className = "min-h-screen bg-background text-foreground overflow-x-hidden" >
        {/* THEME TOGGLE */}
        <ThemeToggle/>
        {/* back Ground  */}
        <StarBackground />

        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
        </main>
        
        {/* Footer */}
        <Footer />
    </div>
    );
};
 