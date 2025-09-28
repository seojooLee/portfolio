import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind", level: 85 },
];

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-heading mb-10 text-center">Skills</h2>
      <div className="flex justify-center gap-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="w-24 h-24 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
              {skill.level}%
            </div>
            <p className="mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
