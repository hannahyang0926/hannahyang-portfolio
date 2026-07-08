"use client";

import { useState } from "react";

const COPY = {
  ko: {
    langLabel: "KO",
    eyebrow: "PORTFOLIO MANIFEST",
    name: "Hannah",
    role: "해외사업 주임 · 글로벌 B2B 영업",
    statement: "계약을 성사시키는 영업과, 그것을 가능하게 하는 기술을 함께 다룹니다.",
    stampTitle: "CERTIFIED",
    stampLines: ["2년+ 해외영업", "3개 국어", "100+ 거래처"],
    manifestHeading: "MANIFEST — 6 SECTIONS",
    manifestSub: "각 항목을 누르면 해당 작업물로 이동합니다.",
    items: [
      { no: "01", title: "해외영업 성과", desc: "성사된 계약과 PI · CI · PL 문서 (비식별 처리)" },
      { no: "02", title: "전시회 & 종합 업무", desc: "전시회 전 과정 운영, 지사화사업, 수입 · 인증 프로세스" },
      { no: "03", title: "비주얼 & 응원 작업", desc: "사진 · 영상 · Adobe 작업물" },
      { no: "04", title: "글쓰기 & 마케팅", desc: "소설 · 카피 · 마케팅 결과물" },
      { no: "05", title: "개발 & AI", desc: "웹 · 앱 · 미니프로그램 · AI 에이전트" },
      { no: "06", title: "3개 국어", desc: "중국어(모국어) · 한국어(TOPIK 6급) · 영어(비즈니스)" },
    ],
    footerNote: "현재 구축 중 — 매주 업데이트됩니다.",
  },
  en: {
    langLabel: "EN",
    eyebrow: "PORTFOLIO MANIFEST",
    name: "Hannah",
    role: "Global Sales Lead · B2B Overseas Business",
    statement: "Sales that closes deals, and the technical skill that makes it scale.",
    stampTitle: "CERTIFIED",
    stampLines: ["2+ yrs overseas sales", "3 languages", "100+ accounts"],
    manifestHeading: "MANIFEST — 6 SECTIONS",
    manifestSub: "Select an item to view the work.",
    items: [
      { no: "01", title: "Overseas Sales Track Record", desc: "Closed deals with redacted PI / CI / PL documents" },
      { no: "02", title: "Trade Shows & Full Operations", desc: "End-to-end trade show ops, market entry, import & certification" },
      { no: "03", title: "Visual & Fan Support Work", desc: "Photography, video, Adobe production work" },
      { no: "04", title: "Writing & Marketing", desc: "Fiction, copywriting, marketing deliverables" },
      { no: "05", title: "Development & AI", desc: "Web, apps, mini-programs, AI agents" },
      { no: "06", title: "Trilingual", desc: "Native Chinese · TOPIK 6 Korean · Business English" },
    ],
    footerNote: "Under construction — updated weekly.",
  },
  zh: {
    langLabel: "ZH",
    eyebrow: "PORTFOLIO MANIFEST",
    name: "Hannah",
    role: "海外事业主任 · 全球 B2B 营业",
    statement: "能成交的营业能力,加上让它可持续放大的技术能力。",
    stampTitle: "CERTIFIED",
    stampLines: ["2年以上海外营业", "三国语言", "100+ 客户"],
    manifestHeading: "MANIFEST — 6 个板块",
    manifestSub: "点击任意一项,前往对应作品。",
    items: [
      { no: "01", title: "海外营业成果", desc: "成交案例与模糊处理后的 PI / CI / PL 文件" },
      { no: "02", title: "展会与综合业务", desc: "展会全流程运营、지사화사업、수입与认证流程" },
      { no: "03", title: "影像与应援作品", desc: "摄影、视频、Adobe 创作" },
      { no: "04", title: "写作与营销", desc: "小说、文案、营销结果物" },
      { no: "05", title: "开发与 AI", desc: "网站、App、小程序、AI agent" },
      { no: "06", title: "三国语言", desc: "中文母语 · 韩语 TOPIK 6级 · 商务英语" },
    ],
    footerNote: "网站正在搭建中 — 每周更新。",
  },
};

const LANGS = ["ko", "en", "zh"];

export default function Home() {
  const [lang, setLang] = useState("ko");
  const t = COPY[lang];

  return (
    <main className="min-h-screen bg-[#0B1F3A] text-[#F2EEE3]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        <div className="flex items-center justify-between border-b border-[#2A3F5F] pb-4">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#8B93A6]">
            {t.eyebrow}
          </span>
          <div className="flex gap-1">
            {LANGS.map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-sm px-2.5 py-1 font-mono text-[11px] tracking-wider transition-colors ${
                  lang === code
                    ? "bg-[#B23A2E] text-[#F2EEE3]"
                    : "text-[#8B93A6] hover:text-[#F2EEE3]"
                }`}
              >
                {COPY[code].langLabel}
              </button>
            ))}
          </div>
        </div>

        <section className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-[1fr_auto] sm:items-center sm:py-20">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              {t.name}
            </h1>
            <p className="mt-4 text-lg text-[#C7CCDA] sm:text-xl">{t.role}</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#8B93A6]">
              {t.statement}
            </p>
          </div>

          <div className="flex justify-start sm:justify-end">
            <div className="relative flex h-36 w-36 shrink-0 -rotate-6 items-center justify-center rounded-full border-2 border-[#B23A2E] sm:h-40 sm:w-40">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#B23A2E]/60" />
              <div className="flex flex-col items-center gap-1 text-center text-[#B23A2E]">
                <span className="font-mono text-[10px] tracking-[0.2em]">
                  {t.stampTitle}
                </span>
                <div className="my-1 h-px w-10 bg-[#B23A2E]/50" />
                {t.stampLines.map((line) => (
                  <span key={line} className="font-mono text-[9px] leading-tight tracking-wide">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-mono text-xs tracking-[0.2em] text-[#C9A227]">
              {t.manifestHeading}
            </h2>
            <span className="hidden text-xs text-[#8B93A6] sm:inline">
              {t.manifestSub}
            </span>
          </div>

          <ul className="mt-4 divide-y divide-[#2A3F5F] border-y border-[#2A3F5F]">
            {t.items.map((item) => (
              <li key={item.no}>
                
                  href={`#section-${item.no}`}
                  className="group flex items-center gap-5 py-5 transition-colors hover:bg-[#10284A]"
                >
                  <span className="font-mono text-sm text-[#C9A227]">{item.no}</span>
                  <div className="flex-1">
                    <p className="text-base font-medium text-[#F2EEE3]">{item.title}</p>
                    <p className="mt-0.5 text-sm text-[#8B93A6]">{item.desc}</p>
                  </div>
                  <span className="font-mono text-[#8B93A6] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="py-10 text-center font-mono text-[11px] tracking-wide text-[#8B93A6]">
          {t.footerNote}
        </footer>
      </div>
    </main>
  );
}
