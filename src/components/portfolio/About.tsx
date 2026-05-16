import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Brain, Rocket, Wrench, Youtube } from "lucide-react";

const pillars = [
  { Icon: Brain, title: "Engineering Mindset", text: "Clean architecture, SOLID, scalable state management with Bloc/Cubit." },
  { Icon: Rocket, title: "Product Thinking", text: "I ship features that move metrics — not just code that compiles." },
  { Icon: Wrench, title: "Real-World Experience", text: "Production multi-vendor apps, real-time chat, payments & AI." },
  { Icon: Youtube, title: "Knowledge Sharing", text: "Educating thousands of devs through  HappyTech on YouTube." },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title={<>Mid-level engineering, <span className="text-gradient">product mindset</span>.</>}
          description="I started Flutter during university and quickly became one of the strongest mobile devs in my circle. Today I architect production-grade apps used by real users — focusing on performance, scalability and beautiful UX."
        />

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <h3 className="text-2xl font-semibold">My Story</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I fell in love with mobile engineering during my CS degree. While classmates were still building tutorials,
              I was shipping real apps — solving messy problems like offline sync, real-time chat, and complex
              multi-role systems.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today I work as a Flutter Developer at <span className="text-foreground font-medium">evyx</span>, owning
              features end-to-end on large-scale products. I obsess over architecture decisions, performance budgets,
              and the small UX details that make apps feel <span className="text-foreground">premium</span>.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beyond client work, I run <span className="text-foreground font-medium"> HappyTech</span> — a YouTube
              channel teaching modern Flutter to a growing community of developers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 hover:glow-ring transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 flex items-center justify-center text-primary">
                  <p.Icon size={20} />
                </div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
