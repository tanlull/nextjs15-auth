import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ className, type, error, ref, ...props }: InputProps & { ref?: React.Ref<HTMLInputElement> }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${props.id}-error`}
          className="mt-1.5 text-xs text-destructive text-left"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
