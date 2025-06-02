import { useEffect, useState } from "react";
import { StarBackground } from "./StarBackground";
import SkyBackground from "./SkyBackground";

/**
 * A component that renders either a sky background (light mode) or a star background (dark mode)
 * depending on the current theme.
 */
export const ThemeBackground = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            const theme = localStorage.getItem("theme");
            setIsDarkMode(theme === "dark");
        };

        // Check theme on mount
        checkTheme();

        // Set up a MutationObserver to watch for changes to the class on the html element
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setIsDarkMode(isDark);
                }
            });
        });

        // Start observing the html element for class changes
        observer.observe(document.documentElement, { attributes: true });

        // Clean up observer on unmount
        return () => observer.disconnect();
    }, []);    return isDarkMode ? <StarBackground /> : <SkyBackground />;
};