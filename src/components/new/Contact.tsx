import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <motion.h2
        className="text-3xl font-heading mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <motion.p
        className="mb-8 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      ></motion.p>
    </section>
  );
};

export default Experience;
