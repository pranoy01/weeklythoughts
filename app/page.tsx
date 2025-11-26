import { Mail, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold mb-6 text-balance">Thoughts on this week</h1>
          <p className="text-lg text-muted-foreground">
            Hey there 👋 Every week, I share thoughts on 4 things worth thinking about. No spam. Just the good stuff.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Week Card */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-blue-500">
            <h2 className="text-3xl font-bold">WEEK 42</h2>
            <span className="text-muted-foreground">Mar 15, 2024</span>
          </div>
          <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-16 mb-12">
            <p className="text-center text-muted-foreground">Add GIF or Image Here</p>
          </div>

          {/* Section: Today's Headlines */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-blue-600">📌</span>
              <h3 className="text-sm font-bold text-blue-600">TODAY'S HEADLINES &gt;</h3>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">The Day Job</h4>
              <p className="text-muted-foreground">
                The Federal Reserve cut interest rates again, trying to keep the job market from turning ugly.
              </p>
            </div>
          </div>

          {/* Section: What I'm Thinking */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-blue-600">📌</span>
              <h3 className="text-sm font-bold text-blue-600">WHAT I'M THINKING &gt;</h3>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Change is the only constant</h4>
              <p className="text-muted-foreground">
                Why embracing uncertainty might be the most valuable skill you can develop right now.
              </p>
            </div>
          </div>

          {/* Section: Rocky's Picks */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-blue-600">📌</span>
              <h3 className="text-sm font-bold text-blue-600">ROCKY'S PICKS &gt;</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground mt-0.5">→</span>
                <p className="text-foreground">
                  Can Shaq Really save Reebok? - Documentary deep dive into sneaker culture
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground mt-0.5">→</span>
                <p className="text-foreground">
                  Lego's best kept secret - How QR codes are changing the retail experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground mt-0.5">→</span>
                <p className="text-foreground">The power of simple tools - Why constraint breeds creativity</p>
              </div>
            </div>
          </div>

          {/* Section: One More Thing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-blue-600">📌</span>
              <h3 className="text-sm font-bold text-blue-600">ONE MORE THING &gt;</h3>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Worth your time</h4>
              <p className="text-muted-foreground">
                A podcast episode that made me rethink productivity. Sometimes doing less is actually doing more.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Archive
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold text-lg mb-6">Connect</h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
