import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  children: ReactNode;
}

export const LegalLayout = ({ title, lastUpdated, intro, children }: LegalLayoutProps) => (
  <div className="min-h-screen bg-background px-4 pb-6 pt-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-[920px]">
      <div className="rounded-[32px] border border-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(21,77,127,0.12),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,249,253,0.96)_100%)] p-6 shadow-[0_32px_90px_-44px_rgba(8,24,46,0.5)] sm:p-10 lg:p-14">
        <p className="text-xs font-heading font-semibold uppercase tracking-[0.28em] text-primary/70 mb-3">
          Legal
        </p>
        <h1 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-xs italic text-muted-foreground sm:text-sm">
          Last updated: {lastUpdated}
        </p>
        <div className="mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-primary via-sky-500 to-transparent" />

        <div className="mt-8 text-sm leading-relaxed text-foreground sm:text-base">
          {intro}
        </div>

        <div className="mt-2 space-y-8">{children}</div>
      </div>
    </div>
  </div>
);

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export const LegalSection = ({ title, children }: LegalSectionProps) => (
  <section className="mt-8">
    <h2 className="font-heading text-lg font-bold text-primary sm:text-xl">{title}</h2>
    <div className="mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-sky-500 to-transparent" />
    <div className="mt-4 text-sm leading-relaxed text-foreground sm:text-[15px]">
      {children}
    </div>
  </section>
);

interface LegalListProps {
  items: ReactNode[];
}

export const LegalList = ({ items }: LegalListProps) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
        <span className="flex-1">{item}</span>
      </li>
    ))}
  </ul>
);
