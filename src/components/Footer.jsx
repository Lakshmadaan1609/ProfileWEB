import { Link } from "react-router-dom";
import { Github, Linkedin, X, Mail, Music, Code } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/yourusername",
        color: "hover:text-gray-400"
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://linkedin.com/in/laksh-madaan-287009314",
        color: "hover:text-blue-500"
    },
    {
        name: "X",
        icon: <X className="w-5 h-5" />,
        href: "https://X.com/lakshmadaan1609",
        color: "hover:text-sky-400"
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFCzGdpljPDhWDPzsnfkfNkwngbSBMCKBlTbFvgDPWTmHkTxxnsZfjrgpddCChwBnPvjB",
        color: "hover:text-yellow-600"
    }
];

const quickLinks = [
    { name: "Home", href: "#hero", isRoute: false },
    { name: "About", href: "#about", isRoute: false },
    { name: "Skills", href: "#skills", isRoute: false },
    { name: "Projects", href: "#projects", isRoute: false },
    { name: "Music", href: "/music", isRoute: true }
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-background/50 backdrop-blur-sm border-t border-yellow-600/20">
            {/* Animated gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent animate-pulse" />
            
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center space-x-2"
                        >
                            
                            <Code className="w-6 h-6 text-yellow-600 translate-x-15"/>
                            <span className="text-xl font-bold translate-x-15">Laksh Madaan</span>
                            <Music className="w-6 h-6 text-yellow-600 translate-x-15"/>
                        </motion.div>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                            Building digital experiences with passion and creativity. 
                            Let's connect and create something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {link.isRoute ? (
                                        <Link
                                            to={link.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-center">Connect With Me</h3>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full bg-white/10 hover:bg-yellow-600/10 transition-all duration-300 ${social.color}`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-yellow-600/20 text-center text-gray-600 dark:text-gray-400"
                >
                    <p>© {currentYear} LaKsH. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Built with ❤️ using React and Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};
