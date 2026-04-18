import {
  Languages,
  Monitor,
  Moon,
  Settings,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { useIntl } from "react-intl";

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
import { cn } from "@/lib/utils";
import {
  type DividerStyle,
  useDividerStyle,
} from "@/provider/divider-style-provider";
import { type Language, useLanguage } from "@/provider/language-provider";
import { useTheme } from "@/provider/theme-provider";

type SettingsOption<T extends string> = {
  value: T;
  labelId: string;
  icon?: LucideIcon;
};

const themeOptions = [
  { value: "light", labelId: "settings.theme.light", icon: Sun },
  { value: "dark", labelId: "settings.theme.dark", icon: Moon },
  { value: "system", labelId: "settings.theme.system", icon: Monitor },
] as const satisfies readonly SettingsOption<string>[];

const dividerOptions = [
  { value: "double-solid", labelId: "settings.divider.double-solid" },
  { value: "single-dashed", labelId: "settings.divider.single-dashed" },
  { value: "soft-fade", labelId: "settings.divider.soft-fade" },
  { value: "dot-chain", labelId: "settings.divider.dot-chain" },
  { value: "hairline", labelId: "settings.divider.hairline" },
  { value: "dash-dot", labelId: "settings.divider.dash-dot" },
  { value: "center-glow", labelId: "settings.divider.center-glow" },
  { value: "woven-grid", labelId: "settings.divider.woven-grid" },
] as const satisfies readonly SettingsOption<DividerStyle>[];

const languageOptions = [
  { value: "en-US", labelId: "settings.language.en", icon: Languages },
  { value: "zh-CN", labelId: "settings.language.zh", icon: Languages },
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
  const intl = useIntl();
  const { theme, setTheme } = useTheme();
  const { dividerStyle, setDividerStyle } = useDividerStyle();
  const { locale, setLocale } = useLanguage();

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
        <Button
          variant="outline"
          size="icon"
          aria-label={intl.formatMessage({ id: "settings.button.aria" })}
        >
          <Settings data-icon="inline-start" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          {intl.formatMessage({ id: "settings.menu.label" })}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          {intl.formatMessage({ id: "settings.menu.theme" })}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={theme} onValueChange={onThemeChange}>
            {themeOptions.map((option) => {
              const Icon = option.icon;

              return (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {Icon ? <Icon /> : null}
                  {intl.formatMessage({ id: option.labelId })}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          {intl.formatMessage({ id: "settings.menu.divider" })}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DividerPreview value={dividerStyle} />
              {intl.formatMessage({ id: "settings.divider.presets" })}
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
                        {intl.formatMessage({ id: option.labelId })}
                      </span>
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          {intl.formatMessage({ id: "settings.menu.language" })}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={locale} onValueChange={onLocaleChange}>
            {languageOptions.map((option) => {
              const Icon = option.icon;

              return (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {Icon ? <Icon /> : null}
                  {intl.formatMessage({ id: option.labelId })}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
