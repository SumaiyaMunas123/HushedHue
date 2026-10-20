"use client";

import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

const vert = /* glsl */ `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uC3;
  uniform vec3 uC4;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    float n = noise(uv * 3.0 + uTime * 0.04);
    float band = smoothstep(-0.8, 0.9, p.y + n * 0.35);
    vec3 col = mix(uC1, uC2, band);
    col = mix(col, uC3, smoothstep(0.2, 1.0, uv.x + n * 0.15));
    col = mix(col, uC4, smoothstep(0.0, 1.0, length(p) * 0.45 + n * 0.2));

    float grain = hash(gl_FragCoord.xy + uTime) * 0.08;
    col += grain;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function readCssColor(name: string, fallback: string): [number, number, number] {
  if (typeof window === "undefined") return hexToRgb(fallback);
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return hexToRgb(v || fallback);
}

export function HeroShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ alpha: true, dpr: Math.min(2, window.devicePixelRatio) });
    } catch {
      return;
    }

    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.canvas.className = "absolute inset-0 h-full w-full";

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uC1: { value: readCssColor("--color-mist", "#B9B2B0") },
        uC2: { value: readCssColor("--color-grey-rose", "#C9A3A0") },
        uC3: { value: readCssColor("--color-ember", "#C98B6B") },
        uC4: { value: readCssColor("--color-peach-haze", "#F1DCCB") },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.uResolution.value = [clientWidth, clientHeight];
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let frame: number;
    const start = performance.now();
    const loop = (t: number) => {
      program.uniforms.uTime.value = (t - start) / 1000;
      program.uniforms.uC1.value = readCssColor("--color-mist", "#B9B2B0");
      program.uniforms.uC2.value = readCssColor("--color-grey-rose", "#C9A3A0");
      program.uniforms.uC3.value = readCssColor("--color-ember", "#C98B6B");
      program.uniforms.uC4.value = readCssColor("--color-peach-haze", "#F1DCCB");
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      gl.canvas.remove();
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 mesh-gradient grain-overlay opacity-90"
      />
    );
  }

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-60" />
    </div>
  );
}
