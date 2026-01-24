import Image from "next/image";
import type { ProjectImage } from "@/data/profile";

interface ProjectImageSectionProps {
  images: ProjectImage[];
}

export function ProjectImageSection({ images }: ProjectImageSectionProps) {
  // 이미지 개수에 따라 그리드 컬럼 수 결정
  const gridCols =
    images.length === 2 ? "md:grid-cols-2" : images.length === 3 ? "md:grid-cols-3" : "md:grid-cols-1";

  // 스크린샷은 크롭되면 아쉬우니, contain + 높이 고정으로 “보고서/비교” 느낌을 살림
  const imageHeight =
    images.length === 2
      ? "h-80 md:h-[420px]"
      : images.length === 3
        ? "h-64 md:h-72"
        : "h-80 md:h-[420px]";

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {images.map((image, index) => (
        <div key={index} className="space-y-3">
          <div
            className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white ${imageHeight}`}
          >
            {/*
              기본은 스크린샷 전체가 보이도록 contain.
              특정 이미지(예: 리뉴얼 후)만 cover + scale로 “더 크게” 보여줄 수 있음.
            */}
            <Image
              src={image.src}
              alt={image.title}
              fill
              className={image.fit === "cover" ? "object-cover" : "object-contain p-3"}
              style={
                image.fit === "cover" && image.zoom
                  ? { transform: `scale(${image.zoom})` }
                  : undefined
              }
              sizes={
                images.length === 2
                  ? "(max-width: 768px) 100vw, 50vw"
                  : images.length === 3
                    ? "(max-width: 768px) 100vw, 33vw"
                    : "(max-width: 768px) 100vw, 80vw"
              }
            />
          </div>
          <div>
            <h3 className="mb-1 text-sm font-semibold text-slate-900">
              {image.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {image.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
