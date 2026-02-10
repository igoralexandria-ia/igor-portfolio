"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "igoralexandriafullstack@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialContacts = [
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/igoralexandria/",
      color: "#0077B5",
      description: "Conecte-se profissionalmente",
      action: "Conectar"
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/igoralexandria-ia",
      color: "#333",
      description: "Veja meus repositórios",
      action: "Seguir"
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com/1gor.alexandria",
      color: "#E1306C",
      description: "Acompanhe meu dia a dia",
      action: "Seguir"
    },
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      url: "https://wa.me/5584986309491",
      color: "#25D366",
      description: "Vamos conversar agora?",
      action: "Enviar Mensagem"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-dark-1 relative flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            Vamos Trabalhar Juntos?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-light-muted text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Se você tem uma ideia ou precisa de ajuda com seu projeto, entre em contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Email & Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-2 rounded-2xl p-8 border border-dark-3 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Informações de Contato</h3>
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-3 flex items-center justify-center text-primary flex-shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Localização</h4>
                  <p className="text-light-muted">Disponível para trabalho remoto</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-3 flex items-center justify-center text-primary flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <div className="flex items-center gap-3 mt-1 group cursor-pointer" onClick={handleCopyEmail}>
                    <p className="text-light-muted group-hover:text-primary transition-colors">{email}</p>
                    <button 
                      className="text-dark-3 hover:text-primary transition-colors"
                      title="Copiar email"
                    >
                      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                    </button>
                  </div>
                  {copied && <span className="text-xs text-green-500 mt-1 block">Copiado!</span>}
                </div>
              </div>
            </div>

            <div className="p-6 bg-dark-3/50 rounded-xl border border-dark-3/50">
                <p className="text-light-muted italic">
                    "A tecnologia é melhor quando aproxima as pessoas."
                </p>
            </div>
          </motion.div>

          {/* Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialContacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-2 p-6 rounded-2xl border border-dark-3 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 text-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: contact.color }}
                >
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{contact.name}</h4>
                <p className="text-light-muted text-sm mb-4 min-h-[40px]">{contact.description}</p>
                <span className="text-primary text-sm font-medium group-hover:underline flex items-center gap-2">
                  {contact.action}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
