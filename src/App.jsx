import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeToggle } from "./components/themeToggle";
import { Home } from "./pages/Home";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";



function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;