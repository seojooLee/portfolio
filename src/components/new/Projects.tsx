import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "프로젝트 A",
    desc: "React + TypeScript",
    thumbnail: "/assets/project1.png",
  },
  {
    id: 2,
    title: "프로젝트 B",
    desc: "Next.js + Tailwind",
    thumbnail: "/assets/project2.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-heading mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className="bg-white shadow-lg rounded overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Link to={`/project/${p.id}`}>
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
