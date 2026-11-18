type MarkProps = {
  tone?: "ink" | "paper";
  className?: string;
};

export function Mark({ tone = "ink", className = "size-8" }: MarkProps) {
  const background = tone === "ink" ? "#1a1714" : "#f3eee6";
  const foreground = tone === "ink" ? "#f3eee6" : "#1a1714";

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="1.5" fill={background} />
      <path d="M8 7h16v3.2H11.6V14.2h9.4v3H11.6V25H8V7z" fill={foreground} />
    </svg>
  );
}
