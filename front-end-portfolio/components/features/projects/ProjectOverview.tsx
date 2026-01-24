interface ProjectOverviewProps {
  overview: string;
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-base leading-relaxed text-slate-700">{overview}</p>
    </div>
  );
}
