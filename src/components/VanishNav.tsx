import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contact" },
];

export default function VanishNav() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY && currentY > 100) {
        setVisible(true);
      } else if (currentY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      }
      if (currentY < 100) setVisible(false);
      setLastScrollY(currentY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 60 && window.scrollY > 100) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-white/5"
            style={{ backgroundColor: "rgba(8, 8, 10, 0.8)" }}
          >
            <div className="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">
              <span
                className="font-mono text-sm font-semibold tracking-wider"
                style={{ color: "#2E5BFF" }}
              >
                HB
              </span>
              <div className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="fixed top-4 right-4 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 backdrop-blur-xl"
          style={{ backgroundColor: "rgba(8, 8, 10, 0.9)" }}
          aria-label="Menu"
        >
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 right-0 bottom-0 z-50 w-64 border-l border-white/10 flex flex-col pt-20 px-6 pb-8"
                style={{ backgroundColor: "rgba(8, 8, 10, 0.98)" }}
              >
                <span
                  className="font-mono text-sm font-semibold tracking-wider mb-8"
                  style={{ color: "#2E5BFF" }}
                >
                  HB
                </span>

                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => scrollTo(item.href)}
                      className="text-left py-3 text-base text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wide border-b border-white/5 last:border-0"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
