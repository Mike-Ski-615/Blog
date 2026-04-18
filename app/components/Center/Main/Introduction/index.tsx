import { IconQuoteOpen } from "@tabler/icons-react";
import { useIntl } from "react-intl";

export default function Introduction() {
  const intl = useIntl();

  return (
    <div className="group relative flex flex-col items-center overflow-hidden py-4 text-center sm:py-6">
      <IconQuoteOpen className="size-12" />
      <blockquote className="relative z-10 max-w-2xl px-1 sm:px-4">
        <p className="text-xl font-bold italic leading-relaxed tracking-tight text-title sm:text-3xl">
          "{intl.formatMessage({ id: "introduction.quote" })}"
        </p>
      </blockquote>
      <div className="z-10 mt-6 flex items-center gap-3 sm:mt-8">
        <div className="h-px w-8 bg-muted-foreground"></div>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
          {intl.formatMessage({ id: "introduction.author" })}
        </span>
        <div className="h-px w-8 bg-muted-foreground"></div>
      </div>
    </div>
  );
}
