import Image from "next/image";

const TOOL_LOGOS = [
  { src: "/media/tool-logos/adobe-creative-cloud.webp", name: "Adobe Creative Cloud", showName: true },
  { src: "/media/tool-logos/premiere-pro.webp", name: "Premiere Pro", showName: true },
  { src: "/media/tool-logos/capcut.webp", name: "CapCut" },
  { src: "/media/tool-logos/photoshop.webp", name: "Photoshop", showName: true },
  { src: "/media/tool-logos/canva.webp", name: "Canva" },
  { src: "/media/tool-logos/higgsfield.webp", name: "Higgsfield", tone: "light" },
  { src: "/media/tool-logos/runway-ai.webp", name: "Runway AI", tone: "light" },
  { src: "/media/tool-logos/nano-banana.webp", name: "Nano Banana" },
  { src: "/media/tool-logos/midjourney.webp", name: "Midjourney", tone: "light" },
  { src: "/media/tool-logos/chatgpt.webp", name: "ChatGPT", tone: "light" },
  { src: "/media/tool-logos/veo.webp", name: "Veo" },
  { src: "/media/tool-logos/seedance.webp", name: "Seedance" },
  { src: "/media/tool-logos/kling-3.webp", name: "Kling 3.0" },
  { src: "/media/tool-logos/higgsfield-mcp.webp", name: "Higgsfield MCP", showName: true },
  { src: "/media/tool-logos/figma-weave.webp", name: "Figma Weave", tone: "light" },
  { src: "/media/tool-logos/elevenlabs.webp", name: "ElevenLabs" },
  { src: "/media/tool-logos/heygen.webp", name: "HeyGen" },
  { src: "/media/tool-logos/openclaw.webp", name: "OpenClaw" },
  { src: "/media/tool-logos/hermes.webp", name: "Hermes", tone: "light", showName: true },
  { src: "/media/tool-logos/claude.webp", name: "Claude" },
  { src: "/media/tool-logos/hubspot.webp", name: "HubSpot" },
  { src: "/media/tool-logos/google-analytics.webp", name: "Google Analytics" },
] as const;

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="tool-logo-set" aria-hidden={duplicate || undefined}>
      {TOOL_LOGOS.map((tool) => (
        <div
          className={`tool-logo${"tone" in tool ? ` tool-logo-${tool.tone}` : ""}`}
          key={`${duplicate ? "copy-" : ""}${tool.name}`}
          role={duplicate ? undefined : "img"}
          aria-label={duplicate ? undefined : tool.name}
        >
          <span className="tool-logo-mark" aria-hidden="true">
            <Image
              src={tool.src}
              alt=""
              width={192}
              height={96}
              sizes="84px"
              loading="eager"
              unoptimized
            />
          </span>
          {"showName" in tool && tool.showName ? (
            <span className="tool-logo-name" aria-hidden="true">{tool.name}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ToolLogoRail() {
  return (
    <aside className="tool-logo-rail" aria-label="Creative and marketing tools">
      <div className="tool-logo-rail-fade tool-logo-rail-fade-top" />
      <div className="tool-logo-track">
        <LogoSet />
        <LogoSet duplicate />
      </div>
      <div className="tool-logo-rail-fade tool-logo-rail-fade-bottom" />
    </aside>
  );
}
