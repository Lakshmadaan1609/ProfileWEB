import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name : "Home", href: "#hero"},
    {name : "About", href: "#about"},
    {name : "Skills", href: "#skills"},
    {name : "Projects", href: "#projects"},
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
                    ) : (
                        <a 
                            key={key} 
                            href={item.href}
                            className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                            duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        >
                            {item.name}
                        </a>
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
                        ) : (
                            <a 
                                key={key} 
                                href={item.href}
                                className="text-foreground hover:text-yellow-600 hover:scale-105 transition-all 
                                duration-100 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
            </div>
        </div>
      </nav>
    );
}