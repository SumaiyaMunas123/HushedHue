"use client";

import dynamic from "next/dynamic";
import { PaletteProvider } from "@/components/providers/PaletteProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { useIsTouchDevice, useReducedMotion } from "@/lib/hooks";

const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const touch = useIsTouchDevice();
  const showCursor = !reduced && !touch;

  return (
    <PaletteProvider>
      <SmoothScroll>
        {showCursor ? <CustomCursor /> : null}
        {children}
      </SmoothScroll>
    </PaletteProvider>
  );
}
