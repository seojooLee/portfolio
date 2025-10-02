import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const keywords = [
  "React",
  "TypeScript",
  "Frontend",
  "UI/UX",
  "Next.js",
  "Tailwind",
  "Redux",
  "Framer Motion",
];

const Hero = () => {
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
      className="relative flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-yellow-50 via-skyblue-500 to-indigo-500 overflow-hidden"
    >
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
        안녕하세요, <br />
        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 ">
          프론트엔드 개발자
        </span>{" "} */}
        <br />
        이서주 입니다.
      </motion.h4>

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

      {/* 스크롤 안내 */}
      <motion.div className="absolute bottom-10 text-white text-2xl animate-bounce z-20">
        ↓ Scroll Down
      </motion.div>
    </section>
  );
};

export default Hero;
