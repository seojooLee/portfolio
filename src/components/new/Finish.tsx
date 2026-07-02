import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Finish = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 bg-neutral-900">
      <motion.h4
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-white text-center"
      >
        감사합니다.
      </motion.h4>

      <div className="mt-8 text-center space-y-3">
        <p className="text-lg text-neutral-400">함께할 기회를 기다립니다.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
          <a
            href="mailto:teren621@gmail.com"
            className="px-6 py-2 rounded-full border border-neutral-600 text-white hover:bg-white hover:text-neutral-900 transition"
          >
            ✉️ teren621@gmail.com
          </a>
          <a
            href="https://potential-coding.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-neutral-600 text-white hover:bg-white hover:text-neutral-900 transition"
          >
            📝 Blog
          </a>
          <a
            href="https://www.linkedin.com/in/seojoo-lee-2b685818a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border flex items-center gap-2 border-neutral-600 text-white hover:bg-white hover:text-neutral-900 transition"
          >
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Finish;
