import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { contactInfo } from "@/data/profile";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="제 프로젝트나 코드, 구조에 대해 더 궁금하신 점이 있다면 편하게 연락 주세요."
      />

      <Section>
        <dl className="space-y-3 text-sm text-slate-700">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Phone
            </dt>
            <dd>{contactInfo.phone}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Email
            </dt>
            <dd>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sky-700 underline underline-offset-4"
              >
                {contactInfo.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              GitHub
            </dt>
            <dd>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 underline underline-offset-4"
              >
                {contactInfo.github}
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-8 text-sm text-slate-700">
          새로운 문제를 함께 정의하고, 실제로 쓰이는 서비스를 만드는 일에
          관심이 많습니다.{" "}
          <span className="block">
            인터뷰나 캐주얼 톡 모두 편하게 연락 부탁드립니다.
          </span>
        </p>
      </Section>
    </div>
  );
}

