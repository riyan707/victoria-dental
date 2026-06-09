const quickLinks = ["Our Treatments", "New Patient Information", "Fee Guide & Finance", "Emergency Appointments"];
const patientCare = ["Accessibility Statement", "Complaints Policy", "Privacy Policy", "GDPR Compliance"];

export default function Footer() {
  return (
    <footer className="bg-[#e6dffa] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-[28px] leading-[1.4] text-[#1E1B2E]">
              Victoria Dental Centre
            </h3>
            <p className="font-body text-[18px] leading-[1.6] text-[#494551]">
              Quality family dentistry in the heart of Victoria, London. Providing NHS and Private care for over 30 years.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-[#432587] uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-[18px] text-[#494551] hover:text-[#432587] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Patient Care */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-[#432587] uppercase tracking-widest text-sm">Patient Care</h4>
            <ul className="space-y-4">
              {patientCare.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-[18px] text-[#494551] hover:text-[#432587] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Connect */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-[#432587] uppercase tracking-widest text-sm">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#432587] shadow-sm hover:bg-[#432587] hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">face_nod</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#432587] shadow-sm hover:bg-[#432587] hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
            <p className="font-body text-sm text-[#494551]">
              GDC Registered Practice
              <br />
              Provider ID: 1-15263748
            </p>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#cbc4d3] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-[#494551] text-sm">
            © 2024 Victoria Dental Centre. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#494551]">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">universal_currency</span>
              Accessibility Conscious
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">lock</span>
              Secure Payment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
