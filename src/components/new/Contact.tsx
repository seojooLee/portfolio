import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          새로운 기회나 협업에 관심이 있으시다면 언제든 연락 주세요!
        </motion.p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded text-black"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded text-black h-32"
          />
          <motion.button
            className="bg-primary px-6 py-3 rounded hover:bg-accent transition text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            보내기
          </motion.button>
        </form>
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
