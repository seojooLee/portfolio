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

const dynamicFormSnippet = `// 파라미터 타입별 검증 규칙 (개념을 재구성한 예시)
const TYPE_VALIDATORS: Record<string, RegExp> = {
  address: /^0x[a-fA-F0-9]{40}$/,
  uint256: /^[0-9]+$/,
  string: /^.+$/,
};

const parseValue = (raw: string, type: string) => {
  if (raw.includes(",")) return raw.split(",").map((v) => v.trim());
  if (type === "uint256") return Number(raw);
  return raw;
};

function DynamicParamField({ param, value, onChange }: ParamFieldProps) {
  const isValid = TYPE_VALIDATORS[param.type]?.test(value) ?? true;
  return (
    <Input
      value={value}
      onChange={(e) => onChange(param.id, parseValue(e.target.value, param.type))}
      errorMessage={!isValid ? '포맷이 맞지 않습니다' : undefined}
    />
  );
}`;

const canvasSnippet = `const generateThumbnail = (image: HTMLImageElement, size = 120) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, 0, 0, size, size);

  return canvas.toDataURL("image/jpeg", 0.7);
};`;

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
    period: "블록체인 해커톤 콘솔 개발 · 2025.02 ~ 2026.03",
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
  {
    title: "스마트컨트랙트 파라미터 기반 동적 폼 생성",
    period: "블록체인 해커톤 콘솔 개발 · 2025.02 ~ 2026.03",
    problem:
      "블록체인 스마트컨트랙트 함수마다 파라미터 개수와 타입(주소, 정수, 문자열, 배열 등)이 제각각이라, 함수 호출 폼을 매번 개별적으로 하드코딩하면 신규 컨트랙트에 대응할 때마다 프론트엔드 코드 수정과 배포가 필요했습니다.",
    decision:
      "컨트랙트 메타데이터(파라미터 이름·타입)를 입력받아, 타입에 맞는 입력 필드와 검증 규칙을 런타임에 구성하는 동적 폼 컴포넌트를 설계했습니다. 타입별 정규식 검증 맵을 두고, 값 입력 시 타입에 맞는 포맷인지 즉시 검증하며, 쉼표로 구분된 입력은 배열로, 숫자 문자열은 number로 자동 변환하도록 했습니다.",
    code: dynamicFormSnippet,
    result:
      "신규 컨트랙트 함수가 추가되어도 파라미터 정의만 넘기면 별도 UI 코드 작성 없이 대응할 수 있게 됐고, 타입별 검증 로직을 재사용하면서 입력 실수로 인한 오류도 줄었습니다.",
    retro:
      "타입이 늘어날수록 검증 규칙 맵이 커지는 트레이드오프가 있어서, 다음엔 타입별 검증기를 플러그인 형태로 분리해보고 싶습니다.",
  },
  {
    title: "저사양 키오스크 렌더링 지연 개선",
    period: "Eliga 사내식당 주문 시스템 · 2022.05 ~ 2022.10",
    problem:
      "저사양 키오스크 환경에서 다수의 메뉴 원본 이미지를 그대로 렌더링하면서 화면 전환 시 3~5초의 지연이 발생했습니다.",
    decision:
      "원본 이미지를 그대로 그리는 대신, HTML Canvas API로 작은 크기의 썸네일을 미리 생성해 화면에는 썸네일만 렌더링하도록 바꿨습니다. 이미지 디코딩·리사이즈 비용을 줄이는 방향으로 접근했습니다.",
    code: canvasSnippet,
    result:
      "3~5초였던 지연이 즉시 반응하는 수준으로 개선됐고, 저사양 기기에서도 메뉴 화면 전환이 매끄러워졌습니다.",
    retro:
      "지금 다시 한다면, 썸네일 생성을 요청 시점이 아니라 이미지 업로드 시점(서버 사이드)으로 옮겨서 클라이언트 연산 자체를 없애는 방향도 검토해보고 싶습니다.",
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
                <>
                  <pre className="bg-neutral-950 rounded-xl p-4 overflow-x-auto text-xs text-gray-200 leading-relaxed">
                    <code>{cs.code}</code>
                  </pre>
                  <p className="text-xs text-neutral-400 italic">
                    * 해당 코드는 실제 로직을 포트폴리오 설명을 위해 재구성한 예시입니다.
                  </p>
                </>
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
