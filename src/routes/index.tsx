import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { YoutubeSection } from "@/components/portfolio/YoutubeSection";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { siteBasePath } from "@/lib/site-base";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Saeed — Mid-Level Flutter Developer" },
      {
        name: "description",
        content:
          "Mid-Level Flutter Developer crafting production-grade mobile apps with clean architecture, real-time systems, and AI-powered experiences.",
      },
      { property: "og:title", content: "Mohammed Saeed — Mid-Level Flutter Developer" },
      {
        property: "og:description",
        content: "Building scalable mobile experiences with Flutter & modern engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteBasePath },
    ],
    links: [{ rel: "canonical", href: siteBasePath }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <YoutubeSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
