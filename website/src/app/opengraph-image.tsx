import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Hex values are required here: ImageResponse cannot read CSS custom properties.
export const alt = "Hashmark Labs — Engineering the systems others can't.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/app/_fonts");
const [serifRegular, serifItalic, iconSvg] = await Promise.all([
  readFile(join(fontDir, "InstrumentSerif-Regular.ttf")),
  readFile(join(fontDir, "InstrumentSerif-Italic.ttf")),
  readFile(join(process.cwd(), "src/app/icon.svg"), "base64"),
]);
const logoSrc = `data:image/svg+xml;base64,${iconSvg}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0b14",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(58,38,130,0.75) 0%, rgba(10,11,20,0) 55%), radial-gradient(circle at 0% 100%, rgba(90,30,90,0.6) 0%, rgba(10,11,20,0) 50%)",
          color: "#f4f1fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logoSrc} width={64} height={64} />
          <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.32em", color: "#f4f1fa", fontWeight: 500 }}>HASHMARK LABS</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Instrument Serif", fontSize: 104, lineHeight: 1.02, letterSpacing: "-0.01em" }}>
          <div style={{ display: "flex" }}>Engineering the systems</div>
          <div style={{ display: "flex", fontStyle: "italic", color: "#ff5e8e" }}>others can&apos;t.</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 48, height: 2, backgroundImage: "linear-gradient(90deg, #ff5e8e, #b98cff)" }} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.14em", color: "#c9c7de", textTransform: "uppercase" }}>
            AI · Blockchain · FinTech — Senior-led consultancy
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serifRegular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
