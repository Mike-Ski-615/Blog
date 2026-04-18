import type { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <>
      <header className="px-4 py-2">
        <h2 className="text-lg font-medium tracking-tight">{children}</h2>
      </header>
      <div className="double-divider" />
    </>
  );
}
