import { motion } from "framer-motion";

const About = () => {
  const experiences = [
    "약 5년 경력의 프론트엔드 개발자로서 React와 TypeScript 기반 프로젝트 다수 경험",
    "백오피스, 데모페이지 등 다양한 환경에서 UI/UX 개선과 상태 관리 최적화",
    "협업과 문제 해결에 강점, 안정적이고 유지보수성 높은 코드 작성 지향",
    "사용자 경험과 비즈니스 목표 달성을 위한 효율적 프론트엔드 솔루션 구현",
    "프론트 외 기술도 ",
  ];

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-300 via-gray-200 to-gray-600 text-white">
      <motion.div
        className="max-w-2xl text-left px-6 bg-black/40 rounded-3xl p-8 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
          {experiences.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
