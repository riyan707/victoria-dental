const points = [
  { icon: "check_circle", title: "Victoria Practice", desc: "Ideally located opposite Victoria Station for commuting patients." },
  { icon: "translate", title: "Multilingual Care", desc: "We speak English, Spanish, and Portuguese to better serve our community." },
  { icon: "precision_manufacturing", title: "Modern Technology", desc: "Digital imaging and the latest restorative techniques for painless results." },
  { icon: "payments", title: "0% Finance Available", desc: "Spread the cost of your treatment with flexible payment plans." },
];

export default function About() {
  return (
    <section className="bg-[#F4F1FA] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1 bg-[#432587]/10 text-[#432587] rounded-full font-semibold text-sm mb-6">Established &amp; Trusted</div>
          <h2 className="font-display font-bold text-[40px] lg:text-[56px] leading-[1.2] text-[#1E1B2E] mb-8">Built on trust, clinical excellence, and local care.</h2>
          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="material-symbols-outlined text-[#432587]">{p.icon}</span>
                <div>
                  <h4 className="font-semibold text-lg text-[#1E1B2E]">{p.title}</h4>
                  <p className="text-[#494551]">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <img
            alt="Modern dental surgery room"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-wgZAbG8kDvULaHkKOsOB5TIXhWfO-jNdlD4EqT7ZeXvXukO5FIHApKzAnZrcwkgSu5_ZV-gXW5xrq9o07qsq7mSR6mJhYNFnM48bb96twxKZlrVssnh9d-BnDFaVo3NFsCPjOhPa6M5P7A_vV5mNSTWDrcors0EmVVlewejLlXo8Ph8iv-hv7__01tjWINDtggSgmtd0Q-vdXWlzkFc0-iXgKLzUD9LhFw8nn8yl00rhPNRIMAeVrdsOXAsINd_0WwKkfL3lnor"
            className="rounded-2xl soft-shadow grayscale hover:grayscale-0 transition-all duration-700 w-full"
          />
        </div>
      </div>
    </section>
  );
}
