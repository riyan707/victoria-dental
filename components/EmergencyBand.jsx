export default function EmergencyBand() {
  return (
    <section className="bg-[#5b3fa0] py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <h2 className="font-display font-bold text-[40px] leading-[1.2] text-white mb-4">
            In pain today?
          </h2>
          <p className="font-body text-[20px] leading-[1.6] text-[#cebaff]">
            Same-day emergency appointments for registered and new patients.
          </p>
        </div>
        <a
          href="tel:02078346161"
          className="bg-white text-[#5b3fa0] min-h-[64px] px-12 rounded-full font-bold text-xl btn-hover flex items-center justify-center gap-3 whitespace-nowrap shadow-lg"
        >
          <span className="material-symbols-outlined">call</span>
          Call us now
        </a>
      </div>
    </section>
  );
}
