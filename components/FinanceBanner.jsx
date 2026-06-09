export default function FinanceBanner() {
  return (
    <section className="py-12 bg-[#432587]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-4xl text-[#cebaff]">account_balance_wallet</span>
          <h2 className="font-display font-semibold text-[32px] lg:text-[40px] text-white leading-snug">Spread the cost. 0% finance available.</h2>
        </div>
        <button className="bg-white text-[#432587] min-h-[56px] px-10 rounded-full font-semibold btn-hover shadow-lg whitespace-nowrap">Check Eligibility</button>
      </div>
    </section>
  );
}
