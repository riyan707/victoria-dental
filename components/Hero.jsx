export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-[120px] py-16 lg:py-[120px] grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 max-w-2xl">
          <h1 className="font-display font-bold text-[40px] lg:text-[56px] leading-[1.2] text-[#1E1B2E] mb-6">
            Caring for your smile, right opposite Victoria Station
          </h1>
          <p className="text-[20px] leading-relaxed mb-10 text-[#494551]">
            Friendly NHS and private dental care, with same-day emergency appointments for when you need us most.
          </p>
          <div className="flex flex-col gap-4 w-fit">
            <button className="bg-[#5b3fa0] text-white min-h-[56px] px-10 rounded-full font-semibold text-lg btn-hover shadow-lg w-full whitespace-nowrap">
              Book an appointment
            </button>
            <button className="border-2 border-[#5b3fa0] text-[#5b3fa0] min-h-[56px] px-10 rounded-full font-semibold text-lg hover:bg-[#f7f1ff] transition-colors w-full whitespace-nowrap">
              Call 020 7834 6161
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              alt="Professional dentist consulting with a patient"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9SwZDJV--4mHiRygafEJYSwCAVEL8KkV4QSlqK0QDN4ikb5BJ1lx9WhyXQ_qqT1C9oHijy_wkz6aN5-96DtE7pRSb4weNrZAaEbGYG7WOjvhb0nFHcpA_AUlhLVV5Xnohq7Xi5vQxUkKi8KsvOAl--4crDwaVYOmqV4Z0HKAQzL8z_S3VimZB0HFilhByEPrRS2qh9g6QaGMfHs0gZeKpcDKiE-uj67FgCXKa2-uny69iD8ljFQ-ggM2khHYQ4MPniB5MSvSE3lL"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl border border-[#F4F1FA]">
              <h3 className="font-display font-semibold text-xl text-[#1E1B2E] mb-3">Today&apos;s Hours</h3>
              <div className="flex justify-between items-center text-[#494551] font-semibold">
                <span>Mon - Fri</span>
                <span className="font-bold text-[#432587]">09:00 - 18:00</span>
              </div>
              <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                Open Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
