"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faCss3,
  faHtml5,
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faGithub,
  faWordpress,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faWind } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3, color: "#1572B6" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Next.js", icon: faCode, color: "#000000" },
  { name: "TypeScript", icon: faCode, color: "#3178C6" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Python", icon: faPython, color: "#3776AB" },
  { name: "Django", icon: faDatabase, color: "#092E20" },
  { name: "Tailwind", icon: faWind, color: "#38B2AC" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "SCSS", icon: faSass, color: "#CC6699" },
  { name: "WordPress", icon: faWordpress, color: "#21759B" },
  { name: "Docker", icon: faDocker, color: "#2496ED" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
];

const Skills = () => {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="py-20 bg-dark-1 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Minhas Skills
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-light-muted mt-4 max-w-2xl">
            Tecnologias e ferramentas que utilizo para criar experiências digitais excepcionais.
          </p>
        </motion.div>
      </div>

      {/* Ticker Container */}
      <div className="relative w-full overflow-hidden space-y-8">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...firstRow, ...firstRow].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 px-6 py-4 bg-dark-2 rounded-xl border border-dark-3 hover:border-primary/50 transition-colors min-w-[200px] group"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-2xl transition-colors duration-300 group-hover:text-primary"
                  style={{ color: skill.color }}
                />
                <span className="text-lg font-medium text-light-muted group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...secondRow, ...secondRow].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 px-6 py-4 bg-dark-2 rounded-xl border border-dark-3 hover:border-primary/50 transition-colors min-w-[200px] group"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-2xl transition-colors duration-300 group-hover:text-primary"
                  style={{ color: skill.color }}
                />
                <span className="text-lg font-medium text-light-muted group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient Overlay for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-1 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-1 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Skills;
