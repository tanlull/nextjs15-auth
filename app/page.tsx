import { ThemeToggle } from "@/components/ThemeToggle";
import { Zap, Shield, Palette, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-primary/5 blur-3xl animate-pulse-soft [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-float" />
      </div>

      {/* ── Nav ── */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 animate-fade-in-down">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-md">
            N
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Next<span className="text-primary">Auth</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-32">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm [animation-delay:0.1s]">
          <Zap className="size-3.5 text-primary" />
          Powered by Next.js 15 + React 19
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl [animation-delay:0.2s]">
          Build Secure Apps{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            With Confidence
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl [animation-delay:0.35s]">
          A modern authentication starter kit with everything you need — 
          beautifully crafted with TailwindCSS v4 design tokens, dark mode, 
          and production-ready patterns.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:0.5s]">
          <a
            href="#features"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:shadow-md"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Read Docs
          </a>
        </div>

        {/* ── Feature Cards ── */}
        <section
          id="features"
          className="mt-24 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            icon={<Shield className="size-6 text-primary" />}
            title="Authentication Ready"
            description="Pre-configured auth patterns with sessions, middleware, and protected routes — ready to plug in your favorite provider."
            delay="0.6s"
          />
          <FeatureCard
            icon={<Palette className="size-6 text-primary" />}
            title="Dark Mode Built-in"
            description="Seamless light and dark theme switching with OKLCH color tokens, CSS-first configuration, and zero flash on load."
            delay="0.7s"
          />
          <FeatureCard
            icon={<Zap className="size-6 text-primary" />}
            title="Blazing Fast"
            description="Turbopack-powered dev server, React 19 streaming, and optimized font loading for instant page transitions."
            delay="0.8s"
          />
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-border bg-card/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Next.js 15
            </a>
            ,{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              React 19
            </a>
            , and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              TailwindCSS v4
            </a>
            .
          </p>
          <div className="flex gap-6">
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Learn
            </a>
            <a
              href="https://vercel.com/templates?framework=next.js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Templates
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Feature Card Component ── */
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className="animate-fade-in-up group relative rounded-2xl border border-border bg-card/60 p-8 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
      style={{ animationDelay: delay }}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
