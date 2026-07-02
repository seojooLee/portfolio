const About = () => {
  return (
    <section className="min-h-screen py-16 bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold mb-12 border-b border-neutral-200 pb-4">
          About Me
        </h2>

        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-neutral-700 text-left">
            6년 차 프론트엔드 개발자 이서주입니다. <br /> React/TypeScript 기반
            프로젝트를 통해 UI/UX 개선과 상태 관리 최적화에 집중해왔습니다.{" "}
            <br />
            협업과 문제 해결에 강점을 두고, 안정적이며 유지보수성 높은 코드를
            지향합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-600">Frontend</h3>
              <ul className="space-y-1 text-neutral-600">
                <li>React / TypeScript</li>
                <li>상태 관리 최적화</li>
                <li>반응형 UI 구현</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-600">
                Collaboration
              </h3>
              <ul className="space-y-1 text-neutral-600">
                <li>디자이너·백엔드 협업</li>
                <li>코드 리뷰 문화</li>
                <li>Agile/Scrum 참여</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-600">
                Problem Solving
              </h3>
              <ul className="space-y-1 text-neutral-600">
                <li>반복되는 폼 로직을 공통 컴포넌트로 표준화</li>
                <li>저사양 환경 렌더링 지연(3~5초) → 즉시 반응 수준 개선</li>
                <li>중복 API 호출 제거를 위한 캐싱·자동 갱신 구조 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
