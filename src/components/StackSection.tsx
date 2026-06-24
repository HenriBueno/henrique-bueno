import { motion } from "framer-motion";

const STACK = [
  { name: "Javascript", category: "FullStack", level: "Principal" },
  { name: "TypeScript", category: "FullStack", level: "Principal" },
  { name: "Python", category: "Automação", level: "Principal" },
  { name: "React", category: "Frontend", level: "Principal" },
  { name: "HTML", category: "Frontend", level: "Principal" },
  { name: "CSS", category: "Frontend", level: "Principal" },
  { name: "Bootstrap", category: "Framework", level: "Principal" },
  { name: "Mui Material", category: "Framework", level: "Principal" },
  { name: "PostgreSQL", category: "Database", level: "Principal" },
  { name: "Vite", category: "build tool", level: "Principal" },
  { name: "NestJS", category: "Backend", level: "Secundário" },
  { name: "Next.js", category: "Framework", level: "Secundário" },
  { name: "Motion", category: "Framework", level: "Secundário" },
  { name: "Redux-Toolkit", category: "Framework", level: "Secundário" },
  { name: "styled-components", category: "Framework", level: "Secundário" },
  { name: "Tailwind CSS", category: "Framework", level: "Secundário" },
];

export default function StackSection() {
  return (
    <section id="stack" className="relative py-32 px-6 md:px-16 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
            04 — Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Stack Principal
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5">
          {STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-obsidian p-6 md:p-8 group hover:bg-cobalt/5 transition-all duration-500 relative overflow-hidden "
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cobalt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                {tech.category}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold mt-2 group-hover:text-cobalt transition-colors duration-300">
                {tech.name}
              </h3>
              <span
                className={`inline-block mt-3 font-mono text-[10px] tracking-wider px-2 py-0.5 ${
                  tech.level === "Principal"
                    ? "text-cobalt border border-cobalt/30 bg-cobalt/5"
                    : "text-muted-foreground border border-white/10"
                }`}
              >
                {tech.level.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
