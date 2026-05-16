import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    quote:
      "Mohammed delivered our multi-vendor app with the kind of architecture I'd expect from mid-level engineers at far bigger companies. Calm, precise, and product-minded.",
    name: "Ahmed K.",
    role: "CTO, evyx",
  },
  {
    quote:
      "He doesn't just code — he thinks about the user, the architecture, and the long term. Our app feels twice as fast since he refactored it.",
    name: "Sarah M.",
    role: "Product Manager",
  },
  {
    quote:
      "His Flutter videos are the reason I finally understood Bloc. He explains things the way a mid-level dev wishes someone had explained to them.",
    name: "Yusuf A.",
    role: "Flutter Developer",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What teams say about <span className="text-gradient">working with me</span>.</>}
        />

        <div className="relative">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <Quote className="text-primary opacity-50" size={36} />
            <p className="mt-6 text-xl md:text-2xl leading-relaxed">{items[i].quote}</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                {items[i].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{items[i].name}</div>
                <div className="text-sm text-muted-foreground">{items[i].role}</div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
