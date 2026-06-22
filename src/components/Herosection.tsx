import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText ";
import ShapeGrid from "./BackgroundShapeGrid";
import ParticleNetwork from "./ParticleNetwork";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    const el = containerRef.current;
    if (el) el.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background shape grid */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* Top-left name — HENRIQUE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute top-6 sm:top-10 md:top-16 lg:top-20 left-4 sm:left-8 md:left-12 lg:left-16 z-10"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-outline leading-none tracking-tighter">
          <ScrambleText
            text="HENRIQUE"
            words={["BUENO"]}
            duration={2000}
            scrambleDuration={100}
            loop={true}
            wordDelay={2000}
          />
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="relative w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw]">
          <ParticleNetwork
            className="w-full h-full"
            particleCount={200}
            minDistance={200}
            particleColor={0x2e5bff}
          />
          <div className="absolute inset-0 bg-cobalt/10 rounded-full blur-3xl -z-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute bottom-36 sm:bottom-28 md:bottom-24 lg:bottom-20 right-4 sm:right-8 md:right-12 lg:right-16 z-10"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-outline leading-none tracking-tighter">
          <ScrambleText
            text="BUENO"
            words={["HENRIQUE"]}
            duration={2000}
            scrambleDuration={100}
            loop={true}
            wordDelay={2000}
          />
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 sm:bottom-20 md:bottom-28 lg:bottom-32 left-4 sm:left-8 md:left-12 lg:left-16 z-10 max-w-xs sm:max-w-sm md:max-w-md"
      >
        <p className="font-mono text-xs sm:text-sm text-slate tracking-wider leading-relaxed">
          <ScrambleText
            text="ESTUDANTE DE ENGENHARIA DE SOFTWARE"
            words={[
              "DESENVOLVEDOR FULL-STACK",
              "DESENVOLVEDOR BACK-END",
              "DESENVOLVEDOR FRONT-END",
            ]}
            duration={2000}
            scrambleDuration={100}
            loop={true}
            wordDelay={2000}
          />
        </p>
        <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 tracking-wider">
          JAVASCRIPT · TYPESCRIPT · REACT · NODE.JS
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-10 left-4 sm:left-8 md:left-12 lg:left-16 z-10 flex flex-wrap gap-3 sm:gap-4"
      >
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm tracking-wider btn-primary transition-all duration-300 cursor-pointer"
          onClick={scrollToProjects}
        >
          VER PROJETOS
        </button>
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm tracking-wider btn-outline transition-all duration-300 cursor-pointer"
          onClick={scrollToContact}
        >
          CONTATO
        </button>
      </motion.div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 right-8 lg:right-16 z-10 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest rotate-90 origin-center translate-y-8">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-cobalt to-transparent mt-12"
        />
      </motion.div>
    </section>
  );
}
