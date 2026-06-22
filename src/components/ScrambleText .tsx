import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
  words?: string[];
  duration?: number;
  scrambleDuration?: number;
  loop?: boolean;
  wordDelay?: number;   // tempo que cada palavra fica parada antes de trocar
  className?: string;
}

function scramble(length: number) {
  return Array.from({ length }, () =>
    CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join("");
}

export default function ScrambleText({
  text,
  words = [],
  duration = 1500,
  scrambleDuration = 80,
  loop = false,
  wordDelay = 2000,
  className,
}: ScrambleTextProps) {
  const sequence = [...words, text];
  const [display, setDisplay] = useState(() => scramble(text.length));
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const indexRef = useRef(0);

  const resolveWord = (word: string, onDone: () => void) => {
    const resolved = Array(word.length).fill(false);

    word.split("").forEach((_, i) => {
      const delay = Math.random() * duration * 0.6 + duration * 0.2;
      setTimeout(() => {
        resolved[i] = true;
      }, delay);
    });

    intervalRef.current = setInterval(() => {
      setDisplay(
        word
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (resolved[i]) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (resolved.every(Boolean)) {
        clearInterval(intervalRef.current!);
        // todas as palavras aguardam o mesmo wordDelay antes de trocar
        timeoutRef.current = setTimeout(onDone, wordDelay);
      }
    }, scrambleDuration);
  };

  useEffect(() => {
    const runNext = () => {
      const isLast = indexRef.current === sequence.length - 1;

      if (isLast && loop) {
        resolveWord(sequence[indexRef.current], () => {
          indexRef.current = 0;
          runNext();
        });
        return;
      }

      const word = sequence[indexRef.current % sequence.length];
      indexRef.current++;
      resolveWord(word, runNext);
    };

    runNext();

    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timeoutRef.current!);
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}