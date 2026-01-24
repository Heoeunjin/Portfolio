import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/data/profile";
import { Section } from "@/components/common/Section";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-sky-50 to-indigo-50 px-6 py-8 md:flex-row md:items-center">
        {/* 노이즈 그레디언트 배경 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: "url('/gradient.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 flex flex-1 items-center gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/60 bg-white/40 shadow-md">
            <Image
              src="/profile.jpeg"
              alt="허은진 프로필 사진"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Frontend Developer
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              운영자가 실제로 쓰는 관리자 페이지를
              <br className="hidden md:block" /> 끝까지 책임지는 프론트엔드
              개발자, 허은진입니다.
            </h1>
            <p className="max-w-xl text-sm text-slate-700">{profile.oneLiner}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
              <span className="rounded-full border border-slate-300 bg-white/60 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-slate-300 bg-white/60 px-3 py-1">
                Next.js (App Router)
              </span>
              <span className="rounded-full border border-slate-300 bg-white/60 px-3 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-300 bg-white/60 px-3 py-1">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 flex flex-col gap-2 text-xs text-slate-700 md:mt-0 md:w-56">
          <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-sm">
            <span className="font-medium">실제 운영 서비스</span>
            <span className="text-sky-600">2개</span>
          </div>
          <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-sm">
            <span className="font-medium">관리자 페이지</span>
            <span className="text-sky-600">3종 이상</span>
          </div>
          <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 shadow-sm">
            <span className="font-medium">기획·디자인·프론트</span>
            <span className="text-sky-600">단독 수행 경험</span>
          </div>
        </div>
      </section>

      <Section title="요약">
        <ul className="space-y-2 text-sm text-slate-700">
          {profile.summary.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="주요 프로젝트">
        {/* 프로젝트 섹션 상단 Divider */}
        <div className="relative mb-8 h-0.5 overflow-hidden rounded-full">
          <div
            className="absolute inset-0 opacity-50 blur-[2px]"
            style={{
              backgroundImage: "url('/gradient.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="space-y-8">
          {featuredProjects.map((project) => {
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
              <Link key={project.id} href={`/projects/${project.id}`}>
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
                    <div className={`relative mb-2 inline-block overflow-hidden rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white ${
                      project.id === "kma-marathon-renewal" ? "bg-purple-600" : "bg-sky-600"
                    }`}>
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
                    <p className={`mb-1 text-xs font-semibold ${style.hookColor} transition-colors group-hover:opacity-80`}>
                      {project.hook}
                    </p>
                    {project.hookSubtitle && (
                      <p className="mb-3 text-xs text-slate-600">
                        {project.hookSubtitle}
                      </p>
                    )}
                    <header className="mb-3 space-y-1">
                      <h2 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-slate-800">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-slate-500">{project.role}</p>
                        {project.award && (
                          <>
                            <span className="text-xs text-slate-400">·</span>
                            <p className="text-xs font-medium text-slate-600">{project.award}</p>
                          </>
                        )}
                      </div>
                    </header>
                    <p className="mb-3 text-sm text-slate-700">
                      {project.shortDescription}
                    </p>
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
                    <p className={`text-xs font-medium ${style.hookColor} transition-all group-hover:translate-x-1`}>
                      이 프로젝트에서 내가 한 일 →
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

