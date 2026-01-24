import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { projects } from "@/data/profile";
import { ProjectOverview } from "@/components/features/projects/ProjectOverview";
import { ProjectImageSection } from "@/components/features/projects/ProjectImageSection";
import { ProjectMyRole } from "@/components/features/projects/ProjectMyRole";
import { ProjectResult } from "@/components/features/projects/ProjectResult";
import { ProjectTeamInfo } from "@/components/features/projects/ProjectTeamInfo";
import { ProjectLinks } from "@/components/features/projects/ProjectLinks";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <div className="mb-8">
        {project.iconSrc && (
          <div className="mb-6 inline-block">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl shadow-lg shadow-slate-300/50">
              <Image
                src={project.iconSrc}
                alt={`${project.title} 아이콘`}
                fill
                sizes="80px"
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        )}
        <PageHeader title={project.title} subtitle={project.shortDescription} />
      </div>

      <Section>
        {/* 링크 버튼들 */}
        <div className="mb-8">
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            notionUrl={project.notionUrl}
          />
        </div>

        {/* 프로젝트 개요 */}
        {project.overview && (
          <div className="mb-8">
            <ProjectOverview overview={project.overview} />
          </div>
        )}

        {/* 핵심 포인트 이미지들 */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <Section title="핵심 포인트">
              <ProjectImageSection images={project.images} />
            </Section>
          </div>
        )}

        {/* 내가 한 일 */}
        {project.myRoleSummary && project.myRoleSummary.length > 0 && (
          <div className="mb-8">
            <ProjectMyRole myRole={project.myRoleSummary} />
          </div>
        )}

        {/* 결과 / 의미 */}
        {project.resultSummary && (
          <div className="mb-8">
            <ProjectResult result={project.resultSummary} />
          </div>
        )}

        {/* 팀 구성 */}
        {project.teamInfo && project.teamInfo.length > 0 && (
          <div className="mb-8">
            <ProjectTeamInfo teamInfo={project.teamInfo} />
          </div>
        )}

        {/* Tech Stack */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 text-xs text-slate-700">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
