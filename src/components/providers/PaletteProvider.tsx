"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  curatedPalettes,
  defaultPaletteId,
  type CuratedPalette,
} from "@/content/palettes";
import {
  generateHarmoniousPalette,
  type GeneratedPalette,
} from "@/lib/palette-utils";

type PaletteState = CuratedPalette | GeneratedPalette;

type PaletteContextValue = {
  palette: PaletteState;
  selectPalette: (id: string) => void;
  applyTheme: (theme: Record<string, string>, id: string) => void;
  shuffle: () => void;
};

const PaletteContext = createContext<PaletteContextValue | null>(null);

function applyThemeToDocument(theme: Record<string, string>, id: string) {
  const root = document.documentElement;
  root.setAttribute("data-palette", id);
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function PaletteProvider({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useState<PaletteState>(
    () => curatedPalettes.find((p) => p.id === defaultPaletteId) ?? curatedPalettes[0],
  );

  useEffect(() => {
    applyThemeToDocument(palette.theme, palette.id);
  }, [palette]);

  const applyTheme = useCallback((theme: Record<string, string>, id: string) => {
    setPalette({
      id,
      name: "Custom",
      description: "",
      swatches: [],
      theme,
    } as PaletteState);
    applyThemeToDocument(theme, id);
  }, []);

  const selectPalette = useCallback((id: string) => {
    const found = curatedPalettes.find((p) => p.id === id);
    if (found) setPalette(found);
  }, []);

  const shuffle = useCallback(() => {
    const next = generateHarmoniousPalette();
    setPalette(next);
  }, []);

  const value = useMemo(
    () => ({ palette, selectPalette, applyTheme, shuffle }),
    [palette, selectPalette, applyTheme, shuffle],
  );

  return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
}

export function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within PaletteProvider");
  return ctx;
}
