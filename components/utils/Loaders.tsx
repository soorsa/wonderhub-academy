"use client";

interface PageLoaderProps {
  text?: string;
}

export function PageLoader({
  text = "Loading your store...",
}: PageLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/60 backdrop-blur-xs">
      <div className="flex flex-col">
        {/* Loading Text & Dots */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="size-4 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <span className="size-4 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
            <span className="size-4 rounded-full bg-primary animate-bounce" />
          </div>
          <p className="text-sm font-semibold tracking-wide text-foreground animate-pulse">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
