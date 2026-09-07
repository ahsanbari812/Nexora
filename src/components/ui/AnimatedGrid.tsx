import React from "react";
import { cn } from "@/lib/utils";

export interface AnimatedGridProps {
  className?: string;
  patternOpacity?: number;
  glow?: boolean;
  /** Use dark variant for navy background sections */
  dark?: boolean;
}

export function AnimatedGrid({
  className,
  patternOpacity = 0.04,
  glow = true,
  dark = false,
}: AnimatedGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Ambient glowing radial light spots */}
      {glow && (
        <>
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] md:w-[800px] md:h-[450px] rounded-full blur-[140px] opacity-15"
            style={{
              background: dark
                ? "radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(16, 52, 90, 0.3) 60%, transparent 80%)"
                : "radial-gradient(circle, rgba(7, 26, 45, 0.08) 0%, rgba(249, 115, 22, 0.04) 60%, transparent 80%)",
            }}
          />
          <div
            className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
            style={{
              background: dark
                ? "radial-gradient(circle, #F97316 0%, transparent 70%)"
                : "radial-gradient(circle, #071A2D 0%, transparent 70%)",
            }}
          />
        </>
      )}

      {/* SVG Grid Overlay */}
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]"
        style={{ opacity: patternOpacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={dark ? "#FFFFFF" : "#071A2D"}
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
