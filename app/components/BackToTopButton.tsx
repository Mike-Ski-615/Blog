import { ArrowUpIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const topThreshold = 2;
const scrollIdleDelay = 140;

export function BackToTopButton() {
  const intl = useIntl();
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const isScrollingRef = useRef(false);
  const scrollIdleTimerRef = useRef<number | null>(null);

  const setVisibleIfChanged = useCallback((nextIsVisible: boolean) => {
    if (isVisibleRef.current === nextIsVisible) {
      return;
    }

    isVisibleRef.current = nextIsVisible;
    setIsVisible(nextIsVisible);
  }, []);

  useEffect(() => {
    const isAwayFromTop = () => window.scrollY > topThreshold;
    const showIfIdleAwayFromTop = () => {
      setVisibleIfChanged(!isScrollingRef.current && isAwayFromTop());
    };

    if ("onscrollend" in document) {
      let isScrollStartArmed = false;

      const handleScrollStart = () => {
        isScrollStartArmed = false;
        isScrollingRef.current = true;
        setVisibleIfChanged(false);
      };

      const armScrollStart = () => {
        if (isScrollStartArmed) {
          return;
        }

        isScrollStartArmed = true;
        window.addEventListener("scroll", handleScrollStart, {
          passive: true,
          once: true,
        });
      };

      const handleScrollEnd = () => {
        isScrollingRef.current = false;
        showIfIdleAwayFromTop();
        armScrollStart();
      };

      showIfIdleAwayFromTop();
      armScrollStart();
      document.addEventListener("scrollend", handleScrollEnd);

      return () => {
        window.removeEventListener("scroll", handleScrollStart);
        document.removeEventListener("scrollend", handleScrollEnd);
      };
    }

    const handleScroll = () => {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        setVisibleIfChanged(false);
      }

      if (scrollIdleTimerRef.current !== null) {
        window.clearTimeout(scrollIdleTimerRef.current);
      }

      scrollIdleTimerRef.current = window.setTimeout(() => {
        scrollIdleTimerRef.current = null;
        isScrollingRef.current = false;
        showIfIdleAwayFromTop();
      }, scrollIdleDelay);
    };

    showIfIdleAwayFromTop();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollIdleTimerRef.current !== null) {
        window.clearTimeout(scrollIdleTimerRef.current);
        scrollIdleTimerRef.current = null;
      }
    };
  }, [setVisibleIfChanged]);

  const scrollToTop = () => {
    if (scrollIdleTimerRef.current !== null) {
      window.clearTimeout(scrollIdleTimerRef.current);
      scrollIdleTimerRef.current = null;
    }

    isScrollingRef.current = true;
    setVisibleIfChanged(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (!("onscrollend" in document)) {
      scrollIdleTimerRef.current = window.setTimeout(() => {
        scrollIdleTimerRef.current = null;
        isScrollingRef.current = false;
        setVisibleIfChanged(window.scrollY > topThreshold);
      }, scrollIdleDelay);
    }
  };

  useEffect(() => {
    return () => {
      if (scrollIdleTimerRef.current === null) {
        return;
      }

      window.clearTimeout(scrollIdleTimerRef.current);
      scrollIdleTimerRef.current = null;
    };
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      aria-label={intl.formatMessage({ id: "common.backToTop" })}
      onClick={scrollToTop}
      className={cn(
        "fixed md:bottom-20 md:right-20 bottom-10 right-10 transition-all duration-200 outline-4",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <ArrowUpIcon data-icon="inline-start" aria-hidden="true" />
    </Button>
  );
}
