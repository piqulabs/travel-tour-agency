import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/shared/TrustBadges";
import Destinations from "@/components/sections/Destinations";
import Packages from "@/components/sections/Packages";
import CTASection from "@/components/shared/CTASection";
import OpenTrips from "@/components/sections/OpenTrips";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import CustomTrip from "@/components/sections/CustomTrip";
import GoogleReviews from "@/components/sections/GoogleReviews";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import BookingSteps from "@/components/sections/BookingSteps";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import WhatsappButton from "@/components/shared/WhatsappButton";
import MobileStickyCTA from "@/components/shared/MobileStickyCTA";
import ImageAudit from "@/components/shared/ImageAudit";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mobile-cta-spacer">
        <Hero />
        <TrustBadges />
        <OpenTrips />
        <Destinations />
        <Packages />
        <CTASection
          title="Belum Yakin Pilih Trip Mana?"
          description="Konsultasi gratis via WhatsApp — tim kami bantu cocokkan destinasi, tanggal, dan budget Anda dalam hitungan jam."
          primaryLabel="Konsultasi Gratis via WhatsApp"
          secondaryLabel="Dapatkan Penawaran Terbaik"
        />
        <WhyChooseUs />
        <Gallery />
        <CustomTrip />
        <GoogleReviews />
        <Testimonials />
        <Stats />
        <BookingSteps />
        <FAQ />
        <Contact />
        <CTASection
          variant="dark"
          title="Kuota Juli & Agustus Hampir Penuh"
          description="Open trip Labuan Bajo tinggal sisa 4 kursi. Amankan slot Anda sekarang sebelum jadwal pilihan habis."
          primaryLabel="Tanyakan Jadwal Keberangkatan"
        />
      </main>
      <Footer />
      <WhatsappButton />
      <MobileStickyCTA />
      <ImageAudit />
    </>
  );
}
