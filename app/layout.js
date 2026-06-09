import "./globals.css";

export const metadata = {
  title: "Victoria Dental Centre | Premium Dental Care London",
  description: "Friendly NHS and private dental care opposite Victoria Station. Same-day emergency appointments available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-body text-[18px] leading-[1.6] text-[#1E1B2E] antialiased">
        {children}
      </body>
    </html>
  );
}
