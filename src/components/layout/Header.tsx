"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MAIN_NAVIGATION, PRIMARY_CTA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md",
        isScrolled
          ? "border-b border-[#E2E8F0] py-3.5 shadow-xs"
          : "border-b border-[#E2E8F0]/80 py-4.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <Image
              src="/Nexora Icon.png"
              alt="Nexora AI Academy"
              width={114}
              height={38}
              className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
            <span className="hidden sm:inline-flex items-center text-[9px] font-mono tracking-widest text-[#64748B] uppercase border-l border-[#CBD5E1] pl-2.5 py-0.5 font-semibold">
              ACADEMY
            </span>
          </Link>

          {/* Desktop Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {MAIN_NAVIGATION.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs xl:text-sm font-medium transition-colors py-1 nav-underline",
                    isActive
                      ? "text-[#071A2D] font-semibold is-active"
                      : "text-[#475569] hover:text-[#071A2D]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={PRIMARY_CTA.href}
              size="sm"
              variant="primary"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <Button
              href={PRIMARY_CTA.href}
              size="sm"
              variant="primary"
              className="text-xs px-3 py-1.5"
            >
              Discuss
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-[3px] bg-white text-[#071A2D] border border-[#CBD5E1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 bg-white border-b border-[#E2E8F0] lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between z-50">
          <div className="flex flex-col space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] px-3 mb-3">
              Index
            </span>
            {MAIN_NAVIGATION.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-3 border-b border-[#F1F5F9] text-sm font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "text-[#071A2D] font-bold"
                      : "text-[#475569] hover:text-[#071A2D]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#F97316]">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="text-xs font-mono text-[#F97316]">Active</span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 mt-8 border-t border-[#E2E8F0] flex flex-col gap-3">
            <Button
              href={PRIMARY_CTA.href}
              size="lg"
              variant="primary"
              fullWidth
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              {PRIMARY_CTA.label}
            </Button>
            <div className="text-center text-[11px] font-mono text-[#64748B] pt-2">
              PRACTICAL AI & TECHNOLOGY TRAINING
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
