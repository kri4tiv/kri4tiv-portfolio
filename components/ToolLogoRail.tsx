const TOOL_LOGOS = [
  { mark: "CC", name: "Adobe Creative Cloud", style: "compact" },
  { mark: "Pr", name: "Adobe Premiere Pro", style: "app" },
  { mark: "CAPCUT", name: "CapCut", style: "wide" },
  { mark: "Ps", name: "Adobe Photoshop", style: "app" },
  { mark: "Canva", name: "Canva", style: "script" },
  { mark: "HIGGSFIELD", name: "Higgsfield", style: "wide" },
  { mark: "RUNWAY", name: "Runway AI", style: "wide" },
  { mark: "NB", name: "Nano Banana", style: "compact" },
  { mark: "MJ", name: "Midjourney", style: "compact" },
  { mark: "CHATGPT", name: "ChatGPT", style: "wide" },
  { mark: "VEO", name: "Google Veo", style: "wide" },
  { mark: "SEEDANCE", name: "Seedance", style: "wide" },
  { mark: "KLING 3.0", name: "Kling 3.0", style: "wide" },
  { mark: "HIGGSFIELD MCP", name: "Higgsfield MCP", style: "wide small" },
  { mark: "WEAVE", name: "Figma Weave", style: "wide" },
  { mark: "ELEVENLABS", name: "ElevenLabs", style: "wide small" },
  { mark: "HEYGEN", name: "HeyGen", style: "wide" },
  { mark: "OPENCLAW", name: "OpenClaw", style: "wide small" },
  { mark: "HERMES", name: "Hermes", style: "wide" },
  { mark: "Claude", name: "Claude", style: "serif" },
  { mark: "HUBSPOT", name: "HubSpot", style: "wide" },
  { mark: "GA", name: "Google Analytics", style: "compact" },
] as const;

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="tool-logo-set" aria-hidden={duplicate || undefined}>
      {TOOL_LOGOS.map((tool) => (
        <div
          className={`tool-logo tool-logo-${tool.style.replace(" ", "-")}`}
          key={`${duplicate ? "copy-" : ""}${tool.name}`}
          title={tool.name}
          role={duplicate ? undefined : "img"}
          aria-label={duplicate ? undefined : tool.name}
        >
          <span aria-hidden="true">{tool.mark}</span>
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
