import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
              01 — Sobre
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-9"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-12">
              Do laboratório
              <br />
              <span className="text-cobalt">para o código.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor Full Stack em formação, cursando Engenharia de
                Software e com experiência prática em aplicações web usando
                React, TypeScript, Node.js e PostgreSQL. Construí o
                Millennium Cards, um e-commerce completo com Redux Toolkit,
                consumo de APIs REST e autenticação de usuários.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha bagagem técnica vem também da Stella Iluminação, onde
                atuo com análise de conformidade, interpretação de normas e
                elaboração de relatórios — um olhar analítico que aplico
                diretamente na forma como estruturo e documento meu código.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-16 mt-16 pt-16 border-t border-white/5">
              <div>
                <span className="text-5xl md:text-6xl font-heading font-black text-cobalt">
                  1+
                </span>
                <p className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
                  ANO DE
                  <br />
                  FULL-STACK
                </p>
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-heading font-black text-foreground">
                  2
                </span>
                <p className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
                  PROJETOS
                  <br />
                  FULL STACK
                </p>
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-heading font-black text-foreground">
                  3+
                </span>
                <p className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
                  ANOS EM
                  <br />
                  CONFORMIDADE
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}