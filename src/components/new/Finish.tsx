import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
const keywords = [
  "React",
  "TypeScript",
  "Frontend",
  "UI/UX",
  "RTK",
  "Tailwind",
  "Redux",
  "Styled-Components",
];

const Finish = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //입자 생성
  const createParticles = (count: number) =>
    Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 6 + 4; // 4~10px
      const x = Math.random() * dimensions.width;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 5;
      return { size, x, delay, duration };
    });

  const particles = createParticles(30);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center h-screen w-screen bg-neutral-900 overflow-hidden"
    >
      {/* 배경화면 - 입자 추가 */}
      {dimensions.width > 0 &&
        particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-50"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: -p.size,
            }}
            animate={{ y: dimensions.height + 50 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}

      {/* 메인 타이틀 */}
      <motion.h4
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-extrabold text-white text-center z-20 drop-shadow-lg"
      >
        감사합니다.
      </motion.h4>

      {/* 연락처 영역 */}
      <div className="mt-8 text-center z-20 space-y-3">
        <p className="text-lg text-gray-300">함께할 기회를 기다립니다.</p>{" "}
        <br />
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
          <a
            href="mailto:teren621@gmail.com"
            className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-neutral-900 transition"
          >
            ✉️ teren621@gmail.com
          </a>
          <a
            href="https://potential-coding.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-neutral-900 transition"
          >
            📝 Blog
          </a>
          <a
            href="https://www.linkedin.com/in/seojoo-lee-2b685818a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border flex items-center gap-2 border-white text-white hover:bg-white hover:text-neutral-900 transition"
          >
            <Linkedin size={22} color="skyblue" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* 기술 키워드 비 */}
      {dimensions.width > 0 &&
        keywords.map((word, i) => {
          const x = Math.random() * (dimensions.width - 50);
          const delay = Math.random() * 5;
          const duration = Math.random() * 8 + 4;
          const fontSize = Math.random() * 20 + 14;
          const colors = [
            "#ffffff40",
            "#fde68a59",
            "#4e4d4d27",
            "#60a5fa6b",
            "#34d39949",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.span
              key={i}
              className="absolute font-semibold"
              style={{
                left: x,
                top: -50,
                fontSize: `${fontSize}px`,
                color: color,
              }}
              animate={{ y: dimensions.height + 50 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration,
                delay,
                ease: "linear",
              }}
            >
              {word}
            </motion.span>
          );
        })}
    </section>
  );
};

export default Finish;
