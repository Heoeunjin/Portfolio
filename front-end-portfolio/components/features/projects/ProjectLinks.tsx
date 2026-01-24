import Link from "next/link";

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
  notionUrl?: string;
}

export function ProjectLinks({
  liveUrl,
  githubUrl,
  notionUrl,
}: ProjectLinksProps) {
  if (!liveUrl && !githubUrl && !notionUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100"
        >
          실제 서비스 보기
        </Link>
      )}
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          GitHub 코드 보기
        </Link>
      )}
      {notionUrl && (
        <Link
          href={notionUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-100"
        >
          노션 문서 보기
        </Link>
      )}
    </div>
  );
}
