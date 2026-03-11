// Template C — "The Clean Letter"
// Off-white bg, Inter, soft green accent, airy spacing, emoji-free

import { Mail, Linkedin } from "lucide-react"

function XLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const blocks = [
  {
    label: "Today's Headlines",
    title: "The Day Job",
    description: "The Federal Reserve cut interest rates again, trying to keep the job market from turning ugly.",
  },
  {
    label: "What I'm Thinking",
    title: "Change is the only constant",
    description: "Why embracing uncertainty might be the most valuable skill you can develop right now.",
  },
  {
    label: "Rocky's Picks",
    title: "Can Shaq Really Save Reebok?",
    description: "A documentary deep dive into sneaker culture, brand identity, and what happens when celebrities bet on legacy.",
  },
  {
    label: "One More Thing",
    title: "Worth your time",
    description: "A podcast episode that made me rethink productivity. Sometimes doing less is actually doing more.",
  },
]

export default function TemplateC() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f5f5f0", color: "#1c1c1c" }} className="min-h-screen">

      {/* Header */}
      <header className="py-20">
        <div className="max-w-xl mx-auto px-6">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1c1c1c" }}>Weekly Thoughts</span>
            <span style={{ fontSize: "0.8rem", color: "#999", background: "#e8e8e2", padding: "3px 10px", borderRadius: "99px" }}>Week 42</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#1c1c1c" }}>
            Four things<br />worth your time<br /><span style={{ color: "#16a34a", fontWeight: 600 }}>this week.</span>
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", lineHeight: 1.8, color: "#777", maxWidth: "38ch" }}>
            Hey — every week I share 4 things worth thinking about. No spam. Just the good stuff.
          </p>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 pb-16">
        {/* Divider */}
        <div style={{ height: "1px", background: "#ddddd6", marginBottom: "3.5rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {blocks.map((block, i) => (
            <div key={block.label}>
              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#16a34a" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ width: "24px", height: "1px", background: "#ddddd6", display: "inline-block" }} />
                <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa" }}>{block.label}</span>
              </div>

              {/* Media placeholder */}
              <div style={{ background: "#eeeee8", borderRadius: "10px", height: "190px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#bbb", letterSpacing: "0.05em" }}>image · gif · video</span>
              </div>

              <h3 style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 600, lineHeight: 1.25, marginBottom: "0.5rem", letterSpacing: "-0.015em" }}>{block.title}</h3>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#666" }}>{block.description}</p>

              {i < blocks.length - 1 && (
                <div style={{ height: "1px", background: "#ddddd6", marginTop: "3rem" }} />
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ddddd6" }} className="py-10">
        <div className="max-w-xl mx-auto px-6 flex items-center justify-between">
          <span style={{ fontSize: "0.8rem", color: "#aaa" }}>© 2024 Pranoy Patra</span>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://x.com/notpranoy" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }} className="hover:opacity-60 transition-opacity"><XLogo size={16} /></a>
            <a href="https://www.linkedin.com/in/pranoy-patra-6375bb155/" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }} className="hover:opacity-60 transition-opacity"><Linkedin size={16} strokeWidth={1.5} /></a>
            <a href="mailto:patrapranoy1@gmail.com" style={{ color: "#aaa" }} className="hover:opacity-60 transition-opacity"><Mail size={16} strokeWidth={1.5} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
