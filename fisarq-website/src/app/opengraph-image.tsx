import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#1a1d20", color: "#f3f1ed" }}>
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: 8 }}>FISARQ</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 120, height: 4, background: "#a8865b", marginBottom: 32 }} />
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>Arquitetura, engenharia e design com rigor.</div>
        </div>
      </div>
    ),
    size,
  );
}
