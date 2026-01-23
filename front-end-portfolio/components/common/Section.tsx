import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-12">
      {title && (
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

