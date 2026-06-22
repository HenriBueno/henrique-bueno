import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "2023 — Presente",
    year: "2023",
    role: "Técnico de Avaliação da Conformidade",
    company: "Stella Iluminação",
    location: "Sapiranga - RS, Brasil",
    description:
      "Atuação em ambiente técnico de laboratório com realização de ensaios conforme normas nacionais e internacionais. Responsável pela análise de resultados, elaboração de relatórios técnicos, interpretação de requisitos normativos e controle de documentação em processos de qualidade e conformidade de produtos.",
    impact: "Qualidade e conformidade de produtos industriais",
    tags: [
      "Normas Técnicas",
      "Relatórios",
      "Controle de Qualidade",
      "Análise de Dados",
    ],
  },

  {
    period: "Out 2024 — 2024",
    year: "2024",
    role: "Desenvolvedor Full Stack",
    company: "Growdev — Fábrica de Software",
    location: "Remoto",
    description:
      "Participação em projeto real para empresa de monitoramento veicular, desenvolvendo funcionalidades com React, Node.js, PostgreSQL e TypeScript. Trabalho em equipe com metodologia Scrum, versionamento com Git e GitHub e entregas em ambiente colaborativo.",
    impact: "Sistema de monitoramento veicular em produção",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Scrum", "Git"],
  },
  {
    period: "2025 — Presente",
    year: "2025",
    role: "Desenvolvedor Full Stack",
    company: "Millennium Cards — Projeto Pessoal",
    location: "Remoto",
    description:
      "Desenvolvimento de uma plataforma e-commerce Full Stack para comercialização de cards colecionáveis. Implementação de gerenciamento global de estado com Redux Toolkit, consumo de APIs REST, autenticação de usuários e gerenciamento de produtos com interface responsiva em Tailwind CSS.",
    impact: "E-commerce completo com autenticação e gestão de produtos",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "APIs REST"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 md:px-16 noise-overlay"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
            02 — Experiência
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Jornada Profissional
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cobalt via-white/10 to-transparent" />

          <div className="space-y-20">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-cobalt -translate-x-[3.5px]" />

                {/* Background year */}
                <span className="absolute -left-4 md:left-12 top-0 text-[8rem] font-heading font-black text-white/[0.02] leading-none select-none pointer-events-none">
                  {exp.year}
                </span>

                <div className="relative">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2">
                    {exp.role}
                  </h3>
                  <p className="text-cobalt font-mono text-sm mt-1">
                    {exp.company}{" "}
                    <span className="text-muted-foreground">
                      • {exp.location}
                    </span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-cobalt border border-cobalt/20 bg-cobalt/5 tracking-wider"
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
      </div>
    </section>
  );
}
