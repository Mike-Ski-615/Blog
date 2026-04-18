import { cn } from "@/lib/utils";

type DotGridProps = {
  className?: string;
};

export default function DotGrid({ className }: DotGridProps) {
  return (
    <div className={cn("h-48 p-2", className)}>
      <div
        className="size-full"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1.25px, transparent 1.25px)`,
          backgroundSize: `8px 8px`,
        }}
      />
    </div>
  );
}
