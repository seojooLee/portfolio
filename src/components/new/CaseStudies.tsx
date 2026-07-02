import { motion } from "framer-motion";

const formSnippet = `<Controller
  control={control}
  rules={{ ...PASSWORD_RULE }}
  render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
    <DefaultInput
      type={'password'}
      name="password"
      onChange={onChange}
      value={value}
      placeholder={t('PLEASE_INPUT_NEW_PW')}
      errorMessage={errors?.password?.message}
      ref={ref}
    />
  )}
  name={'password'}
/>`;

const caseStudies = [
  {
    title: "반복되는 폼 검증 로직 표준화",
    period: "OmniOne DigitalId 백오피스 · 2023.05 ~",
    problem:
      "권한·상태에 따라 입력 항목과 검증 규칙이 달라지는 폼을 10종 이상 개별 구현하면서, 필드마다 유사한 마크업과 검증 로직을 반복 작성해야 했고 유지보수 비용이 계속 누적됐습니다.",
    decision:
      "react-hook-form의 Controller를 감싸는 공통 Input 컴포넌트(DefaultInput)를 만들고, 비밀번호 규칙처럼 자주 재사용되는 검증 로직은 별도 규칙 객체(PASSWORD_RULE 등)로 분리했습니다. 폼마다 새로 만드는 대신, 컴포넌트와 규칙 객체를 조합하는 방식으로 접근했습니다.",
    code: formSnippet,
    result:
      "필드별 반복 마크업과 검증 로직 중복이 크게 줄었고, 신규 폼 추가 시 기존 컴포넌트/규칙 객체를 재사용하는 것만으로 대응할 수 있게 됐습니다.",
    retro:
      "지금 다시 한다면, 폼마다 반복되는 필드 조합(예: 비밀번호+비밀번호 확인) 자체를 프리셋으로 한 단계 더 추상화해볼 것 같습니다.",
  },
  {
    title: "중복 API 호출 제거를 위한 RTK Query 전환",
    period: "OmniOne DigitalId 백오피스 · 2023.05 ~",
    problem:
      "동일한 데이터를 여러 화면에서 각각 fetch하고, 특정 액션(수정/삭제 등) 이후에는 관련된 다른 화면을 수동으로 리프레시해야 했습니다. 서버 상태와 UI 상태가 뒤섞이면서 화면 간 데이터가 어긋나는 문제도 반복됐습니다.",
    decision:
      "RTK Query를 도입해 API 호출 로직을 컴포넌트에서 분리하고, 캐싱으로 동일 데이터의 중복 호출을 없앴습니다. 액션 이후에는 자동 갱신(invalidation) 태그로 관련 화면이 스스로 최신 상태를 반영하도록 구성했습니다.",
    code: "",
    result:
      "화면마다 흩어져 있던 fetch/리프레시 로직이 하나의 상태 관리 계층으로 정리됐고, 수동으로 화면을 리프레시하던 코드를 걷어낼 수 있었습니다.",
    retro:
      "캐시 무효화 태그를 세분화할수록 관리 포인트가 늘어나는 트레이드오프가 있어서, 다음엔 태그 설계를 먼저 문서화하고 시작하고 싶습니다.",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-neutral-50 text-neutral-900 flex flex-col items-center">
      <motion.h3
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Case Studies
      </motion.h3>

      <div className="flex flex-col w-full max-w-5xl gap-10 px-6">
        {caseStudies.map((cs, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-neutral-200 rounded-3xl shadow-sm p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
          >
            <h4 className="text-xl font-semibold text-neutral-900">{cs.title}</h4>
            <p className="text-sm text-neutral-400 mb-6">{cs.period}</p>

            <div className="space-y-4 text-sm text-neutral-600 text-left">
              <div>
                <span className="text-blue-600 font-semibold">문제 </span>
                {cs.problem}
              </div>
              <div>
                <span className="text-blue-600 font-semibold">의사결정 </span>
                {cs.decision}
              </div>
              {cs.code && (
                <pre className="bg-neutral-950 rounded-xl p-4 overflow-x-auto text-xs text-gray-200 leading-relaxed">
                  <code>{cs.code}</code>
                </pre>
              )}
              <div>
                <span className="text-emerald-600 font-semibold">결과 </span>
                {cs.result}
              </div>
              <div>
                <span className="text-amber-600 font-semibold">회고 </span>
                {cs.retro}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
