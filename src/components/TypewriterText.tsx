// src/components/TypewriterText.tsx
import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  words?: string[];
  typeSpeed?: number; // velocidade de digitar em ms por letra
  deleteSpeed?: number; // velocidade de apagar em ms por letra
  wordDelay?: number; // tempo que cada palavra fica parada antes de apagar
  loop?: boolean;
  className?: string;
  restartTrigger?: number;
}

export default function TypewriterText({
  text,
  words = [],
  typeSpeed = 100,
  deleteSpeed = 60,
  wordDelay = 2000,
  loop = false,
  className,
  restartTrigger,
}: TypewriterTextProps) {
  const sequence = [...words, text];
  const [display, setDisplay] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplay("");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const typeWord = (word: string, onDone: () => void) => {
      let i = 0;

      const type = () => {
        if (i <= word.length) {
          setDisplay(word.slice(0, i));
          i++;
          timeoutRef.current = setTimeout(type, typeSpeed);
        } else {
          // palavra completa — aguarda wordDelay antes de apagar
          timeoutRef.current = setTimeout(
            () => deleteWord(word, onDone),
            wordDelay,
          );
        }
      };

      type();
    };

    const deleteWord = (word: string, onDone: () => void) => {
      let i = word.length;

      const erase = () => {
        if (i >= 0) {
          setDisplay(word.slice(0, i));
          i--;
          timeoutRef.current = setTimeout(erase, deleteSpeed);
        } else {
          onDone();
        }
      };

      erase();
    };

    const runNext = () => {
      const isLast = indexRef.current === sequence.length - 1;

      if (isLast) {
        // última palavra — digita, aguarda e reinicia se loop
        const word = sequence[indexRef.current];
        let i = 0;

        const type = () => {
          if (i <= word.length) {
            setDisplay(word.slice(0, i));
            i++;
            timeoutRef.current = setTimeout(type, typeSpeed);
          } else if (loop) {
            timeoutRef.current = setTimeout(() => {
              deleteWord(word, () => {
                indexRef.current = 0;
                runNext();
              });
            }, wordDelay);
          }
          // se loop=false, para aqui com a palavra completa
        };

        type();
        return;
      }

      const word = sequence[indexRef.current];
      indexRef.current++;
      typeWord(word, runNext);
    };

    runNext();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, restartTrigger]);

  return (
    <span className={className}>
      {display}
      <span className="animate-blink">|</span>
    </span>
  );
}
