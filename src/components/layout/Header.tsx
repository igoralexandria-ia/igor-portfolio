"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faBriefcase,
  faFileAlt,
  faFolderOpen,
  faComments,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface HeaderProps {
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: (isOpen: boolean) => void;
}

const Header = ({ isSidebarOpen = true, setIsSidebarOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: faHome },
    { id: "about", label: "Sobre Mim", icon: faUser },
    { id: "skills", label: "Skills", icon: faCode },
    { id: "resume", label: "Resumo", icon: faFileAlt },
    { id: "services", label: "Serviços", icon: faBriefcase },
    { id: "portfolio", label: "Portfólio", icon: faFolderOpen },
    { id: "testimonials", label: "Depoimentos", icon: faComments },
    { id: "contact", label: "Contato", icon: faEnvelope },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/igoralexandria-ia",
      label: "GitHub",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/igoralexandria/",
      label: "LinkedIn",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/1gor.alexandria",
      label: "Instagram",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = menuItems.map((item) => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleSidebar = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <>
      {/* Desktop Toggle Button */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex fixed top-6 left-6 w-12 h-12 items-center justify-center bg-dark-2 text-white rounded-full shadow-lg z-50 hover:bg-primary transition-all duration-300 border border-dark-3 cursor-pointer"
          aria-label="Open sidebar"
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
      )}

      <header
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 
        ${isScrolled ? "bg-dark-2/95 backdrop-blur-sm" : "bg-dark-2"}
        ${isSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"}
        lg:w-64 w-full lg:bg-dark-2/95`}
      >
        <div className="h-full flex flex-col p-6 relative">
            
          {/* Close Button (Desktop) */}
          <button
              onClick={toggleSidebar}
              className="hidden lg:flex absolute top-4 right-4 text-light-muted hover:text-primary transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
             <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>

          {/* Profile Section */}
          <div className="text-center mb-8 mt-4">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
              <Image
                width={200}
                height={200}
                src="/images/profile.jpg"
                alt="Igor Alexandria"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-light mb-1">
              Igor Alexandria
            </h1>
            <p className="text-light-muted text-sm">Desenvolvedor Front-End</p>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto custom-scrollbar">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary text-white"
                        : "text-light-muted hover:bg-dark-3 hover:text-light"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-dark-3">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-3 text-light-muted hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg z-50"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="w-5"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-dark-1/80 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Header;
