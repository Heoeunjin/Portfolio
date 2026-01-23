import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="정적인 포트폴리오가 아닌, 실제로 굴러가는 서비스 중심의 프로젝트들입니다."
      />

      <Section>
        <div className="space-y-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <article className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="w-1 rounded-full bg-sky-400" />
                <div className="flex-1">
                  <p className="mb-2 text-xs font-semibold text-sky-600">
                    {project.hook}
                  </p>
                  <header className="mb-3 space-y-1">
                    <h2 className="text-base font-semibold text-slate-900">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {project.role}
                      {project.period ? ` · ${project.period}` : null}
                    </p>
                  </header>

                  <p className="mb-2 text-sm text-slate-700">
                    {project.shortDescription}
                  </p>

                  <p className="mt-2 text-xs font-medium text-sky-600">
                    상세 보기 →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

