import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-semibold text-slate-900">404</h1>
      <p className="mb-2 text-lg text-slate-600">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <p className="mb-8 text-sm text-slate-500">
        페이지가 이동되었거나 삭제되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
