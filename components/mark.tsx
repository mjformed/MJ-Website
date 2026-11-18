import { asset } from "@/lib/asset";

export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={asset("/brand/mark.jpg")}
      alt=""
      className={`rounded-sm object-cover ${className}`}
    />
  );
}
