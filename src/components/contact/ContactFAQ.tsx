import React from "react";

export function ContactFAQ() {
  const steps = [
    {
      step: "01",
      title: "Requirements Review",
      desc: "Our directors analyze your team size, existing software stack, and target training timeline within 24 business hours.",
    },
    {
      step: "02",
      title: "Discovery Consultation",
      desc: "A focused 30-minute scoping session to understand specific operational bottlenecks, compliance requirements, and desired outcomes.",
    },
    {
      step: "03",
      title: "Tailored Syllabus Proposal",
      desc: "You receive a formal proposal detailing module breakdowns, custom prompt vaults, live lab environments, and capability milestones.",
    },
  ];

  const faqs = [
    {
      q: "Can training be conducted on-premise or virtually?",
      a: "Yes. We deliver programs globally via live interactive virtual cohorts, on-premise at your corporate campus or university, or in hybrid formats.",
    },
    {
      q: "Do you sign mutual Non-Disclosure Agreements (NDAs)?",
      a: "Always. When co-designing corporate training around proprietary data and workflows, we execute mutual NDAs before reviewing internal processes.",
    },
    {
      q: "How are the hands-on labs hosted?",
      a: "Labs are conducted inside controlled sandboxes or directly within your existing enterprise software environment (Google Workspace, Microsoft 365, Slack, or secure API endpoints).",
    },
    {
      q: "Are programs suitable for non-technical teams?",
      a: "Absolutely. Our curricula are modularized: tracks for operations, marketing, and leadership emphasize high-leverage prompting and no-code automation, requiring zero coding experience.",
    },
  ];

  return (
    <div className="mt-20 pt-16 border-t border-[#CBD5E1]">
      {/* 3-Step Consultation Journey */}
      <div className="mb-20">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F97316] block mb-2">
            ADVISORY SEQUENCE // WHAT HAPPENS NEXT
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#071A2D] tracking-tight">
            From Initial Inquiry to Deployed Capability
          </h3>
          <p className="mt-2 text-sm text-[#475569]">
            A transparent 3-stage process from requirements review to formal delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase block mb-4">
                  PHASE // {item.step}
                </span>
                <h4 className="font-display text-xl font-normal text-[#071A2D] mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] font-mono text-[10px] text-[#94A3B8]">
                STEP VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Consultation Questions */}
      <div>
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F97316] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#071A2D] tracking-tight">
            Consultation & Operational Inquiries
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-8 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="font-mono text-xs font-semibold text-[#F97316] mb-3">
                Q // 0{idx + 1}
              </div>
              <h4 className="font-display text-lg font-normal text-[#071A2D] mb-3 tracking-tight">
                {faq.q}
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

