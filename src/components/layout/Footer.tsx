import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BRAND_INFO, FOOTER_NAV_GROUPS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="w-full bg-[#050F1C] border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Info Column (spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
                <div className="w-8 h-8 rounded-[4px] p-0.5 bg-white/[0.04] border border-white/10 group-hover:border-[#F97316]/60 transition-colors flex items-center justify-center">
                  <Image
                    src="/Nexora logo.png"
                    alt="Nexora AI Academy"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold tracking-wider text-sm text-white">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#94A3B8] uppercase">
                    AI ACADEMY
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm mb-6">
                {BRAND_INFO.description}
              </p>

              <div className="p-4 rounded-[4px] bg-white/[0.03] border border-white/[0.08] max-w-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] font-semibold block mb-1">
                  Institutional Mission
                </span>
                <p className="text-xs text-[#CBD5E1] font-display italic leading-relaxed">
                  &ldquo;{BRAND_INFO.tagline}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#94A3B8] font-mono">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="hover:text-white transition-colors"
              >
                {BRAND_INFO.email}
              </a>
            </div>
          </div>

          {/* Navigation Groups (4 columns) */}
          {FOOTER_NAV_GROUPS.map((group, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-white mb-4 font-semibold">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#94A3B8] hover:text-white transition-colors group"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#64748B] group-hover:text-[#F97316] transition-colors" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xs text-[#94A3B8] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>{BRAND_INFO.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#CBD5E1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#CBD5E1] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#CBD5E1] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
