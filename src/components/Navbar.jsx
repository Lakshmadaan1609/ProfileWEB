import { href } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name : "Home", href: "#hero"},
    {name : "About", href: "#about"},
    {name : "Skills", href: "#Skills"},
    {name : "Projects", href: "#projects"},
    {name : "Music", href: "#music"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect (() => {
       const handleScroll = () => {
           setIsScrolled(window.screenY > 10);
       };
       
       window.addEventListener("Scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
      <nav className = {cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <a className="text-xl font-bold text-yellow-600 flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> LaKsH </span>
                    <span className="bg-yellow-600 font-italic text-white p-1 rounded-md hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/50 transition-all duration-200 cursor-pointer">Portfolio</span>
                </span>
            </a>

            {/* desktop nav*/}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, key) => (
                    <a 
                        key={key} 
                        href={item.href}
                        className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                        duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    >
                       {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile menu button */}
            <button 
                className="block md:hidden p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/*mobile menu*/}
            <div className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href}
                            className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                            duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </nav>
    );
}