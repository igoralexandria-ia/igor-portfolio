"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const education = [
    {
      year: "2017 - 2022",
      title: "Matemática",
      institution: "Universidade Federal da Paraíba",
      description: "Licenciatura em Matemática.",
    },
    {
      year: "2020 - 2023",
      title: "Ciência da Computação",
      institution: "Universidade Potiguar",
      description: "Bacharelado focado em engenharia de software e algoritmos.",
    },
    {
      year: "2024 - 2024",
      title: "Pós-Graduação em Inteligência Artificial e Machine Learning",
      institution: "Universidade Potiguar",
      description: "Especialização em IA.",
    },
    {
      year: "2024 - Atualmente",
      title: "Full Stack Python",
      institution: "EBAC",
      description: "Curso técnico em Full Stack Python.",
    },
    {
      year: "2025 - Atualmente",
      title: "Inglês",
      institution: "Wizard",
      description: "Curso de inglês.",
    },
  ];

  const experience = [
    {
      year: "2022 - 2023",
      title: "Facilitador",
      company: "TERA",
      description: "Facilitação de cursos de tecnologia Full Stack Development.",
    },
    {
      year: "2022 - 2023",
      title: "Estagiário",
      company: "Escola do Governo do RN",
      description: "Estágio em desenvolvimento de sistemas com Python e Django.",
    },
    {
      year: "2024 - 2025",
      title: "Bolsista de TI",
      company: "SEAD-RN / COTIC",
      description: "Desenvolvimento de sites institucionais utilizando WordPress e React.",
    },
    {
        year: "2025 - Atualmente",
        title: "Junior Systems Engineer",
        company: "Indra/Minsait",
        description: "Desenvolvimento e manutenção de sistemas institucionais utilizando Next.js, TypeScript, React, Node.js, TailwindCSS, PostgreSQL e WordPress.",
      },
  ];

  const Card = ({ data, icon }: { data: any, icon: any }) => (
    <div className="bg-dark-2 rounded-xl p-8 border border-dark-3 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group h-full">
      <div className="flex items-center gap-2 mb-4">
         <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
            {data.year}
         </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
        {data.title}
      </h3>
      <p className="text-primary-light text-sm font-medium mb-4">{data.company || data.institution}</p>
      <p className="text-light-muted text-sm leading-relaxed">
        {data.description}
      </p>
    </div>
  );

  return (
    <section id="resume" className="py-20 bg-dark-2 relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Resumo
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-light-muted mt-4 max-w-2xl">
                Minha trajetória acadêmica e profissional.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                 <div className="flex items-center gap-3 mb-8">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-primary" />
                    <h3 className="text-2xl font-bold text-white">Educação</h3>
                 </div>
                 
                 <div className="space-y-6">
                    {education.map((item, index) => (
                        <Card key={index} data={item} icon={faGraduationCap} />
                    ))}
                 </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <FontAwesomeIcon icon={faBriefcase} className="text-3xl text-primary" />
                    <h3 className="text-2xl font-bold text-white">Experiência</h3>
                 </div>

                 <div className="space-y-6">
                    {experience.map((item, index) => (
                        <Card key={index} data={item} icon={faBriefcase} />
                    ))}
                 </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
