import React from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPrinciplesSection() {
  const tenets = [
    {
      number: "01",
      title: "Co-Designed Around Your Reality",
      desc: "We do not believe in one-size-fits-all training. Every institutional engagement is co-designed around your actual software toolchains, departmental bottlenecks, and security compliance policies.",
      takeaway: "Direct alignment to existing internal workflows",
    },
    {
      number: "02",
      title: "Practitioner-Led Instruction",
      desc: "Our workshops are developed and delivered by active technologists, software engineers, and educational researchers who build with AI daily. No recycled academic lectures or generic slide reading.",
      takeaway: "Live coding, prompt debugging & real-time problem solving",
    },
    {
      number: "03",
      title: "Permanent Capability Handover",
      desc: "Traditional consultancies create vendor lock-in. Nexora equips your organization with validated prompt vaults, internal SOP documentation, and train-the-trainer frameworks so your team thrives independently.",
      takeaway: "Sustainable internal capability without vendor dependency",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <SectionContainer>
        <SectionHeading
          sectionNumber="03 // OPERATING PRINCIPLES"
          eyebrow="Operating Methodology"
          eyebrowBadge
          title="How Nexora"
          titleHighlight="Operates"
          description="We combine the rigor of an elite technology consultancy with the pedagogical excellence of a modern academy."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CBD5E1] border border-[#CBD5E1] rounded-[4px] overflow-hidden max-w-5xl">
          {tenets.map((tenet) => (
            <div
              key={tenet.number}
              className="flex flex-col justify-between p-8 md:p-9 bg-white hover:bg-[#F8FAFC] transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#F97316] tracking-widest uppercase block mb-4">
                  PRINCIPLE // {tenet.number}
                </span>

                <h3 className="font-display text-xl font-normal text-[#071A2D] tracking-tight mb-3">
                  {tenet.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {tenet.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] font-mono text-xs text-[#64748B]">
                <strong className="text-[#071A2D] uppercase tracking-wider block mb-1">Standard:</strong>
                <span>{tenet.takeaway}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

