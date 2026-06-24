import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const CERTS = [
  {
    title: "Bacharelado em Engenharia de Software",
    issuer: "Centro Universitário Internacional Uninter — 2025 · Cursando",
  },
  {
    title: "Desenvolvimento Web Full Stack",
    issuer: "Growdev — 2024",
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    issuer: "UNISINOS — 2023 · Incompleto",
  },
  {
    title: "Técnico em Eletroeletrônica",
    issuer: "Instituto Federal Sul-rio-grandense — 2017 · 2019",
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative py-32 px-6 md:px-16 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
            05 — Formação
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Formação Acadêmica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[1px] bg-white/5">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-obsidian p-8 group hover:bg-cobalt/5 transition-all duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cobalt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <GraduationCap className="w-5 h-5 text-cobalt mb-4" />
              <h3 className="text-lg font-heading font-bold group-hover:text-cobalt transition-colors">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
