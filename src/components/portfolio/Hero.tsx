import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Code2, Sparkles, Layers, Github, FileText, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteBasePath } from "@/lib/site-base";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "12+", label: "Apps Published" },
  { value: "10+", label: "Happy Clients" },
];

const floatingIcons = [
  { Icon: Smartphone, x: "8%", y: "20%", delay: 0 },
  { Icon: Code2, x: "88%", y: "28%", delay: 0.4 },
  { Icon: Layers, x: "12%", y: "75%", delay: 0.8 },
  { Icon: Sparkles, x: "85%", y: "70%", delay: 1.2 },
  // { Icon: Zap, x: "50%", y: "12%", delay: 1.6 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setPos({ x: (e.clientX - r.left - r.width / 2) / 30, y: (e.clientY - r.top - r.height / 2) / 30 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-primary opacity-20 blur-[120px] -z-10 animate-glow-pulse" /> */}

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute glass rounded-2xl p-3 hidden md:block"
          style={{ left: x, top: y, transform: `translate(${pos.x}px, ${pos.y}px)` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.6, type: "spring" }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay }}>
            <Icon className="text-primary" size={22} />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Mid-level Flutter / Mobile roles
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-center text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tight leading-[1.05]"
        >
          Building <span className="text-gradient animate-gradient">scalable</span>
          <br />
          mobile experiences
          <br />
          with <span className="text-gradient animate-gradient">Flutter</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          I'm <span className="text-foreground font-medium">Mohammed Saeed</span> — a Mid-level Flutter Developer crafting
          production-grade apps with clean architecture, real-time systems, and AI-powered experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all hover:-translate-y-0.5"
          >
            <Eye size={16} className="group-hover:translate-x-1 transition-transform" />
            View Projects
          </a>
          <a
            href={`${siteBasePath}Mohammed_Saeed_Flutter.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Resume
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 text-center group hover:glow-ring transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 hidden md:inline-flex mx-auto items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Github size={14} /> Open source contributor • 100+ commits this year
        </motion.a>
      </div>
    </section>
  );
}
