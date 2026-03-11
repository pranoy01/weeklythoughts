// Template B — "The Bold Feed"
// White bg, Syne chunky headings, orange accent, post-card style blocks

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
    tag: "news",
    label: "Today's Headlines",
    title: "The Day Job",
    description: "The Federal Reserve cut interest rates again, trying to keep the job market from turning ugly.",
    accent: "#f97316",
  },
  {
    tag: "thoughts",
    label: "What I'm Thinking",
    title: "Change is the only constant",
    description: "Why embracing uncertainty might be the most valuable skill you can develop right now.",
    accent: "#8b5cf6",
  },
  {
    tag: "picks",
    label: "Rocky's Picks",
    title: "Can Shaq Really Save Reebok?",
    description: "A documentary deep dive into sneaker culture, brand identity, and what happens when celebrities bet on legacy.",
    accent: "#10b981",
  },
  {
    tag: "extra",
    label: "One More Thing",
    title: "Worth your time",
    description: "A podcast episode that made me rethink productivity. Sometimes doing less is actually doing more.",
    accent: "#ef4444",
  },
]

export default function TemplateB() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#ffffff", color: "#111" }} className="min-h-screen">

      {/* Header */}
      <header className="py-16" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div style={{ display: "inline-block", background: "#f97316", color: "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "4px", marginBottom: "1rem" }}>
            Week 42 — Mar 15, 2024
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Thoughts on<br />this week.
          </p>
          <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.7, color: "#666" }}>
            Hey 👋 Every week I share 4 things worth thinking about. No spam. Just the good stuff.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#f0f0f0", border: "1px solid #f0f0f0", borderRadius: "16px", overflow: "hidden" }}>
          {blocks.map((block) => (
            <div key={block.tag} style={{ background: "#fff", padding: "2rem" }}>
              {/* Tag */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "1rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: block.accent, display: "inline-block" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999" }}>{block.label}</span>
              </div>

              {/* Media placeholder */}
              <div style={{ background: "#fafafa", border: `2px dashed ${block.accent}40`, borderRadius: "10px", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#bbb" }}>image · gif · video</span>
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{block.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#555" }}>{block.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #f0f0f0", marginTop: "2rem" }} className="py-10">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em" }}>Weekly Thoughts</span>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://x.com/notpranoy" target="_blank" rel="noopener noreferrer" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity"><XLogo size={18} /></a>
            <a href="https://www.linkedin.com/in/pranoy-patra-6375bb155/" target="_blank" rel="noopener noreferrer" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity"><Linkedin size={18} strokeWidth={1.5} /></a>
            <a href="mailto:patrapranoy1@gmail.com" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity"><Mail size={18} strokeWidth={1.5} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
