import { Badge } from "@/components/ui/badge";
import { useIntl } from "react-intl";
import {
  IconBriefcase,
  IconSchool,
  IconCode,
  IconStar,
  IconRocket,
  IconBolt,
  IconCoffee,
  IconMoon,
} from "@tabler/icons-react";

const badges = [
  {
    id: "badge.open_to_work",
    icon: IconBriefcase,
  },
  {
    id: "badge.undergraduate",
    icon: IconSchool,
  },
  {
    id: "badge.full_stack",
    icon: IconCode,
  },
  {
    id: "badge.open_source",
    icon: IconStar,
  },
  {
    id: "badge.indie_hacker",
    icon: IconRocket,
  },
  {
    id: "badge.fast_learner",
    icon: IconBolt,
  },
  {
    id: "badge.coffee_driven",
    icon: IconCoffee,
  },
  {
    id: "badge.night_coder",
    icon: IconMoon,
  },
];

export default function BadgeBar() {
  const intl = useIntl();

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <Badge key={badge.id} variant="secondary">
            <Icon aria-hidden="true" />
            {intl.formatMessage({ id: badge.id })}
          </Badge>
        );
      })}
    </div>
  );
}
