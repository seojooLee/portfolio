import { motion } from "framer-motion";

const Projects = () => {
  const experiences = [
    {
      company: "라온 시큐어",
      role: "Frontend Developer @ Platform Dev Team (2022.11 ~ 현재, 정규직 선임)",
      projects: [
        {
          name: "OmniOne DigitalId 백오피스 (2023.05 ~ )",
          details: [
            "관리자 및 고객용 백오피스 전체 기능 개발 (로그인, 권한 제어 포함)",
            "react-hook-form + custom hook으로 유효성 검증 구조화 → 폼 오류율 25% 감소",
            "서버/로컬 상태 분리로 유지보수 효율성 향상 및 신규 기능 대응 속도 15% 향상",
          ],
        },
        {
          name: "블록체인 해커톤 콘솔 페이지 (2025.02 ~ 2025.05)",
          details: [
            "참가자용 콘솔 UI 개발",
            "상태 처리 공통화로 코드 중복 40% 감소, 오류율 30% 감소",
            "Figma 기반 UI 협업, API 연동 조율",
          ],
        },
        {
          name: "인도네시아 POC 데모 페이지 (2024.11)",
          details: [
            "TypeScript + RTK Query 기반 컴포넌트 설계",
            "다국어 지원(i18next), 캐시 최적화",
            "글로벌 서비스 대응 경험 확보",
          ],
        },
        {
          name: "파일럿 프로젝트 (2025, 6개월)",
          details: [
            "임베딩 및 RAG 기반 DBA AI 개발 참여 | 세미나 발표",
            "Qdrant 컬렉션 관리, 임베딩 저장/검색/필터 API 구현",
          ],
        },
        {
          name: "특허 프로젝트 (2025, 6개월)",
          details: ["민감정보 마스킹 AI 기획 및 특허 관련 변리사와 회의 진행"],
        },
      ],
    },
    {
      company: "에스큐아이 소프트",
      role: "Frontend Developer @ Core Media Dev Team (2019.12 ~ 2022.10, 정규직 사원)",
      projects: [
        {
          name: "Elliga 사내식당 주문 시스템 (크래프톤/카카오 납품)",
          details: [
            "식단표 기반 키오스크 및 백오피스 개발",
            "HTML Canvas 기반 실시간 썸네일 구현",
            "운영 시간 기반 콘텐츠 출력, Figma 기반 반응형 UI 구성",
            "사용자 인터랙션 개선 → 메뉴 선택 오류율 20% 감소",
          ],
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-neutral-900 text-gray-200 flex flex-col items-center">
      <motion.h2
        className="text-5xl font-extrabold mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects & Experience
      </motion.h2>

      <div className=" flex flex-col w-full max-w-6xl gap-12 px-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-neutral-100 rounded-3xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            {/* 회사 헤더 */}
            <div className="mb-8 border-b border-gray-300 pb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {exp.company}
              </h3>
              <p className="italic text-gray-800">{exp.role}</p>
            </div>

            {/* 프로젝트 카드 */}
            <div className="flex flex-col gap-6">
              {exp.projects.map((proj, pidx) => (
                <div
                  key={pidx}
                  className="grid grid-cols-3 gap-6 p-4 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* 왼쪽: 프로젝트 이름 */}
                  <div className="col-span-1 flex items-center">
                    <h4 className="text-lg font-semibold text-gray-800 whitespace-wrap">
                      {proj.name}
                    </h4>
                  </div>

                  {/* 오른쪽: 상세 내용 */}
                  <div className="col-span-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm text-left  ">
                      {proj.details.map((detail, didx) => (
                        <li key={didx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
