interface ProjectResultProps {
  result: string;
}

export function ProjectResult({ result }: ProjectResultProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        결과 / 의미
      </h2>
      <p className="text-sm leading-relaxed text-slate-700">{result}</p>
    </div>
  );
}
