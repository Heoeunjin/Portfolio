import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { projects } from "@/data/profile";
import { ProjectCard } from "@/components/features/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="정적인 포트폴리오가 아닌, 실제로 굴러가는 서비스 중심의 프로젝트들입니다."
      />

      <Section>
        {/* 프로젝트 섹션 상단 Divider */}
        <div className="relative mb-8 h-px overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 blur-sm"
            style={{
              backgroundImage: "url('/gradient.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} showPeriod />
          ))}
        </div>
      </Section>
    </div>
  );
}

