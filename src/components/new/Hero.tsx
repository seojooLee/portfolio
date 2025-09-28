import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-purple-500 to-pink-500">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Hi, I’m Seojoo 👋
      </motion.h1>
    </section>
  );
};

export default Hero;
