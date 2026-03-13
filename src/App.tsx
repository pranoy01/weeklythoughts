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
  number: 1,
  date: "Mar 12, 2026",
}

const blocks = [
  {
    title: "Is Fascism Back?",
    description:
      "Johnny Harris digs into whether the global political shifts we're seeing today rhyme with the 1930s. Uncomfortable watch. Important one.",
    media: "https://img.youtube.com/vi/GV8KGcFqeLc/maxresdefault.jpg",
    link: "https://youtu.be/GV8KGcFqeLc",
    linkLabel: "Watch",
  },
  {
    title: "The US didn't lose to China on oil. It handed them the win.",
    description:
      "The obvious take is that China outsmarted everyone. The actual take is simpler. Twenty years of American energy policy flip flopping left the US exposed to exactly the kind of shock it helped create. China didn't do anything genius. It just watched the US trip over itself long enough to benefit from it. The Iran war didn't give China an energy advantage. America did.",
    media: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Y4bHFiMzVhOHV3MW9teTF4a2VmNHRyNHB5ZG8ycmZ5b2JtNW9ybiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohc172JJbbmUfVxhS/giphy.gif",
    link: "https://www.latitudemedia.com/news/the-iran-war-doesnt-give-china-an-energy-advantage-the-us-did/",
    linkLabel: "Read",
  },
  {
    title: "The man who said no to $11 billion",
    description:
      "Craig Newmark built Craigslist, got offered $11 billion for it and turned it down. The site still looks exactly like it did in the early 2000s. No redesign, no algorithm, no growth team. Just Craig and a small crew who refused to optimise for money. In a world where every founder is sprinting toward an exit this interview is a genuinely strange watch.",
    media: "https://img.youtube.com/vi/dwsnJ7GywBY/maxresdefault.jpg",
    link: "https://youtu.be/dwsnJ7GywBY?si=TlAOM2EXfe4fLbXs",
    linkLabel: "Watch",
  },
  {
    title: "One guy designed a font for one airport and it took over the world",
    description:
      "Adrian Frutiger was asked to design signage for Charles de Gaulle airport in Paris in the 70s. He made something so readable at a distance that airports everywhere just started copying it. Then hospitals. Then highways. It wasn't licensed or pushed by some big company. People just kept borrowing it because nothing else worked as well. The whole thing is a masterclass in what good design actually means.",
    media: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJ1eGQ5NWlyOWhsOXBtazc1eGRhdGZmaXVhNXRyOG16YWhoaG4waSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ji6zzUZwNIuLS/giphy.gif",
    link: "https://medium.com/@ps9058/frutiger-typeface-navigating-the-world-of-legible-design-d0fef05694cf",
    linkLabel: "Read",
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
              <div
                style={{
                  width: "100%",
                  height: "340px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  background: "#fafafa",
                  border: block.media ? "none" : "2px dashed #e8e8e8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {block.media ? (
                  <img
                    src={block.media}
                    alt={block.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <>
                    <ImageIcon size={20} color="#ccc" />
                    <span style={{ fontSize: "0.8rem", color: "#ccc" }}>image · gif · video</span>
                  </>
                )}
              </div>

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
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#555", marginBottom: "1.25rem" }}>
                {block.description}
              </p>
              {block.link && block.link !== "#" && (
                <a
                  href={block.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    fontFamily: "'Syne', sans-serif",
                    color: "#f97316",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                >
                  {block.linkLabel} →
                </a>
              )}
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
