import { motion } from "framer-motion";

const Projects = () => {
  const experiences = [
    {
      company: "라온 시큐어",
      role: "Frontend Developer(선임) @ Platform Dev Team (2022.11 ~ 현재, 정규직 선임)",
      projects: [
        {
          name: "OmniOne DigitalId 백오피스 \n (2023.05 ~ )",
          details: [
            "관리자 및 고객용 백오피스 전체 기능 개발 (로그인, 권한 제어 포함)",
            "폼 10종 이상의 반복되는 검증 로직을 공통 Input 컴포넌트와 재사용 가능한 검증 규칙 객체로 표준화",
            "RTK Query 도입으로 중복 API 호출 제거, 자동 갱신(invalidation)으로 수동 리프레시 로직 제거",
          ],
        },
        {
          name: "블록체인 해커톤 콘솔 페이지 \n (2025.02 ~ 2026.03)",
          details: [
            "참가자용 콘솔 UI 개발 (프론트 1, 백엔드 1 2인 팀)",
            "상태 처리 로직 공통화로 일관된 개발 패턴 구축",
            "Figma 기반 UI 협업, API 연동 조율",
          ],
        },
        {
          name: "인도네시아 POC 데모 페이지 \n(2024.11 ~ 2024.12)",
          details: [
            "3~4주의 제한된 일정 내 TypeScript 기반 컴포넌트 설계",
            "다국어 지원(i18next), 언어별 번역 리소스 분리",
            "글로벌 서비스 대응 경험 확보",
          ],
        },
        {
          name: "RAG 기반 DBA AI 파일럿 프로젝트 (2025.03 ~ 2025.08)",
          details: [
            "수백~수천 건 규모 문서 데이터 대상 임베딩 및 RAG 파이프라인 개발 참여, 사내 세미나 발표",
            "Qdrant 컬렉션 관리, 메타데이터 기반 필터링 API 구현",
          ],
        },
        {
          name: "민감정보 마스킹 AI 특허 기획 (2025.07 ~ 2025.10)",
          details: ["민감정보 마스킹 AI 기획 및 특허 관련 변리사와 회의 진행"],
        },
      ],
    },
    {
      company: "에스큐아이 소프트",
      role: "Frontend Developer @ Core Media Dev Team (2019.12 ~ 2022.10, 정규직 사원)",
      projects: [
        {
          name: "Eliga 사내식당 주문 시스템 \n (크래프톤/카카오 납품)",
          details: [
            "식단표 기반 키오스크 및 백오피스 개발",
            "HTML Canvas 기반 동적 썸네일 생성 → 3~5초 지연을 즉시 반응 수준으로 개선",
            "운영 시간 기반 콘텐츠 출력, Figma 기반 반응형 UI 구성",
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
              <h3 className="text-2xl font-bold text-gray-900 text-nowrap">
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
                  <div className="col-span-1 flex items-center text-center">
                    <h4 className="text-lg font-semibold text-gray-800 ">
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