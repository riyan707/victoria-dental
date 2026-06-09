export default function LocationHours() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display font-bold text-[40px] text-[#1E1B2E] mb-10">Find us in Victoria</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#432587]">location_on</span>
              <div>
                <h4 className="font-semibold text-lg text-[#1E1B2E]">Address</h4>
                <p className="text-[#494551] text-lg">330 Vauxhall Bridge Road,<br />Victoria, London SW1V 1AA</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#432587]">schedule</span>
              <div className="w-full">
                <h4 className="font-semibold text-lg text-[#1E1B2E] mb-4">Opening Hours</h4>
                <table className="w-full text-[#494551]">
                  <tbody>
                    {[["Monday - Friday","09:00 - 18:00"],["Saturday","10:00 - 14:00"],["Sunday","Closed"]].map(([day, hrs]) => (
                      <tr key={day} className="border-b border-[#F4F1FA] last:border-0">
                        <td className="py-2">{day}</td>
                        <td className="py-2 font-bold text-right text-[#1E1B2E]">{hrs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="tel:02078346161" className="bg-[#5b3fa0] text-white min-h-[56px] px-8 rounded-full font-semibold btn-hover shadow-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>020 7834 6161
              </a>
              <button className="bg-[#F4F1FA] text-[#432587] min-h-[56px] px-8 rounded-full font-semibold btn-hover flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span>Book Online
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden soft-shadow h-[500px] relative bg-slate-200">
          <img
            alt="Map location near Victoria Station London"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklvkkzRpejzxAFhzYwGrXrP6BBi1AaQFsV8_zbWMkxxx5oMfHKjzCIW6AMyEQlFhrO_T_tsnmMtILOpR4DE0E6PpeIP2HRs1RrqPI9fGEyvVTlDzerZr5DVV7QQTG9bMDYYcayyH3zxLuiAhBKB5YDm9H6nxAc8p0N7ue3Xbp__k_wiWmcJh9MOPT374wif1WQFh65FQalGojp7X3oajp-nt6BpgE0BG-8VquMPABL-MZcmi9-VCriBFlNqsi7Igbq8WFC0McuQ41"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-[#432587]/20">
              <span className="material-symbols-outlined text-[#432587] text-3xl">location_on</span>
              <div>
                <p className="font-bold text-[#1E1B2E]">Victoria Dental Centre</p>
                <p className="text-sm text-[#494551]">Vauxhall Bridge Road</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
