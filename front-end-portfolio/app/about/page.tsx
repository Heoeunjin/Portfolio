import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About"
        subtitle="실제로 쓰이는 화면을 설계하고 구현하는 개발자"
      />

      <Section>
        <p className="mb-4 text-sm text-slate-700">
          저는 빠르게 개발하는 것보다{" "}
          <span className="font-semibold text-slate-900">
            운영하면서 문제 생기지 않는 구조
          </span>
          를 더 중요하게 생각하는 프론트엔드 개발자입니다.
        </p>
        <p className="mb-4 text-sm text-slate-700">
          실제 운영 중인 서비스에서 관리자 페이지, CS 대응, 기능 추가를
          경험하며 프론트엔드는 결국{" "}
          <span className="font-semibold text-slate-900">
            사람이 계속 쓰는 화면을 만드는 일
          </span>
          이라는 걸 배웠습니다.
        </p>
        <p className="text-sm text-slate-700">
          AI 얼굴 분석 결과를 어떻게 보여줘야 사용자가 직관적으로 이해할지,
          개발자의 포트폴리오를 정적인 문서가 아닌 실제로 써볼 수 있는
          서비스로 만들 수 있을지, 전국마라톤협회 운영자가 대회를 등록할 때
          어떤 흐름이 자연스러울지 같은 질문들을 계속 던지며 작업해왔습니다.
        </p>
      </Section>

      <Section title="기본 정보">
        <dl className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Position
            </dt>
            <dd>{profile.position}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Education
            </dt>
            <dd>{profile.education}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Main Stack
            </dt>
            <dd>{profile.stacks.join(", ")}</dd>
          </div>
        </dl>
      </Section>

      <Section title="일하는 방식">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>
            • 문제를 먼저 정의하고 기능을 설계합니다. “어떤 기술을 쓸까?”보다
            “사용자와 운영자의 어떤 문제를 해결해야 하지?”를 먼저 고민합니다.
          </li>
          <li>
            • 도메인 기준으로 폴더와 컴포넌트를 나누고, 재사용 가능한 UI 레벨과
            도메인 레벨을 분리해 유지보수성을 높입니다.
          </li>
          <li>
            • 빠르게 구현한 뒤, 실제 사용 상황을 가정해 사용 플로우를 계속
            개선하는 편입니다. 필요하다면 디자이너/기획자 역할도 함께 합니다.
          </li>
        </ul>
      </Section>
    </div>
  );
}

