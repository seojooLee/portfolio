const About = () => {
  return (
    <section className="min-h-screen py-16   justify-center bg-neutral-900  text-gray-200 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-b pb-4">About Me</h2>

        <div className="space-y-10">
          {/* 간단 소개 */}
          <p className="text-lg leading-relaxed text-gray-200 text-left">
            5년 차 프론트엔드 개발자 이서주입니다. <br /> React/TypeScript 기반
            프로젝트를 통해 UI/UX 개선과 상태 관리 최적화에 집중해왔습니다.{" "}
            <br />
            협업과 문제 해결에 강점을 두고, 안정적이며 유지보수성 높은 코드를
            지향합니다.
          </p>

          {/* 하이라이트 */}
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border-l-2 pl-4">
              <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
              <ul className="space-y-1 text-gray-300">
                <li>React / TypeScript</li>
                <li>상태 관리 최적화</li>
                <li>반응형 UI 구현</li>
              </ul>
            </div>
            <div className="border-l-2 pl-4">
              <h3 className="font-semibold mb-2 text-blue-400">
                Collaboration
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>디자이너·백엔드 협업</li>
                <li>코드 리뷰 문화</li>
                <li>Agile/Scrum 참여</li>
              </ul>
            </div>
            <div className="border-l-2 pl-4">
              <h3 className="font-semibold mb-2 text-blue-400">
                Problem Solving
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>폼 오류율 25% 감소</li>
                <li>성능 최적화 → 응답속도 30% 개선</li>
                <li>코드 중복 40% 감소</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
