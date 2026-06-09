export default function Testimonials() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-3xl"
              style={{ color: "#E0A500", fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        {/* Quote */}
        <blockquote className="font-display font-semibold text-[32px] lg:text-[40px] leading-[1.3] text-[#1E1B2E] mb-12 italic">
          &ldquo;The team at Victoria Dental Centre are incredible. I&apos;ve always been
          nervous about the dentist, but they made me feel so calm and at ease.
          Highly recommend for anyone in London!&rdquo;
        </blockquote>
        <cite className="font-body font-semibold text-xl block not-italic mb-12 text-[#432587]">
          — Sarah Jenkins, Patient
        </cite>
        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full border border-[#7a7583] flex items-center justify-center hover:bg-[#432587] hover:text-white hover:border-[#432587] transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-[#7a7583] flex items-center justify-center hover:bg-[#432587] hover:text-white hover:border-[#432587] transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
