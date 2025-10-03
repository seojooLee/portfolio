import { motion } from "framer-motion";
import { Briefcase, BookOpen, ConciergeBell, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    type: "project",
    title: "Studio AAvec (외주)",
    period: "2024.07 ~ 2024.08",
    description: [
      "바디 프로필 웹사이트 외주 개발 (홈페이지 및 백오피스)",
      "SquareSpace → AWS 도메인 관리 이전",
      "Figma 기반 웹 퍼블리싱, MySQL DB 설계 및 Node.js 백엔드 개발",
      "AWS EC2 배포 경험",
    ],
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "project",
    title: "졸업전시회 프로젝트",
    period: "2024.07 ~ 2024.08",
    description: [
      "졸업전시회 2D/3D Unity 게임 구축",
      <a
        href="https://potential-coding.tistory.com/24"
        className="text-blue-700 cursor-default"
      >
        졸업전시회 글보기
      </a>,
    ],
    icon: <Presentation className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "study",
    title: "TypeScript 스터디",
    period: "2025.05 ~ 2025.08",
    description: [
      "『이펙티브 타입스크립트』 스터디 진행",
      "각 회사의 개발자들과 매주 회고 및 노션 정리",
      "실무 적용 사례 공유",
    ],
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  },
  {
    type: "study",
    title: "자격증 취득",
    period: "",
    description: ["정보처리기사 (2024.09)", "Toeic 685 (2024.11)"],
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  },
  {
    type: "project",
    title: "It's 챌린지 입상",
    period: "2024.09",
    description: ["신세계아이앤씨 주최"],
    icon: <ConciergeBell className="w-6 h-6 text-white" />,
    color: "bg-yellow-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          Experience
        </h2>
        <div className="relative border-l-2 border-gray-300 ">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 "
            >
              {/* 아이콘 */}
              <span
                className={`absolute -left-3 flex items-center justify-center w-10 h-10 rounded-full ${exp.color} shadow-lg`}
              >
                {exp.icon}
              </span>

              {/* 본문 */}
              <div className="bg-slate-100 p-6 rounded-xl shadow hover:shadow-md transition  ">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
                <ul className="list-disc list-inside justify-start text-left mt-3 space-y-1 text-gray-700 text-sm">
                  {exp?.description?.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
