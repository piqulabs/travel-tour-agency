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
import ImageAudit from "@/components/shared/ImageAudit";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Destinations />
        <Packages />
        <CTASection
          title="Sudah Punya Destinasi Impian?"
          description="Konsultasikan rencana liburan Anda sekarang — gratis, tanpa komitmen. Tim kami siap bantu pilih paket terbaik sesuai budget."
          primaryLabel="Chat WhatsApp Sekarang"
          secondaryLabel="Lihat Semua Paket"
        />
        <OpenTrips />
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
          title="Jangan Tunda Liburan Impian Anda"
          description="Kuota open trip terbatas dan harga promo berlaku untuk booking bulan ini. Hubungi kami hari ini dan dapatkan penawaran terbaik."
          primaryLabel="Hubungi Kami Sekarang"
        />
      </main>
      <Footer />
      <WhatsappButton />
      <ImageAudit />
    </>
  );
}
