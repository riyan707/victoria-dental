import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import FinanceBanner from "@/components/FinanceBanner";
import Testimonials from "@/components/Testimonials";
import EmergencyBand from "@/components/EmergencyBand";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Hero />
        <TrustBand />
        <ServicesGrid />
        <About />
        <FinanceBanner />
        <Testimonials />
        <EmergencyBand />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
