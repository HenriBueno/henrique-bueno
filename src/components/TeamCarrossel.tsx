import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import henriqueImage from "../assets/img/henrique_bueno.png";
import virginiaImage from "../assets/img/virginia.png";
import luaImage from "../assets/img/lua.png";
import nagatoImage from "../assets/img/nagato.png";
import pequenuxoImage from "../assets/img/pequenuxo.png";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import ScrambleText from "./ScrambleText ";

const TEAM = [
  {
    name: "Henrique",
    role: "Developer Full Stack",
    image: henriqueImage,
    description: "Desenvolvedor Full Stack.",
  },
  {
    name: "Virgínia (Namorada)",
    role: "CEO",
    image: virginiaImage,
    description: "Diretora de todos os projetos.",
  },
  {
    name: "Lua",
    role: "Tech Lead",
    image: luaImage,
    description:
      "Especialista em sentar no teclado nas horas mais críticas do deploy.",
  },
  {
    name: "Nagato",
    role: "Developer Senior",
    image: nagatoImage,
    description: "Encontra bugs apenas caminhando sobre o monitor.",
  },
  {
    name: "Pequenuxo (Sem nome ainda!)",
    role: "Developer Trainee",
    image: pequenuxoImage,
    description:
      "Responsável por dar trabalho para os outros membros da equipe.",
  },
];

interface TeamCarrosselProps {
  slideTiming?: number;
}

export default function TeamCarrossel({
  slideTiming = 3000,
}: TeamCarrosselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = () => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    };
    const interval = setInterval(autoScroll, slideTiming);
    return () => clearInterval(interval);
  }, [emblaApi, slideTiming]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
          Minha <span className="text-cobalt">Equipe</span>
        </h3>
      </div>
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-start px-8 py-12"
            >
              <div className="relative w-40 h-40 md:w-45 md:h-45 mb-6">
                {member.image ? (
                  <>
                    <motion.div className="absolute inset-0 bg-cobalt/20 blur-xl rounded-full" />
                    <div className="relative w-full h-full overflow-hidden rounded-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 box-shadow-lg "
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-cobalt/20 rounded-full flex items-center justify-center text-cobalt font-bold text-xl">
                    {member.name[0]}
                  </div>
                )}
              </div>

              <TypewriterText
                text={member.name}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                wordDelay={2000}
                restartTrigger={selectedIndex}
                className="text-2xl md:text-3xl font-heading font-bold text-foreground"
              />
              {index === selectedIndex ? (
                <ScrambleText
                  key={`${selectedIndex}-${member.role}`}
                  text={member.role}
                  duration={2000}
                  scrambleDuration={300}
                  loop={false}
                  className="font-mono text-lg text-cobalt font-bold tracking-[0.2em] uppercase mt-2 mb-2"
                />
              ) : (
                <p className="font-mono text-lg text-cobalt font-bold tracking-[0.2em] uppercase mt-2 mb-2">
                  {member.role}
                </p>
              )}

              {index === selectedIndex ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <p className="text-muted-foreground text-lg mt-6 max-w-xl">
                    {member.description}
                  </p>
                </motion.div>
              ) : (
                <p className="text-muted-foreground text-lg mt-6 max-w-xl">
                  {member.description}
                </p>
              )}
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
