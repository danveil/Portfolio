import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#07111f",
        color: "#48d7ec",
        fontSize: 29,
        fontWeight: 800,
        fontFamily: "monospace",
        border: "4px solid #10263a",
      }}
    >
      A&gt;
    </div>,
    size,
  );
}
