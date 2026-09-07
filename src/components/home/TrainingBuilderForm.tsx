"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import {
  BuilderAudience,
  BuilderObjective,
  BuilderCohortSize,
  BuilderFormat,
  TrainingBuilderData,
} from "@/types/builder";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const AUDIENCE_OPTIONS: { id: BuilderAudience; num: string; title: string; desc: string }[] = [
  {
    id: "Students",
    num: "01",
    title: "Students",
    desc: "Academic research, project building & prompt engineering skills.",
  },
  {
    id: "Educators",
    num: "02",
    title: "Educators",
    desc: "Curriculum modernizing, AI lesson planning & responsible assessment.",
  },
  {
    id: "Corporate Team",
    num: "03",
    title: "Corporate Team",
    desc: "Departmental productivity, task automation & daily AI adoption.",
  },
  {
    id: "Institution",
    num: "04",
    title: "Institution",
    desc: "Multi-cohort faculty upskilling, university programs & policy frameworks.",
  },
];

const OBJECTIVE_OPTIONS: { id: BuilderObjective; num: string; title: string; desc: string }[] = [
  {
    id: "AI Awareness",
    num: "01",
    title: "AI Awareness",
    desc: "Demystify foundations, terminology, and realistic capabilities.",
  },
  {
    id: "AI Productivity",
    num: "02",
    title: "AI Productivity",
    desc: "Speed up writing, research, and synthesis by 3x–5x.",
  },
  {
    id: "AI Tools",
    num: "03",
    title: "AI Tools",
    desc: "Hands-on mastery of frontier models and specialized assistants.",
  },
  {
    id: "Prompt Engineering",
    num: "04",
    title: "Prompt Engineering",
    desc: "Multi-step reasoning chains, structured outputs & framing.",
  },
  {
    id: "Workflow Automation",
    num: "05",
    title: "Workflow Automation",
    desc: "Connecting AI to tools, document batches, and agentic loops.",
  },
  {
    id: "Building with AI",
    num: "06",
    title: "Building with AI",
    desc: "Creating custom internal GPTs, knowledge bots, and prototypes.",
  },
];

const COHORT_OPTIONS: { id: BuilderCohortSize; label: string; desc: string }[] = [
  { id: "1–20", label: "1–20 People", desc: "Small team or focused pilot cohort" },
  { id: "20–50", label: "20–50 People", desc: "Department or multi-class group" },
  { id: "50–200", label: "50–200 People", desc: "Large division or academic cohort" },
  { id: "200+", label: "200+ People", desc: "Enterprise-wide or institution rollout" },
];

const FORMAT_OPTIONS: { id: BuilderFormat; num: string; title: string; desc: string }[] = [
  {
    id: "Workshop",
    num: "01",
    title: "Workshop",
    desc: "Short, focused half-day or 1–2 day intensive sessions.",
  },
  {
    id: "Bootcamp",
    num: "02",
    title: "Bootcamp",
    desc: "Structured multi-week intensive cohort with capstone projects.",
  },
  {
    id: "Corporate Program",
    num: "03",
    title: "Corporate Program",
    desc: "Tailored to organizational workflows and internal data security.",
  },
  {
    id: "Custom Program",
    num: "04",
    title: "Custom Program",
    desc: "Bespoke co-designed curriculum around institutional objectives.",
  },
];

const INITIAL_DATA: TrainingBuilderData = {
  audience: "",
  objectives: [],
  cohortSize: "",
  format: "",
  contact: {
    name: "",
    organization: "",
    email: "",
    phone: "",
    additionalRequirements: "",
  },
};

