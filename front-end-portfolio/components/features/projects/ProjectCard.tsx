import Link from "next/link";
import type { Project } from "@/data/profile";

interface ProjectCardProps {
  project: Project;
  showPeriod?: boolean;
}

export function ProjectCard({ project, showPeriod = false }: ProjectCardProps) {
  // KMA만 보라색, 나머지는 스카이 블루
  const getProjectStyle = () => {
    if (project.id === "kma-marathon-renewal") {
      return {
        borderColor: "border-purple-300",
        bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
        leftBar: "bg-purple-500",
        hookColor: "text-purple-600",
      };
    }
    // 나머지는 배경색 없이 흰색
    return {
      borderColor: "border-slate-200",
      bgGradient: "bg-white",
      leftBar: "bg-sky-400",
      hookColor: "text-sky-600",
    };
  };

  const style = getProjectStyle();

  return (
    <Link href={`/projects/${project.id}`}>
      <article
        className={`group relative flex gap-4 overflow-hidden rounded-xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${style.borderColor} ${style.bgGradient}`}
      >
        {/* 카드 배경 그레디언트 오버레이 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply transition-opacity group-hover:opacity-[0.1]"
          style={{
            backgroundImage: "url('/gradient.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className={`w-1.5 rounded-full ${style.leftBar} transition-all group-hover:w-2`} />
        <div className="relative z-10 flex-1">
          {project.isRealService && (
            <div
              className={`relative mb-2 inline-block overflow-hidden rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white ${
                project.id === "kma-marathon-renewal" ? "bg-purple-600" : "bg-sky-600"
              }`}
            >
              {/* REAL SERVICE 뱃지 뒤 그레디언트 */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/gradient.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <span className="relative z-10">Real Service</span>
            </div>
          )}
          <p
            className={`mb-1 text-xs font-semibold ${style.hookColor} transition-colors group-hover:opacity-80`}
          >
            {project.hook}
          </p>
          {project.hookSubtitle && (
            <p className="mb-3 text-xs text-slate-600">{project.hookSubtitle}</p>
          )}
          <header className="mb-3 space-y-1">
            <h2 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-slate-800">
              {project.title}
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-xs text-slate-500">
                {project.role}
                {showPeriod && project.period ? ` · ${project.period}` : null}
              </p>
              {project.award && (
                <>
                  <span className="text-xs text-slate-400">·</span>
                  <p className="text-xs font-medium text-slate-600">{project.award}</p>
                </>
              )}
            </div>
          </header>
          <p className="mb-3 text-sm text-slate-700">{project.shortDescription}</p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-300 bg-white/90 px-2.5 py-0.5 text-[10px] text-slate-600 shadow-sm transition-all group-hover:bg-white group-hover:shadow"
              >
                {badge}
              </span>
            ))}
          </div>
          <p
            className={`text-xs font-medium ${style.hookColor} transition-all group-hover:translate-x-1`}
          >
            이 프로젝트에서 내가 한 일 →
          </p>
        </div>
      </article>
    </Link>
  );
}
