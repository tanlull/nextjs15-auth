import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LogOut, User as UserIcon, Shield } from "lucide-react";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/app/SignOutButton";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const { user } = session;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-primary/5 blur-3xl animate-pulse-soft [animation-delay:1.5s]" />
      </div>

      {/* ── Nav ── */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 border-b border-border/40">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-md">
            N
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Next<span className="text-primary">Auth</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignOutButton />
        </div>
      </header>

      {/* ── Dashboard ── */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-12">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome back, {user.name}!
          </h1>
          <p className="mt-2 text-muted-foreground">
            You are successfully authenticated and viewing a protected route.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Profile Card */}
          <div className="animate-fade-in-up rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm [animation-delay:0.1s]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <UserIcon className="size-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Your Profile
              </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Name
                </p>
                <p className="font-medium text-foreground">{user.name}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
                <p className="font-medium text-foreground">{user.email}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  User ID
                </p>
                <p className="font-mono text-xs text-foreground bg-accent/50 p-1.5 rounded-md break-all">
                  {user.id}
                </p>
              </div>
            </div>
          </div>

          {/* Session Card */}
          <div className="animate-fade-in-up rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm [animation-delay:0.2s]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="size-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Session Active
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-medium text-foreground">
                  Secure connection verified
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                This page is protected by Better Auth server-side rendering and Next.js middleware.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
