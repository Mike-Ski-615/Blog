import {
  Languages,
  Moon,
  Settings,
  Sun,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSiteContent } from "@/hooks/useSiteContent";
import { cn } from "@/lib/utils";
import { useDividerStyle } from "@/provider/divider-style-provider";
import { type Language, useLanguage } from "@/provider/language-provider";
import { useTheme } from "@/provider/theme-provider";
import type { DividerStyle, Theme } from "@/types";

type SettingsOption<T extends string> = {
  value: T;
  icon?: LucideIcon;
};

const themeOptions = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
] as const satisfies readonly SettingsOption<string>[];

const dividerOptions = [
  { value: "double-solid" },
  { value: "single-dashed" },
  { value: "soft-fade" },
  { value: "dot-chain" },
  { value: "hairline" },
  { value: "dash-dot" },
  { value: "center-glow" },
  { value: "woven-grid" },
] as const satisfies readonly SettingsOption<DividerStyle>[];

const languageOptions = [
  { value: "en-US", icon: Languages },
  { value: "zh-CN", icon: Languages },
] as const satisfies readonly SettingsOption<Language>[];

type ThemeValue = (typeof themeOptions)[number]["value"];

const isThemeValue = (value: string): value is ThemeValue =>
  themeOptions.some((option) => option.value === value);

const isDividerStyle = (value: string): value is DividerStyle =>
  dividerOptions.some((option) => option.value === value);

const isLanguage = (value: string): value is Language =>
  languageOptions.some((option) => option.value === value);

function DividerPreview({
  value,
  className,
}: {
  value: DividerStyle;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      data-divider-preview={value}
      className={cn("divider-preview", className)}
    />
  );
}

export function ModeToggle() {
  const { ui } = useSiteContent();
  const { theme, setTheme } = useTheme();
  const { dividerStyle, setDividerStyle } = useDividerStyle();
  const { locale, setLocale } = useLanguage();
  const settings = ui.settings;

  const onThemeChange = (value: string) => {
    if (isThemeValue(value)) {
      setTheme(value);
    }
  };

  const onLocaleChange = (value: string) => {
    if (isLanguage(value)) {
      setLocale(value);
    }
  };

  const onDividerStyleChange = (value: string) => {
    if (isDividerStyle(value)) {
      setDividerStyle(value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={settings.buttonAria}>
          <Settings data-icon="inline-start" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{settings.menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>{settings.themeLabel}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={theme} onValueChange={onThemeChange}>
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const label = settings.themeOptions[option.value as Theme];

              return (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {Icon ? <Icon /> : null}
                  {label}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>{settings.dividerLabel}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DividerPreview value={dividerStyle} />
              {settings.dividerPresets}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-52">
              <DropdownMenuRadioGroup
                value={dividerStyle}
                onValueChange={onDividerStyleChange}
              >
                {dividerOptions.map((option) => {
                  return (
                    <DropdownMenuRadioItem
                      key={option.value}
                      value={option.value}
                      className="gap-2"
                    >
                      <DividerPreview value={option.value} />
                      <span className="truncate">
                        {settings.dividerOptions[option.value]}
                      </span>
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>{settings.languageLabel}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={locale} onValueChange={onLocaleChange}>
            {languageOptions.map((option) => {
              const Icon = option.icon;

              return (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {Icon ? <Icon /> : null}
                  {settings.languageOptions[option.value]}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
