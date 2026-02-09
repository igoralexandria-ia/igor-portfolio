"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import HomeSection from "@/components/home/Home";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Resume from "@/components/home/Resume";

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
        
        <section id="services" className="min-h-screen flex items-center justify-center bg-dark-1">
          <h2 className="text-4xl font-bold text-light-muted">Serviços (Em Breve)</h2>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center bg-dark-2">
            <h2 className="text-4xl font-bold text-light-muted">Portfólio (Em Breve)</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-dark-1">
            <h2 className="text-4xl font-bold text-light-muted">Contato (Em Breve)</h2>
        </section>

      </main>
    </div>
  );
}
