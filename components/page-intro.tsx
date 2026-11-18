import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm tracking-[0.2em] uppercase text-muted">{kicker}</p>
      <h1 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
        {title}
      </h1>
      {children ? <div className="mt-6 text-lg leading-relaxed text-muted">{children}</div> : null}
    </div>
  );
}
