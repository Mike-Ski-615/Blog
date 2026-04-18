import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useIntl } from "react-intl";

type HoverSide = "left" | "top" | "bottom" | "right";

type SocialLink = {
  label: string;
  href: string;
  side: HoverSide;
  profile: {
    nameId: string;
    emailId: string;
    signatureId?: string;
  };
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
    side: "left",
    profile: {
      nameId: "accountSection.github.name",
      emailId: "accountSection.github.email",
      signatureId: "accountSection.github.signature",
    },
  },
  {
    label: "Rednote",
    href: "https://www.xiaohongshu.com/",
    side: "bottom",
    profile: {
      nameId: "accountSection.rednote.name",
      emailId: "accountSection.rednote.email",
      signatureId: "accountSection.rednote.signature",
    },
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/",
    side: "bottom",
    profile: {
      nameId: "accountSection.tiktok.name",
      emailId: "accountSection.tiktok.email",
      signatureId: "accountSection.tiktok.signature",
    },
  },
  {
    label: "Discord",
    href: "https://discord.com/",
    side: "bottom",
    profile: {
      nameId: "accountSection.discord.name",
      emailId: "accountSection.discord.email",
    },
  },
];

function SocialHoverCardItem({ social }: { social: SocialLink }) {
  const intl = useIntl();
  const name = intl.formatMessage({ id: social.profile.nameId });
  const email = intl.formatMessage({ id: social.profile.emailId });
  const signature = social.profile.signatureId
    ? intl.formatMessage({ id: social.profile.signatureId })
    : null;
  const initials = name.slice(0, 1).toUpperCase();

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="secondary" size="xs" asChild>
          <a href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        side={social.side}
        className="w-72 bg-popover p-3 ring-1 ring-border/60"
      >
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
            {initials}
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <p className="truncate font-semibold leading-none">{name}</p>
            <p className="truncate text-xs text-muted-foreground">{email}</p>
            {signature ? (
              <p className="text-xs leading-relaxed text-foreground/90">
                {signature}
              </p>
            ) : null}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function AccountSection() {
  const intl = useIntl();

  return (
    <div className="flex flex-col gap-2">
      <p>
        {intl.formatMessage({ id: "accountSection.prefix" })}{" "}
        <span className="font-semibold">
          {intl.formatMessage({ id: "accountSection.socials" })}
        </span>
      </p>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((social) => (
          <SocialHoverCardItem key={social.label} social={social} />
        ))}
      </div>
    </div>
  );
}
