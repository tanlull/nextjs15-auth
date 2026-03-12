"use client";

import { LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2 h-9"
      onClick={handleSignOut}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <LogOut className="size-4" />
      )}
      Sign Out
    </Button>
  );
}
