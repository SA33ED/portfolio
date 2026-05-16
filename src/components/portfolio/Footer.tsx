import { ArrowUp, Github, Linkedin, Mail, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#hero" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-gradient-primary text-primary-foreground font-bold flex items-center justify-center shadow-glow">
                M
              </span>
              <span className="font-semibold">Mohammed Saeed</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Mid-level Flutter Developer building scalable mobile experiences and sharing the craft with the community.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Experience", "Projects", "YouTube", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Elsewhere</h4>
            <div className="mt-4 flex gap-2">
              {[Github, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 hover:-translate-y-0.5 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="#hero"
              className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition"
            >
              <ArrowUp size={12} /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohammed Saeed. Crafted with Flutter-grade attention to detail.</p>
          <p>Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
