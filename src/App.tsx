import { Mail, Linkedin, ImageIcon } from "lucide-react"

function XLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ─── Edit your weekly content here ───────────────────────────────────────────
const week = {
  number: 42,
  date: "Mar 15, 2024",
}

const blocks = [
  {
    title: "The Day Job",
    description:
      "The Federal Reserve cut interest rates again, trying to keep the job market from turning ugly.",
    media: "", // paste image/GIF URL here
  },
  {
    title: "Change is the only constant",
    description:
      "Why embracing uncertainty might be the most valuable skill you can develop right now.",
    media: "", // paste image/GIF URL here
  },
  {
    title: "Can Shaq Really Save Reebok?",
    description:
      "A documentary deep dive into sneaker culture, brand identity, and what happens when celebrities bet on legacy.",
    media: "", // paste image/GIF URL here
  },
  {
    title: "Worth your time",
    description:
      "A podcast episode that made me rethink productivity. Sometimes doing less is actually doing more.",
    media: "", // paste image/GIF URL here
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#ffffff", color: "#111" }}
      className="min-h-screen"
    >
      {/* Header */}
      <header style={{ borderBottom: "1px solid #f0f0f0" }} className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div
            style={{
              display: "inline-block",
              background: "#f97316",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "4px",
              marginBottom: "1.25rem",
            }}
          >
            Week {week.number} — {week.date}
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Thoughts on<br />this week.
          </h1>
          <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.7, color: "#666" }}>
            Hey 👋 Every week I share 4 things worth thinking about. No spam. Just the good stuff.
          </p>
        </div>
      </header>

      {/* Blocks */}
      <main className="max-w-2xl mx-auto px-6 py-14">
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#f0f0f0", border: "1px solid #f0f0f0", borderRadius: "16px", overflow: "hidden" }}>
          {blocks.map((block, i) => (
            <div key={i} style={{ background: "#fff", padding: "2rem" }}>

              {/* Block number */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#f97316",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Media area */}
              {block.media ? (
                <img
                  src={block.media}
                  alt={block.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "1.5rem",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    background: "#fafafa",
                    border: "2px dashed #e8e8e8",
                    borderRadius: "10px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "1.5rem",
                  }}
                >
                  <ImageIcon size={20} color="#ccc" />
                  <span style={{ fontSize: "0.8rem", color: "#ccc" }}>image · gif · video</span>
                </div>
              )}

              {/* Content */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {block.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#555" }}>
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #f0f0f0" }} className="py-10">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em" }}>
            Weekly Thoughts
          </span>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <a href="https://x.com/notpranoy" target="_blank" rel="noopener noreferrer" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity">
              <XLogo size={18} />
            </a>
            <a href="https://www.linkedin.com/in/pranoy-patra-6375bb155/" target="_blank" rel="noopener noreferrer" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="mailto:patrapranoy1@gmail.com" style={{ color: "#999" }} className="hover:opacity-60 transition-opacity">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
