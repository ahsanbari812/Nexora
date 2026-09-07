"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  audience: string;
  trainingNeeds: string;
  message: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>(() => {
    const audienceParam = searchParams.get("audience");
    const programParam = searchParams.get("program");
    const inquiryParam = searchParams.get("inquiry");

    let audience = "corporate";
    let trainingNeeds = "custom-corporate";
    let message = "";

    if (audienceParam) {
      if (audienceParam.includes("educator")) audience = "educators";
      else if (audienceParam.includes("student")) audience = "students";
      else if (audienceParam.includes("institution")) audience = "institutions";
      else if (audienceParam.includes("corporate")) audience = "corporate";
    }

    if (programParam) {
      message = `I am interested in requesting an outline and details for: "${programParam}".\n\nEstimated cohort size / timeline: `;
      if (programParam.toLowerCase().includes("student")) {
        audience = "students";
        trainingNeeds = "student-bootcamp";
      } else if (programParam.toLowerCase().includes("educator") || programParam.toLowerCase().includes("faculty")) {
        audience = "educators";
        trainingNeeds = "faculty-development";
      } else {
        audience = "corporate";
        trainingNeeds = "custom-corporate";
      }
    }

    if (inquiryParam) {
      message = `Inquiry regarding publication topic: ${inquiryParam}`;
    }

    return {
      name: "",
      organization: "",
      email: "",
      phone: "",
      audience,
      trainingNeeds,
      message,
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder integration: simulate secure transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-[4px] bg-white border border-[#CBD5E1] text-left max-w-3xl mx-auto">
        <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-3">
          DISPATCH RECEIPT // TRANSMISSION CONFIRMED
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#071A2D] tracking-tight mb-3">
          Inquiry Successfully Dispatched
        </h3>
        <p className="text-sm text-[#475569] mb-8 leading-relaxed">
          Thank you, <span className="text-[#071A2D] font-semibold">{formData.name}</span>. Our curriculum directors have received your request for <span className="text-[#071A2D] font-semibold">{formData.organization}</span>. We will review your requirements and follow up with a tailored syllabus and consultation proposal within 24 business hours.
        </p>

        <div className="p-5 rounded-[2px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#64748B] mb-8 space-y-1.5 font-mono">
          <div><strong className="text-[#071A2D]">TARGET AUDIENCE:</strong> {formData.audience}</div>
          <div><strong className="text-[#071A2D]">TRAINING TRACK:</strong> {formData.trainingNeeds}</div>
          <div><strong className="text-[#071A2D]">CONTACT EMAIL:</strong> {formData.email}</div>
          <div><strong className="text-[#071A2D]">CONTACT PHONE:</strong> {formData.phone}</div>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              organization: "",
              email: "",
              phone: "",
              audience: "corporate",
              trainingNeeds: "custom-corporate",
              message: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 md:p-12 rounded-[4px] bg-white border border-[#CBD5E1]">
      <div className="mb-8 pb-6 border-b border-[#F1F5F9]">
        <div className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase mb-2">
          INQUIRY DOSSIER // DIRECT ADVISORY
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#071A2D] tracking-tight">
          Discuss a Training Program
        </h2>
        <p className="mt-2 text-sm text-[#475569] leading-relaxed">
          Please provide details regarding your organization, target cohort, and primary goals. A curriculum director will evaluate your requirements and reach out within 24 hours.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Row 1: Name & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Full Name <span className="text-[#F97316]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Dr. Alex Morgan"
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Organization / Institution <span className="text-[#F97316]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Global Tech Ltd or State University"
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Work / Academic Email <span className="text-[#F97316]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex.morgan@company.com"
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Contact Phone <span className="text-[#F97316]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Audience & Training Needs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Audience Category <span className="text-[#F97316]">*</span>
            </label>
            <select
              value={formData.audience}
              onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors cursor-pointer"
            >
              <option value="corporate">Corporate Teams & Business Units</option>
              <option value="institutions">Universities & Colleges</option>
              <option value="educators">Schools & K-12 Faculty</option>
              <option value="students">Students & Academic Researchers</option>
              <option value="custom">Other / Custom Organizational Partnership</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D] mb-2">
              Training Needs <span className="text-[#F97316]">*</span>
            </label>
            <select
              value={formData.trainingNeeds}
              onChange={(e) => setFormData({ ...formData, trainingNeeds: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors cursor-pointer"
            >
              <option value="custom-corporate">Custom Corporate Enablement Track</option>
              <option value="faculty-development">Faculty Professional Development Workshop</option>
              <option value="student-bootcamp">Student Cohort Bootcamp</option>
              <option value="strategy-masterclass">Executive AI Strategy & Governance Masterclass</option>
              <option value="curriculum-codesign">Curriculum Co-Design & Policy Development</option>
              <option value="general-inquiry">General Advisory / Unsure of Best Fit</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-[#071A2D]">
              Message / Specific Requirements <span className="text-[#F97316]">*</span>
            </label>
            <span className="font-mono text-[11px] text-[#94A3B8]">Cohort size / timeline</span>
          </div>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your team's goals, existing software environment, target cohort size, or specific workflows you wish to automate..."
            className="w-full min-h-[120px] px-3.5 py-2.5 rounded-[3px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#071A2D] text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
          />
        </div>

        {/* Privacy & Submission */}
        <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#64748B]">
            <span className="text-[#F97316] font-bold mr-1">✓</span>
            <span>Strict confidentiality. No client data used for model training.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={loading}
            className="w-full sm:w-auto min-w-[200px]"
            rightIcon={<Send className="w-4 h-4" />}
          >
            {loading ? "Transmitting..." : "Submit Training Inquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-12 rounded-[4px] bg-white border border-[#CBD5E1] text-center text-[#64748B]">
          <HelpCircle className="w-6 h-6 mx-auto mb-2 text-[#F97316] animate-spin" />
          <p className="font-mono text-xs">Loading inquiry form...</p>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}

