import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import TypewriterText from "./TypewriterText";
import TeamCarrossel from "./TeamCarrossel";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 noise-overlay"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
            06 — Contato
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-first flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Vamos iniciar um
              <br />
              <span className="text-cobalt">projeto.</span>
            </h2>

            <p className="text-muted-foreground text-lg mt-6 max-w-xl">
              Tem interesse em trabalharmos juntos? Vamos conversar sobre sua
              próxima aplicação web ou oportunidade como desenvolvedor júnior.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-12 w-full max-w-xl bg-obsidian border border-white/10 p-6 text-left group hover:border-cobalt/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <span className="text-cobalt font-mono text-sm">$</span>
                <span className="text-muted-foreground font-mono text-lg">
                  <TypewriterText
                    text="Say Hello"
                    words={[
                      "Let's Work Together",
                      "Got a Project?",
                      "Drop me a Message",
                    ]}
                    loop={true}
                    typeSpeed={80}
                    deleteSpeed={50}
                    wordDelay={2000}
                  />
                </span>
              </div>
            </button>

            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/HenriBueno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-cobalt transition-colors tracking-wider"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/henriquebueno-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-cobalt transition-colors tracking-wider"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LINKEDIN
              </a>
              <a
                href="mailto:henriquecb.dev@outlook.com"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-cobalt transition-colors tracking-wider"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                EMAIL
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-last lg:order-last"
          >
            <TeamCarrossel slideTiming={5000} />
          </motion.div>
        </div>
      </div>

      {/* Full-screen contact overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-lg"
            >
              <h3 className="text-3xl font-heading font-bold mb-8">
                Vamos <span className="text-cobalt">conversar.</span>
              </h3>

              <form
                className="space-y-6"
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-wider block mb-2">
                    NOME
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-cobalt py-3 text-foreground font-body outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-wider block mb-2">
                    EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-cobalt py-3 text-foreground font-body outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground tracking-wider block mb-2">
                    MENSAGEM
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 focus:border-cobalt py-3 text-foreground font-body outline-none transition-colors resize-none"
                    placeholder="Detalhes do projeto ou oportunidade..."
                  />
                </div>

                <a
                  href={`mailto:henriquecb.dev@outlook.com?subject=Contato pelo Portfólio&body=${encodeURIComponent(
                    `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
                  )}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cobalt text-white font-mono text-sm tracking-wider hover:bg-cobalt/90 transition-all duration-300"
                >
                  ENVIAR MENSAGEM
                  <Send className="w-4 h-4" />
                </a>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
