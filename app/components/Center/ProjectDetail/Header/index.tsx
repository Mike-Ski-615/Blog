import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { Link } from "react-router";

type HeaderProps = {
  slug: string;
};

export default function Header({ slug }: HeaderProps) {
  const intl = useIntl();

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2 text-lg font-bold leading-tight text-title">
        <Button variant="ghost" size="icon-sm" asChild>
          <Link
            to="/"
            state={{ viewTransitionProjectSlug: slug }}
            viewTransition
          >
            <IconChevronLeft data-icon="inline-start" />
          </Link>
        </Button>
        {intl.formatMessage({ id: "projectDetail.title" })}
      </div>
      <ModeToggle />
    </div>
  );
}
