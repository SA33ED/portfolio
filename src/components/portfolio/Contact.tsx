import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const links = [
  { Icon: Github, label: "GitHub", value: "github.com/mohammedsaeed", href: "https://github.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mohammedsaeed", href: "https://linkedin.com" },
  { Icon: Mail, label: "Email", value: "hello@mohammed.dev", href: "mailto:hello@mohammed.dev" },
  { Icon: MessageCircle, label: "WhatsApp", value: "Available on request", href: "#" },
  { Icon: MapPin, label: "Location", value: "Remote · MENA", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient">remarkable</span>.</>}
          description="Have a product in mind, or a mid-level Flutter role to fill? Let's talk."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-strong rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <h3 className="text-xl font-semibold">Reach me directly</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick the channel that works for you — I usually reply within 24 hours.
            </p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <motion.li key={l.label} whileHover={{ x: 4 }}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 glass rounded-xl p-3 hover:bg-white/10 transition"
                  >
                    <span className="h-9 w-9 rounded-lg bg-gradient-primary/20 flex items-center justify-center text-primary">
                      <l.Icon size={16} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{l.label}</div>
                      <div className="text-sm font-medium truncate">{l.value}</div>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" placeholder="Mid-level Flutter role / Project inquiry" />
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project, timeline and goals…"
                className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/40 px-4 py-3 text-sm transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all hover:-translate-y-0.5"
            >
              <Send size={16} />
              {sent ? "Sent — talk soon!" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground mb-1.5">{label}</label>
      <input
        required
        {...props}
        className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/40 px-4 py-3 text-sm transition"
      />
    </div>
  );
}
