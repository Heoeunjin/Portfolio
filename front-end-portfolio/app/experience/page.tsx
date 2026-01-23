import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { experiences } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Experience"
        subtitle="프로젝트 경험과 서비스 직군 경험을 함께 정리했습니다."
      />

      <Section title="Frontend Projects">
        <ul className="space-y-2 text-sm text-slate-700">
          {experiences.frontend.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title={experiences.partTime.title}>
        <p className="text-sm text-slate-700">
          {experiences.partTime.description}
        </p>
      </Section>

      <Section title="개발자로서 얻은 것">
        <ul className="space-y-2 text-sm text-slate-700">
          {experiences.partTime.devConnection.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

