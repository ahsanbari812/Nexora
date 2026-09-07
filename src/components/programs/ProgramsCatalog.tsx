"use client";

import React, { useState, useMemo } from "react";
import { Search, X, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CATALOG_PROGRAMS, CatalogProgram } from "@/data/catalog";
import { ProgramCatalogCard } from "@/components/programs/ProgramCatalogCard";
import { SectionContainer } from "@/components/ui/SectionContainer";

type AudienceFilter = "all" | "students" | "educators" | "corporate" | "institutions";
type FormatFilter = "all" | "workshops" | "bootcamps" | "corporate" | "custom";

interface FilterTab {
  id: AudienceFilter;
  label: string;
}

interface FormatChip {
  id: FormatFilter;
  label: string;
}

const AUDIENCE_TABS: FilterTab[] = [
  { id: "all", label: "All Programs" },
  { id: "students", label: "Students" },
  { id: "educators", label: "Educators" },
  { id: "corporate", label: "Corporate Teams" },
  { id: "institutions", label: "Institutions" },
];

const FORMAT_CHIPS: FormatChip[] = [
  { id: "all", label: "All Formats" },
  { id: "workshops", label: "Workshops" },
  { id: "bootcamps", label: "Bootcamps" },
  { id: "corporate", label: "Corporate Programs" },
  { id: "custom", label: "Custom Programs" },
];

export function ProgramsCatalog() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceFilter>("all");
  const [selectedFormat, setSelectedFormat] = useState<FormatFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Compute counts for audience categories
  const audienceCounts = useMemo(() => {
    const counts: Record<AudienceFilter, number> = {
      all: CATALOG_PROGRAMS.length,
      students: 0,
      educators: 0,
      corporate: 0,
      institutions: 0,
    };

    CATALOG_PROGRAMS.forEach((prog) => {
      if (prog.audienceId in counts) {
        counts[prog.audienceId as AudienceFilter]++;
      }
    });

    return counts;
  }, []);

  // Filtered program set
  const filteredPrograms = useMemo(() => {
    return CATALOG_PROGRAMS.filter((program: CatalogProgram) => {
      // 1. Audience Filter
      if (selectedAudience !== "all" && program.audienceId !== selectedAudience) {
        return false;
      }

      // 2. Format Filter
      if (selectedFormat !== "all" && program.formatId !== selectedFormat) {
        return false;
      }

      // 3. Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = program.title.toLowerCase().includes(query);
        const matchesDescription = program.description.toLowerCase().includes(query);
        const matchesDeliverable = program.deliverable.toLowerCase().includes(query);
        const matchesTarget = program.targetAudience.toLowerCase().includes(query);
        const matchesTopics = program.keyTopics.some((topic) =>
          topic.toLowerCase().includes(query)
        );

        if (!matchesTitle && !matchesDescription && !matchesDeliverable && !matchesTarget && !matchesTopics) {
          return false;
        }
      }

      return true;
    });
  }, [selectedAudience, selectedFormat, searchQuery]);

  const hasActiveFilters = selectedAudience !== "all" || selectedFormat !== "all" || searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSelectedAudience("all");
    setSelectedFormat("all");
    setSearchQuery("");
  };

  return (
    <div className="pb-16 md:pb-24 pt-8 bg-white">
      <SectionContainer>
        {/* Controls Container */}
        <div className="space-y-6 mb-10">
          {/* Top Row: Segmented Audience Filter Tabs */}
          <div className="border-b border-[#E2E8F0] pb-5 overflow-x-auto no-scrollbar">
            <div className="inline-flex border border-[#E2E8F0] rounded-[2px] bg-white gap-0 min-w-max sm:min-w-0 shadow-xs">
              {AUDIENCE_TABS.map((tab) => {
                const isActive = selectedAudience === tab.id;
                const count = audienceCounts[tab.id];

                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedAudience(tab.id)}
                    className={`px-4 py-2.5 text-xs sm:text-sm font-mono transition-colors whitespace-nowrap flex items-center gap-2 border-r last:border-r-0 border-[#E2E8F0] cursor-pointer ${
                      isActive
                        ? "bg-[#071A2D] text-white font-bold"
                        : "text-[#475569] hover:text-[#071A2D] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.2 text-[10px] font-mono ${
                        isActive
                          ? "bg-[#F97316] text-white"
                          : "bg-[#F1F5F9] text-[#64748B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Second Row: Format Filters & Search Input */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Format Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] mr-2 font-semibold">
                FORMAT:
              </span>
              {FORMAT_CHIPS.map((chip) => {
                const isFormatActive = selectedFormat === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setSelectedFormat(chip.id)}
                    className={`px-3 py-1 rounded-[2px] text-xs font-mono transition-colors cursor-pointer border ${
                      isFormatActive
                        ? "bg-[#071A2D] text-white border-[#071A2D]"
                        : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#071A2D]"
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, topics, skills..."
                className="w-full min-h-[38px] pl-9 pr-9 py-2 rounded-[2px] bg-white border border-[#CBD5E1] text-xs text-[#071A2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#071A2D]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#071A2D] transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Status & Reset Action */}
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pt-2">
            <div>
              Showing <span className="text-[#071A2D] font-bold">{filteredPrograms.length}</span>{" "}
              {filteredPrograms.length === 1 ? "program" : "programs"}
              {selectedAudience !== "all" && (
                <span>
                  {" "}
                  for <span className="text-[#071A2D] font-semibold">{AUDIENCE_TABS.find((t) => t.id === selectedAudience)?.label}</span>
                </span>
              )}
              {selectedFormat !== "all" && (
                <span>
                  {" "}
                  in <span className="text-[#071A2D] font-semibold">{FORMAT_CHIPS.find((f) => f.id === selectedFormat)?.label}</span>
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#F97316] hover:text-[#EA580C] font-semibold transition-colors cursor-pointer font-mono"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <ProgramCatalogCard program={program} className="w-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="rounded-[3px] p-12 text-center bg-white border border-[#E2E8F0] shadow-xs max-w-lg mx-auto my-8">
            <h3 className="text-xl font-display text-[#071A2D] mb-2">No Matching Programs Found</h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
              We couldn&apos;t find any programs matching your current filter combination. Try clearing your search or explore custom curriculum co-design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-[2px] text-xs font-mono font-semibold bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#071A2D] border border-[#E2E8F0] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
              <Link
                href="/builder"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[2px] text-xs font-mono font-semibold text-white bg-[#071A2D] hover:bg-[#0A2342] transition-colors"
              >
                <span>Custom Training Builder</span>
                <ArrowRight className="w-3 h-3 text-[#F97316]" />
              </Link>
            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  );
}
