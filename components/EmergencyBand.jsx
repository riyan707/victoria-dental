export default function EmergencyBand() {
  return (
    <section className="bg-[#5b3fa0] py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <h2 className="font-display font-bold text-[40px] text-white mb-4">In pain today?</h2>
          <p className="text-[#cebaff] text-xl">Same-day emergency appointments for registered and new patients.</p>
        </div>
        <a href="tel:02078346161" className="bg-white text-[#5b3fa0] min-h-[64px] px-12 rounded-full font-bold text-xl btn-hover flex items-center justify-center gap-3 whitespace-nowrap">
          <span className="material-symbols-outlined">call</span>
          Call us now
        </a>
      </div>
    </section>
  );
}
