import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";





export const Home = () => {
    return (
      <div className = "min-h-screen bg-background text-foreground overflow-x-hidden" >
        {/* THEME TOGGLE */}
        <ThemeToggle/>
        {/* back Ground  */}
        <StarBackground />


        <Navbar/>
        {/* Main Content */}
        {/* Navbar */}
        
        {/* Footer */}
    </div>
    );
};
 