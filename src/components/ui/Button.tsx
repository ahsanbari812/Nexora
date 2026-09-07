import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      fullWidth,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-medium rounded-[4px] transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-tight";

    const variantStyles = {
      primary:
        "bg-[#F97316] text-white hover:bg-[#EA580C] border border-transparent active:scale-[0.99]",
      secondary:
        "bg-[#071A2D] text-white border border-[#10345A] hover:bg-[#0A2342] hover:border-[#CBD5E1] active:scale-[0.99]",
      outline:
        "bg-transparent text-[#071A2D] border border-[#CBD5E1] hover:border-[#071A2D] hover:bg-[#F8FAFC] active:scale-[0.99]",
      "dark-outline":
        "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/[0.04] active:scale-[0.99]",
      ghost:
        "bg-transparent text-[#475569] hover:text-[#071A2D] hover:bg-[#F1F5F9] active:scale-[0.99]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 min-h-[38px] sm:min-h-[36px] gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 min-h-[44px] gap-2 font-medium",
      lg: "text-sm sm:text-base px-6 py-3.5 min-h-[48px] gap-2.5 font-medium",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const renderIcons = (
      <>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {renderIcons}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {renderIcons}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {renderIcons}
      </button>
    );
  }
);

Button.displayName = "Button";
