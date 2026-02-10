"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Gym Nation",
    description: "Loja Online de Vendas de Produtos de Academia. O projeto foi desenvolvido com o objetivo de criar uma plataforma de MVP (Minimum Viable Product - Mínimo Produto Viável) para venda de produtos de academia.",
    image: "/images/gymnation.png",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    links: {
      demo: "https://www.gymnation.app.br/",
      github: "https://github.com/igoralexandria-ia/gym-nation",
    },
  },
  {
    title: "Projeto Exemplo 2",
    description: "Descrição concisa de outro projeto significativo no portfólio.",
    image: null,
    tags: ["TypeScript", "Node.js"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Projeto Exemplo 3",
    description: "Mais um exemplo de trabalho realizado com foco em UI/UX e performance.",
    image: null,
    tags: ["Vue.js", "Framer Motion"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-1 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Meus Projetos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-light-muted mt-4 max-w-2xl">
            Uma seleção dos trabalhos que desenvolvi, demonstrando minhas capacidades técnicas e criativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark-2 rounded-xl overflow-hidden border border-dark-3 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 flex flex-col"
            >
              {/* Project Image / Placeholder */}
              <div className="h-48 w-full bg-dark-3 relative overflow-hidden group-hover:bg-dark-3/80 transition-colors">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full text-dark-1">
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="text-4xl opacity-20"
                    />
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-dark-1/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-2 rounded-full text-light hover:bg-primary hover:text-white transition-colors"
                    title="Ver Código"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-2 rounded-full text-light hover:bg-primary hover:text-white transition-colors"
                    title="Ver Demo"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-light-muted text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-dark-3 text-light-muted rounded-full border border-dark-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
