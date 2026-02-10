"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import testimonialsData from "@/data/testimonials.json";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Depoimentos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-light-muted mt-4 max-w-2xl mx-auto">
            O que dizem sobre meu trabalho e entregas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark-1 rounded-2xl p-8 border border-dark-3 hover:border-primary/50 transition-all duration-300 relative group hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-dark-3 group-hover:text-primary/20 transition-colors">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-light-muted mb-8 italic leading-relaxed flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="mt-auto border-t border-dark-3 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-primary-light font-medium mt-1">
                    {testimonial.role}
                  </p>
                </div>
                
                {testimonial.linkedIn && (
                  <a 
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-muted hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
