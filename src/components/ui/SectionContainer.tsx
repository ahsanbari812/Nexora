import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: "narrow" | "default" | "wide" | "full";
  spacing?: "none" | "sm" | "default" | "lg";
}

export function SectionContainer({
  as: Component = "section",
  size = "default",
  spacing = "default",
  className,
  children,
  ...props
}: SectionContainerProps) {
  const sizeStyles = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-10 md:py-14",
    default: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
