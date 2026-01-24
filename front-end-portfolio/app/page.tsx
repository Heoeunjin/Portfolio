import Image from "next/image";
import { profile, projects } from "@/data/profile";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/features/projects/ProjectCard";

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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}

