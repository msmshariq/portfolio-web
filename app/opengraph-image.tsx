import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammed Shariq – Freelance Cloud, DevOps & SRE Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}

export default async function OpengraphImage() {
  const imageBuffer = await fetch("https://msmshariq.com/assets/mages/shariq.png").then((res) =>
    res.arrayBuffer()
  );
  const imageSrc = `data:image/png;base64,${arrayBufferToBase64(imageBuffer)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#0A192F",
          padding: "80px",
          gap: "60px",
        }}
      >
        <img
          src={imageSrc}
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            border: "6px solid #64ffda",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#ccd6f6" }}>Muhammed Shariq</div>
          <div style={{ fontSize: 32, color: "#64ffda" }}>
            Freelance Cloud, DevOps &amp; SRE Consultant
          </div>
          <div style={{ fontSize: 24, color: "#8892b0" }}>
            Azure · AWS · GCP · Kubernetes · Docker · WSO2 API Integration
          </div>
          <div style={{ fontSize: 22, color: "#8892b0" }}>
            Dubai, UAE · GCC · Worldwide (Remote)
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
