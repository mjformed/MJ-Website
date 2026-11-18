import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

export function PhotoLayer({
  src,
  overlay,
  position = "object-center",
  className = "",
  children,
}: {
  src: string;
  overlay: string;
  position?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={asset(src)}
        alt=""
        className={`absolute inset-0 h-full w-full scale-105 object-cover ${position}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative">{children}</div>
    </div>
  );
}
