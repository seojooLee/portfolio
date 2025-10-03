import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skillSections = [
    {
      title: "Frontend Engineering",
      skills: [
        "React, TypeScript, Redux-saga, Redux Toolkit Query 기반 서비스 개발 경험",
        "react-hook-form + custom hook을 활용한 유효성 검증 구조화 경험",
        "Styled-components, SCSS 등 스타일링 및 반응형 UI 구현 경험",
        "RESTful API 연동, Swagger 기반 협업 경험",
        "크로스 브라우징 및 웹 표준 대응",
      ],
    },
    {
      title: "Collaboration & Process",
      skills: [
        "GitLab 기반 CI/CD 경험, Jenkins 파이프라인 구축 경험",
        "Jira/Confluence, Slack 기반 협업으로 소통 및 이슈 관리·문서화 수행",
        "Agile/Scrum 참여 (매주 Scrum 회의)",
        "코드 리뷰 및 공용 컴포넌트 구조화로 팀 효율성 개선",
      ],
    },
    {
      title: "Etc",
      skills: [
        "Node.js 기반 간단한 서버 개발 경험",
        "Kiosk 및 SaaS 백오피스 등 도메인 경험",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-gray-100 text-gray-900 flex flex-col items-center">
      <motion.h2
        className="text-5xl font-extrabold mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Skills & Competencies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {skillSections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              {section.skills.map((skill, sidx) => (
                <li key={sidx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SkillChips = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Redux/RTK Query", level: 85 },
    { name: "Styled-components / SCSS", level: 80 },
    { name: "react-hook-form / Custom Hook", level: 85 },
    { name: "RESTful API / Swagger", level: 80 },
    { name: "Node.js", level: 60 },
  ];

  return (
    <section className="py-16 bg-gray-100 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8  ">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <div className="w-24 h-24">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: "#4f46e5", // 모던 블루 계열
                  textColor: "#111827",
                  trailColor: "#d1d5db",
                })}
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-700 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PortfolioSkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-100">
      {/* 기존 Skills 섹션 */}
      <Skills />
    </section>
  );
};

export default PortfolioSkillsSection;
