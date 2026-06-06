"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type WindowWithLenis = Window & {
  __kriLenis?: {
    scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void;
  };
};

export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      (window as WindowWithLenis).__kriLenis?.scrollTo(0, { immediate: true, force: true });
    };

    resetScroll();
    const rafId = window.requestAnimationFrame(resetScroll);

    return () => window.cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
