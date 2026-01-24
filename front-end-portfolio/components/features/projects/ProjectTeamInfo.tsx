import type { TeamMember } from "@/data/profile";

interface ProjectTeamInfoProps {
  teamInfo: TeamMember[];
}

export function ProjectTeamInfo({ teamInfo }: ProjectTeamInfoProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        팀 구성
      </h2>
      <div className="flex flex-wrap gap-3">
        {teamInfo.map((member, index) => (
          <div
            key={index}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
          >
            <span className="font-medium">{member.role}</span>
            <span className="ml-1 text-slate-500">{member.count}명</span>
          </div>
        ))}
      </div>
    </div>
  );
}
