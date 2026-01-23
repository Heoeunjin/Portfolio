import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { skills } from "@/data/profile";

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        title="Skills"
        subtitle="기술 나열보다, 무엇을 만들며 어떻게 사용했는지를 중심으로 정리했습니다."
      />

      <Section title="Frontend">
        <ul className="space-y-2 text-sm text-slate-700">
          {skills.frontend.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Styling & UI">
        <ul className="space-y-2 text-sm text-slate-700">
          {skills.styling.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="State Management & API">
        <ul className="space-y-2 text-sm text-slate-700">
          {skills.stateAndApi.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Etc">
        <ul className="space-y-2 text-sm text-slate-700">
          {skills.etc.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

