"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import HomeSection from "@/components/home/Home";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Resume from "@/components/home/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-dark-1 text-light">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main 
        className={`flex-1 relative min-w-0 overflow-x-hidden transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        <HomeSection />
        <About />
        <Skills />
        <Resume />
        
        <Portfolio />

        <Testimonials />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}