export function TrainingBuilderForm() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<TrainingBuilderData>(INITIAL_DATA);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Toggle objective selection for Step 2
  const toggleObjective = (obj: BuilderObjective) => {
    setData((prev) => {
      const exists = prev.objectives.includes(obj);
      return {
        ...prev,
        objectives: exists
          ? prev.objectives.filter((item) => item !== obj)
          : [...prev.objectives, obj],
      };
    });
    setErrorMsg("");
  };

  // Step Validation
  const validateCurrentStep = (): boolean => {
    setErrorMsg("");

    if (step === 1) {
      if (!data.audience) {
        setErrorMsg("Please select who the training is for to continue.");
        return false;
      }
    } else if (step === 2) {
      if (data.objectives.length === 0) {
        setErrorMsg("Please select at least one learning objective.");
        return false;
      }
    } else if (step === 3) {
      if (!data.cohortSize) {
        setErrorMsg("Please select the expected number of participants.");
        return false;
      }
    } else if (step === 4) {
      if (!data.format) {
        setErrorMsg("Please select a preferred training delivery format.");
        return false;
      }
    } else if (step === 5) {
      if (!data.contact.name.trim()) {
        setErrorMsg("Please provide your full name.");
        return false;
      }
      if (!data.contact.organization.trim()) {
        setErrorMsg("Please provide your organization or institution name.");
        return false;
      }
      if (!data.contact.email.trim() || !data.contact.email.includes("@")) {
        setErrorMsg("Please provide a valid work or academic email address.");
        return false;
      }
      if (!data.contact.phone.trim()) {
        setErrorMsg("Please provide your phone or WhatsApp number.");
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((curr) => curr + 1);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep((curr) => Math.max(curr - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setData(INITIAL_DATA);
    setStep(1);
    setIsSubmitted(false);
    setErrorMsg("");
  };

  // Success Confirmation Screen
  if (isSubmitted) {
    return (
      <div className="rounded-[4px] bg-white border border-[#E2E8F0] p-8 sm:p-12 text-center shadow-xs">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F97316] font-bold block mb-2">
          SPECIFICATION // PROPOSAL RECEIVED
        </span>

        <h3 className="text-2xl sm:text-3xl font-display text-[#071A2D] tracking-tight mb-3">
          Your Training Proposal Is Being Assembled
        </h3>

        <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto leading-relaxed mb-8 font-sans">
          Thank you, <strong className="text-[#071A2D]">{data.contact.name}</strong>. A Nexora curriculum director is reviewing your requirements for{" "}
          <strong className="text-[#071A2D]">{data.contact.organization}</strong> and will reach out to{" "}
          <strong className="text-[#071A2D] font-mono">{data.contact.email}</strong> with a detailed syllabus outline within 24 hours.
        </p>

        {/* Selected Program Summary Dossier */}
        <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-[2px] bg-[#F8FAFC] border border-[#E2E8F0] text-left mb-8 space-y-3 font-mono text-xs">
          <div className="text-[11px] uppercase tracking-widest text-[#64748B] border-b border-[#E2E8F0] pb-2 font-semibold">
            Program Specification Dossier
          </div>

          <div className="flex items-center justify-between py-1 border-b border-[#E2E8F0]">
            <span className="text-[#64748B]">Target Audience:</span>
            <span className="font-bold text-[#071A2D]">{data.audience}</span>
          </div>

          <div className="flex items-start justify-between py-1 border-b border-[#E2E8F0]">
            <span className="text-[#64748B]">Learning Objectives:</span>
            <span className="font-bold text-[#F97316] text-right max-w-[60%]">
              {data.objectives.join(" • ")}
            </span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-[#E2E8F0]">
            <span className="text-[#64748B]">Cohort Size:</span>
            <span className="font-bold text-[#071A2D]">{data.cohortSize}</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-[#64748B]">Preferred Format:</span>
            <span className="font-bold text-[#071A2D]">{data.format}</span>
          </div>
        </div>

        <Button
          onClick={handleReset}
          variant="secondary"
          size="md"
          leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
        >
          Build Another Specification
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-[4px] bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
      {/* Top Step Progress Bar */}
      <div className="mb-8 pb-5 border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between text-xs mb-3 font-mono">
          <span className="uppercase tracking-wider text-[#F97316] font-bold">
            STEP 0{step} OF 05
          </span>
          <span className="text-[#64748B] text-[11px] font-semibold uppercase">
            {step === 1 && "Target Audience"}
            {step === 2 && "Learning Objectives"}
            {step === 3 && "Cohort Size"}
            {step === 4 && "Preferred Format"}
            {step === 5 && "Contact Details"}
          </span>
        </div>

        {/* Precision Progress line */}
        <div className="w-full bg-[#F1F5F9] h-[2px] overflow-hidden">
          <motion.div
            className="h-full bg-[#F97316]"
            initial={false}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </div>

      {/* Validation Error Alert */}
      {errorMsg && (
        <div className="mb-6 p-3 rounded-[2px] bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 font-mono">
          <span className="text-red-500 font-bold">!</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {/* STEP 1: TARGET AUDIENCE */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight">
                Who is the training for?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-normal">
                Select the primary audience category to tailor the curriculum depth and pace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {AUDIENCE_OPTIONS.map((item) => {
                const isSelected = data.audience === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setData({ ...data, audience: item.id });
                      setErrorMsg("");
                    }}
                    className={cn(
                      "p-5 rounded-[2px] border transition-colors cursor-pointer flex flex-col justify-between group",
                      isSelected
                        ? "bg-[#F8FAFC] border-[#071A2D]"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#F97316]">
                        {item.num}
                      </span>
                      <div
                        className={cn(
                          "w-4 h-4 rounded-none flex items-center justify-center border transition-colors",
                          isSelected
                            ? "bg-[#071A2D] border-[#071A2D] text-white"
                            : "border-[#CBD5E1]"
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-display text-[#071A2D] mb-1 font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 2: LEARNING OBJECTIVES */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight">
                  What do you want to achieve?
                </h3>
                <span className="text-[10px] font-mono text-[#F97316] bg-[#F97316]/10 px-2 py-0.5 rounded-[2px] font-semibold uppercase">
                  MULTI-SELECT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-normal">
                Choose all competencies and outcomes relevant to your cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {OBJECTIVE_OPTIONS.map((item) => {
                const isSelected = data.objectives.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleObjective(item.id)}
                    className={cn(
                      "p-4 rounded-[2px] border transition-colors cursor-pointer flex flex-col justify-between group",
                      isSelected
                        ? "bg-[#F8FAFC] border-[#071A2D]"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#F97316]">
                        {item.num}
                      </span>
                      <div
                        className={cn(
                          "w-3.5 h-3.5 rounded-none flex items-center justify-center border transition-colors",
                          isSelected
                            ? "bg-[#071A2D] border-[#071A2D] text-white"
                            : "border-[#CBD5E1]"
                        )}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-sans font-bold text-[#071A2D] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] leading-tight font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 3: COHORT SIZE */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight">
                How many people will participate?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-normal">
                Helps us allocate the right number of curriculum instructors and hands-on lab mentors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {COHORT_OPTIONS.map((item) => {
                const isSelected = data.cohortSize === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setData({ ...data, cohortSize: item.id });
                      setErrorMsg("");
                    }}
                    className={cn(
                      "p-5 rounded-[2px] border transition-colors cursor-pointer flex flex-col items-start justify-between group",
                      isSelected
                        ? "bg-[#F8FAFC] border-[#071A2D]"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                    )}
                  >
                    <span className="text-xl font-mono font-bold text-[#071A2D] mb-2">
                      {item.label}
                    </span>
                    <p className="text-xs text-[#475569] leading-normal font-normal">
                      {item.desc}
                    </p>

                    <div
                      className={cn(
                        "mt-4 w-4 h-4 rounded-none flex items-center justify-center border transition-colors",
                        isSelected
                          ? "bg-[#071A2D] border-[#071A2D] text-white"
                          : "border-[#CBD5E1]"
                      )}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 4: PREFERRED FORMAT */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight">
                Preferred training format:
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-normal">
                Choose the delivery model that matches your team calendar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {FORMAT_OPTIONS.map((item) => {
                const isSelected = data.format === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setData({ ...data, format: item.id });
                      setErrorMsg("");
                    }}
                    className={cn(
                      "p-5 rounded-[2px] border transition-colors cursor-pointer flex flex-col justify-between group",
                      isSelected
                        ? "bg-[#F8FAFC] border-[#071A2D]"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#F97316]">
                        {item.num}
                      </span>
                      <div
                        className={cn(
                          "w-4 h-4 rounded-none flex items-center justify-center border transition-colors",
                          isSelected
                            ? "bg-[#071A2D] border-[#071A2D] text-white"
                            : "border-[#CBD5E1]"
                        )}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-display text-[#071A2D] mb-1 font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 5: CONTACT & PROPOSAL REQUEST */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display text-[#071A2D] tracking-tight">
                Where should we send your training proposal?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-normal">
                Provide your contact details so our curriculum team can generate your customized outline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A2D] mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={data.contact.name}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, name: e.target.value },
                      })
                    }
                    placeholder="Jane Doe"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#071A2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A2D] mb-1.5 font-semibold">
                    Organization / University *
                  </label>
                  <input
                    type="text"
                    required
                    value={data.contact.organization}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: {
                          ...data.contact,
                          organization: e.target.value,
                        },
                      })
                    }
                    placeholder="Acme Global or Horizon University"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#071A2D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A2D] mb-1.5 font-semibold">
                    Work / Academic Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={data.contact.email}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, email: e.target.value },
                      })
                    }
                    placeholder="jane@organization.com"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#071A2D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A2D] mb-1.5 font-semibold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={data.contact.phone}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, phone: e.target.value },
                      })
                    }
                    placeholder="+1 (555) 019-2834"
                    className="w-full min-h-[42px] px-3.5 py-2 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#071A2D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#071A2D] mb-1.5 font-semibold">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={data.contact.additionalRequirements}
                  onChange={(e) =>
                    setData({
                      ...data,
                      contact: {
                        ...data.contact,
                        additionalRequirements: e.target.value,
                      },
                    })
                  }
                  placeholder="Tell us about specific workflows, preferred start dates, or custom tool requirements..."
                  className="w-full min-h-[80px] px-3.5 py-2 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#071A2D]"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={handleBack}
                  leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
                >
                  Back to Formats
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting
                    ? "Generating Proposal Request..."
                    : "Request Your Training Proposal"}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Step Navigation Bar (Steps 1 to 4) */}
      {step < 5 && (
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          <div>
            {step > 1 ? (
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={handleBack}
                leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              >
                Back
              </Button>
            ) : (
              <span className="text-xs font-mono text-[#64748B]">STEP 01 OF 05</span>
            )}
          </div>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleNext}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Continue to Step 0{step + 1}
          </Button>
        </div>
      )}
    </div>
  );
}
