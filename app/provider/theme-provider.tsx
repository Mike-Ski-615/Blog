import { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "@/types";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const THEME_VALUES: Theme[] = ["dark", "light"];

const isBrowser = () => typeof window !== "undefined";

const getStoredTheme = (storageKey: string): Theme | null => {
  if (!isBrowser()) {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme && THEME_VALUES.includes(storedTheme as Theme)) {
      return storedTheme as Theme;
    }
  } catch {
    // Ignore storage access failures (private mode, disabled storage, SSR).
  }

  return null;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [hasLoadedTheme, setHasLoadedTheme] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme(storageKey);
    if (storedTheme) {
      setTheme(storedTheme);
    }

    setHasLoadedTheme(true);
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(...THEME_VALUES);
    root.classList.add(theme);

    if (!hasLoadedTheme) {
      return;
    }

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage write failures and keep the in-memory theme.
    }
  }, [hasLoadedTheme, storageKey, theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
