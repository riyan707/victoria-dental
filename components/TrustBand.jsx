export default function TrustBand() {
  return (
    <section className="bg-[#F4F1FA] py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Years */}
        <div className="text-center lg:border-r border-[#cbc4d3]">
          <div className="font-display font-bold text-[56px] leading-[1.2] text-[#432587] mb-1">30+</div>
          <p className="font-body font-semibold text-[16px] tracking-wide uppercase text-[#494551]">Years Established</p>
        </div>
        {/* Patients */}
        <div className="text-center lg:border-r border-[#cbc4d3]">
          <div className="font-display font-bold text-[56px] leading-[1.2] text-[#432587] mb-1">15k+</div>
          <p className="font-body font-semibold text-[16px] tracking-wide uppercase text-[#494551]">Patients Cared For</p>
        </div>
        {/* Rating */}
        <div className="text-center lg:border-r border-[#cbc4d3]">
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[#E0A500] text-3xl" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
            ))}
          </div>
          <p className="font-body font-semibold text-[16px] tracking-wide uppercase text-[#494551]">Google Rating</p>
        </div>
        {/* Same-day */}
        <div className="text-center">
          <div className="font-display font-bold text-[28px] text-[#432587] h-[67px] flex items-center justify-center">
            Same-day
          </div>
          <p className="font-body font-semibold text-[16px] tracking-wide uppercase text-[#494551]">Emergency Available</p>
        </div>
      </div>
    </section>
  );
}
