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
              <article
                className={`flex gap-4 rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  project.isRealService
                    ? "border-sky-300 bg-gradient-to-br from-sky-50 to-indigo-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="w-1 rounded-full bg-sky-400" />
                <div className="flex-1">
                  {project.isRealService && (
                    <div className="mb-2 inline-block rounded-full bg-sky-600 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Real Service
                    </div>
                  )}
                  <p className="mb-1 text-xs font-semibold text-sky-600">
                    {project.hook}
                  </p>
                  {project.hookSubtitle && (
                    <p className="mb-3 text-xs text-slate-600">
                      {project.hookSubtitle}
                    </p>
                  )}
                  <header className="mb-3 space-y-1">
                    <h2 className="text-base font-semibold text-slate-900">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {project.role}
                      {project.period ? ` · ${project.period}` : null}
                    </p>
                  </header>
                  <p className="mb-3 text-sm text-slate-700">
                    {project.shortDescription}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-slate-300 bg-white/80 px-2.5 py-0.5 text-[10px] text-slate-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-sky-600">
                    구조 & 구현 방식 보기 →
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

