const services = [
  {
    icon: "family_history",
    title: "General Dentistry",
    desc: "Comprehensive care for the whole family, focusing on preventative health and long-term wellness.",
  },
  {
    icon: "auto_fix",
    title: "Teeth Whitening",
    desc: "Professional boutique whitening systems designed to brighten your smile safely and effectively.",
  },
  {
    icon: "align_items_stretch",
    title: "Invisalign",
    desc: "Straighten your teeth discreetly with the world's most advanced clear aligner system.",
  },
  {
    icon: "clinical_notes",
    title: "Dental Implants",
    desc: "Permanent, natural-looking solutions for missing teeth that restore function and confidence.",
  },
  {
    icon: "face_retouching_natural",
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile makeovers tailored to your unique facial features.",
  },
  {
    icon: "emergency",
    title: "Emergency Dental",
    desc: "Pain relief and urgent treatment with same-day appointments available for everyone.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-[40px] lg:text-[56px] lg:tracking-[-0.02em] leading-[1.2] text-[#1E1B2E] mb-4">
            Complete Dental Solutions
          </h2>
          <p className="font-body text-[20px] leading-[1.6] text-[#494551] max-w-2xl mx-auto">
            From routine check-ups to life-changing cosmetic transformations, we offer excellence in every treatment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-10 rounded-2xl soft-shadow border border-[#F4F1FA] group hover:border-[#5b3fa0] transition-all duration-200"
            >
              <div className="w-14 h-14 bg-[#F4F1FA] rounded-xl flex items-center justify-center mb-8 text-[#432587] group-hover:bg-[#432587] group-hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <h3 className="font-display font-semibold text-[28px] leading-[1.4] text-[#1E1B2E] mb-4">
                {s.title}
              </h3>
              <p className="font-body text-[18px] leading-[1.6] text-[#494551] mb-8">{s.desc}</p>
              <a
                href="#"
                className="font-body font-semibold text-[16px] text-[#432587] flex items-center gap-2 group-hover:gap-4 transition-all duration-200"
              >
                Learn more{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
