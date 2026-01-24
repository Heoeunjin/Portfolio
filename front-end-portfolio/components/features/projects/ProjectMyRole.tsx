interface ProjectMyRoleProps {
  myRole: string[];
}

export function ProjectMyRole({ myRole }: ProjectMyRoleProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        이 프로젝트에서 내가 한 일
      </h2>
      <ul className="space-y-2 text-sm text-slate-700">
        {myRole.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 text-sky-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
