"use client";

import { useCallback, useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useIsTouchDevice(): boolean {
  const [touch, setTouch] = useState(true);

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return touch;
}

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const show = useCallback((text: string, ms = 2200) => {
    setMessage(text);
    window.setTimeout(() => setMessage(null), ms);
  }, []);

  return { message, show };
}
