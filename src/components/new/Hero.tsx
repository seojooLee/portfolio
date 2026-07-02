import { motion } from "framer-motion";

const stats = [
  { value: "6년+", label: "실무 경력" },
  { value: "10+", label: "표준화한 폼 종류" },
  { value: "선임", label: "현 직급" },
];

const skillChips = ["React", "TypeScript", "RTK Query", "Node.js", "AWS"];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-neutral-50 py-24 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="col-span-4 md:col-span-3 row-span-2 bg-white border border-neutral-200 rounded-3xl p-10 flex flex-col justify-center shadow-sm"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            안녕하세요,
            <br />
            이서주입니다.
          </h1>
          <p className="mt-4 text-neutral-500">
            6년차 프론트엔드 개발자 · React / TypeScript 기반 서비스 개발
          </p>
        </motion.div>

        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            className="col-span-4 sm:col-span-2 md:col-span-1 bg-neutral-900 text-white rounded-3xl p-6 flex flex-col justify-center"
          >
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-sm text-neutral-400 mt-1">{s.label}</p>
          </motion.div>
        ))}

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="col-span-4 bg-white border border-neutral-200 rounded-3xl p-6 flex flex-wrap items-center gap-2 shadow-sm"
        >
          {skillChips.map((chip) => (
            <span
              key={chip}
              className="bg-neutral-100 border border-neutral-200 rounded-full px-4 py-1.5 text-sm text-neutral-700"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
