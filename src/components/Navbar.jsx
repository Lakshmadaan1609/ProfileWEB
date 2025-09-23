import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name : "Home", href: "/"},
    {name : "About", href: "about", isScroll: true},
    {name : "Skills", href: "skills", isScroll: true},
    {name : "Projects", href: "projects", isScroll: true},
    {name : "Music", href: "/music", isExternal: true},
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= lastScrollY);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
      <nav className={cn(
        "fixed w-full z-40 transition-all duration-300 py-5",
        !isVisible && "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-center">
            <a className="text-xl font-bold text-yellow-600 flex items-center absolute left-4">
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> LaKsH </span>
                    <span className="bg-yellow-600 font-italic text-white p-1 rounded-md hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/50 transition-all duration-200 cursor-pointer">Portfolio</span>
                </span>
            </a>

            {/* desktop nav*/}
            <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, key) => (
                    item.isExternal ? (
                        <Link 
                            key={key} 
                            to={item.href}
                            className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                            duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        >
                            {item.name}
                        </Link>
                    ) : item.isScroll ? (
                        <ScrollLink 
                            key={key} 
                            to={item.href}
                            smooth={true}
                            duration={800}
                            offset={-80}
                            className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                            duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] cursor-pointer"
                        >
                            {item.name}
                        </ScrollLink>
                    ) : (
                        <Link 
                            key={key} 
                            to={item.href}
                            className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                            duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </div>

            {/* Mobile menu button */}
            <button 
                className="block lg:hidden p-2 text-foreground"
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
                "transition-all duration-300 lg:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        item.isExternal ? (
                            <Link 
                                key={key} 
                                to={item.href}
                                className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                                duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ) : item.isScroll ? (
                            <ScrollLink 
                                key={key} 
                                to={item.href}
                                smooth={true}
                                duration={800}
                                offset={-80}
                                className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                                duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <Link 
                                key={key} 
                                to={item.href}
                                className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                                duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
      </nav>
    );
}