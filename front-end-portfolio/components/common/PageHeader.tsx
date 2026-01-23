interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-8 space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-2xl text-sm text-slate-600">{subtitle}</p>
      )}
    </header>
  );
}

