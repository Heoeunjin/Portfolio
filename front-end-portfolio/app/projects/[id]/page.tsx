import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { projects } from "@/data/profile";

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <PageHeader
        title={project.title}
        subtitle={project.shortDescription}
      />

      <Section>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <div>
            <p className="font-medium text-slate-900">{project.role}</p>
            {project.period && (
              <p className="text-xs text-slate-500">{project.period}</p>
            )}
          </div>
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-2 text-xs">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-medium text-sky-700 transition hover:bg-sky-100"
                >
                  실제 서비스 보기
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  GitHub 코드 보기
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Background
            </h2>
            <p className="mt-2 text-sm text-slate-700">{project.background}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Problem
            </h2>
            <p className="mt-2 text-sm text-slate-700">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              My Role
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {project.myRole.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Solution
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {project.solution.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Result & Learnings
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {project.result.map((item) => (
                <li key={item}>• {item}</li>
              ))}
              {project.learnings.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Tech Stack
          </h2>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-700">
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

