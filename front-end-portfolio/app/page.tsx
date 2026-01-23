import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/data/profile";
import { Section } from "@/components/common/Section";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-pink-50 via-sky-50 to-indigo-50 px-6 py-8 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/60 bg-white/40 shadow-md">
            <Image
              src="/profile.jpg"
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

        <div className="mt-4 flex flex-col gap-2 text-xs text-slate-700 md:mt-0 md:w-56">
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
        <div className="space-y-8">
          {featuredProjects.map((project) => (
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
                  <p className="text-xs text-slate-500">{project.role}</p>
                </header>
                <p className="text-sm text-slate-700">
                  {project.shortDescription}
                </p>
                <p className="mt-3 text-xs font-medium text-sky-600">
                  자세히 보기 →
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

