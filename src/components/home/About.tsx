"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume/ResumePDF";
import { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const userData = {
    name: "Igor Alexandria",
    role: "Desenvolvedor Front-End",
    summary:
      "Desenvolvedor Front-End com foco em performance, design e experiência do usuário. Apaixonado por criar interfaces modernas e escaláveis utilizando React, Next.js e TypeScript.",
    email: "igoralexandriafullstack@gmail.com",
    phone: "+55 (84) 98630-9491",
    location: "Natal, RN - Brasil",
    linkedin: "igoralexandria",
    github: "https://github.com/igoralexandria-ia",
  };

  const info = [
    { label: "Nome", value: "Igor Alexandria" },
    { label: "Experiência", value: "3+ Anos" },
    { label: "País", value: "Brasil" },
    { label: "Freelance", value: "Disponível" },
    { label: "Email", value: "igoralexandriafullstack@gmail.com" },
    { label: "LinkedIn", value: "igoralexandria" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-dark-2 text-light relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10 inline-block">
            Sobre Mim
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
          <span className="text-6xl md:text-8xl font-bold text-dark-3/20 absolute -top-10 -left-6 -z-0 pointer-events-none select-none">
            ABOUT
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square group">
              {/* Image Frame/Effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-dark-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Igor Alexandria"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-1/80 to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Desenvolvedor Front-End com foco em{" "}
              <span className="text-primary">Performance</span> e{" "}
              <span className="text-primary">Design</span>.
            </h3>

            <p className="text-light-muted text-lg text-justify leading-relaxed mb-8">
              Sou um desenvolvedor apaixonado por criar soluções web modernas e
              escaláveis. Com sólida experiência em React, Next.js e TypeScript,
              meu objetivo é entregar não apenas código limpo, mas experiências
              digitais que impactam usuários. Sempre em busca de novas
              tecnologias para aprimorar minhas habilidades e entregar
              resultados de excelência.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {info.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${item.label === "Email" ? "md:col-span-2" : ""}`}
                >
                  <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                  <span className="text-white font-medium min-w-[100px]">
                    {item.label}:
                  </span>
                  <span className="text-light-muted break-all">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {isClient && (
                <PDFDownloadLink
                  document={<ResumePDF userData={userData} />}
                  fileName="Curriculo_Igor_Alexandria.pdf"
                  className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
                >
                  {({ loading }: { loading: boolean }) => (
                    <>
                      <FontAwesomeIcon icon={faDownload} />
                      {loading ? "Gerando PDF..." : "Download CV"}
                    </>
                  )}
                </PDFDownloadLink>
              )}

              <a
                href="#contact"
                className="px-8 py-3 border border-light-muted/30 text-light font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Contrate-me
                <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
