import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #B9B2B0 0%, #C9A3A0 35%, #C98B6B 65%, #F1DCCB 100%)",
          color: "#2B2A2D",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 36, marginTop: 16, opacity: 0.85 }}>{site.tagline}</div>
        <div style={{ fontSize: 22, marginTop: 32, maxWidth: 720, lineHeight: 1.4, opacity: 0.75 }}>
          {site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
