// Template A — "The Good Zine"
// Warm cream bg, Fraunces serif headings, amber accent, numbered blocks

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
    num: "01",
    label: "Today's Headlines",
    title: "The Day Job",
    description: "The Federal Reserve cut interest rates again, trying to keep the job market from turning ugly.",
  },
  {
    num: "02",
    label: "What I'm Thinking",
    title: "Change is the only constant",
    description: "Why embracing uncertainty might be the most valuable skill you can develop right now.",
  },
  {
    num: "03",
    label: "Rocky's Picks",
    title: "Can Shaq Really Save Reebok?",
    description: "A documentary deep dive into sneaker culture, brand identity, and what happens when celebrities bet on legacy.",
  },
  {
    num: "04",
    label: "One More Thing",
    title: "Worth your time",
    description: "A podcast episode that made me rethink productivity. Sometimes doing less is actually doing more.",
  },
]

export default function TemplateA() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#faf8f4", color: "#1a1a1a" }} className="min-h-screen">

      {/* Header */}
      <header style={{ borderBottom: "1px solid #e8e4dc" }} className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, color: "#1a1a1a" }}>
            Thoughts on<br /><em style={{ color: "#d97706" }}>this week</em>
          </p>
          <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.7, color: "#6b6560" }}>
            Hey 👋 Every week I share 4 things worth thinking about. No spam. Just the good stuff.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">

        {/* Week tag */}
        <div className="flex items-center justify-between mb-12">
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700 }}>Week 42</span>
          <span style={{ fontSize: "0.85rem", color: "#9b9390" }}>Mar 15, 2024</span>
        </div>

        {/* Blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {blocks.map((block) => (
            <div key={block.num}>
              {/* Label row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 800, color: "#f59e0b", lineHeight: 1 }}>{block.num}</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9b9390" }}>{block.label}</span>
              </div>

              {/* Media placeholder */}
              <div style={{ background: "#f0ede6", border: "2px dashed #ddd8cf", borderRadius: "12px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.85rem", color: "#b8b2a8" }}>image · gif · video</span>
              </div>

              {/* Content */}
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.5rem" }}>{block.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#5c5854" }}>{block.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e8e4dc", marginTop: "4rem" }} className="py-10">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1rem" }}>Weekly Thoughts</span>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://x.com/notpranoy" target="_blank" rel="noopener noreferrer" style={{ color: "#6b6560" }} className="hover:opacity-60 transition-opacity"><XLogo size={18} /></a>
            <a href="https://www.linkedin.com/in/pranoy-patra-6375bb155/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b6560" }} className="hover:opacity-60 transition-opacity"><Linkedin size={18} strokeWidth={1.5} /></a>
            <a href="mailto:patrapranoy1@gmail.com" style={{ color: "#6b6560" }} className="hover:opacity-60 transition-opacity"><Mail size={18} strokeWidth={1.5} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
