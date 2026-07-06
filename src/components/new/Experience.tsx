import { motion } from "framer-motion";
import {
  Briefcase,
  BookOpen,
  ConciergeBell,
  TrendingUp,
  Tag,
  MessageCircle,
} from "lucide-react";
import ConsoleCraft from "../../assets/image/consoleCraft.png";
import AavecCms from "../../assets/image/aavecCms.png";

const experiences = [
  {
    type: "project",
    title: "Console Craft 개발",
    period: "2025.12",
    description: [
      "픽셀 에디터로 콘솔에 그림 출력할 수 있는 프로젝트 개발",
      <img src={ConsoleCraft} alt="Console Craft" style={{ width: "20rem" }} />,
      <a
        href="https://seojoolee.github.io/consolecraft/"
        className="text-blue-700 cursor-default"
      >
        Console Craft
      </a>,
    ],
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "project",
    title: "Studio AAvec (외주)",
    period: "2024.05 ~ 2024.08",
    description: [
      "바디 프로필 웹사이트 외주 개발 (홈페이지 및 백오피스)",
      "SquareSpace → AWS 도메인 관리 이전",
      "Figma 기반 웹 퍼블리싱, MySQL DB 설계 및 Node.js 백엔드 개발",
      "AWS EC2 배포 경험",
      <img src={AavecCms} alt="Aavec CMS" style={{ width: "20rem" }} />,
    ],
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "project",
    title: "시그널 그래프",
    period: "2026.06",
    description: [
      "SNS·뉴스 데이터를 기반으로 국내 수혜주를 탐색해 그래프로 시각화하는 웹 서비스 개발",
      <a
        href="https://alpha-graph.vercel.app/"
        className="text-blue-700 cursor-default"
      >
        시그널 그래프
      </a>,
    ],
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "project",
    title: "네임택 제너레이터",
    period: "2024.06",
    description: [
      "기업의 잦은 인사이동을 고려해, 수기로 제작하던 네임택을 자동 생성하는 서비스 개발",
      <a
        href="https://name-batch-public.vercel.app/"
        className="text-blue-700 cursor-default"
      >
        네임택 제너레이터
      </a>,
    ],
    icon: <Tag className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    type: "study",
    title: "TypeScript 스터디",
    period: "2025.05 ~ 2025.08",
    description: [
      "『이펙티브 타입스크립트』 스터디원 5명 이상과 함께 스터디 진행",
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
  {
    type: "study",
    title: "사내 직무 인터뷰 참여",
    period: "",
    description: [
      "라온시큐어 / 에스큐아이소프트 재직 중 프론트엔드 개발자로서의 업무 성과와 협업 방식을 공유하는 사내 공식 블로그 직무 인터뷰어로 참여",
    ],
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
          Experience
        </h2>
        <div className="relative border-l-2 border-neutral-300 ">
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
              <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition  ">
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
