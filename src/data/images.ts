/**
 * Semua gambar disimpan lokal di /public/images.
 * Jalankan `npm run setup:images` jika folder kosong.
 */
export const images = {
  hero: "/images/hero.jpg",
  fallback: {
    travel: "/images/fallback/travel.jpg",
    destination: "/images/fallback/destination.jpg",
    gallery: "/images/fallback/gallery.jpg",
    avatar: "/images/fallback/avatar.jpg",
  },
  destinations: {
    bali: "/images/destinations/bali.jpg",
    "labuan-bajo": "/images/destinations/labuan-bajo.jpg",
    lombok: "/images/destinations/lombok.jpg",
    "raja-ampat": "/images/destinations/raja-ampat.jpg",
    bromo: "/images/destinations/bromo.jpg",
    yogyakarta: "/images/destinations/yogyakarta.jpg",
  },
  gallery: [
    "/images/gallery/01-bali-rice-terrace.jpg",
    "/images/gallery/02-padar-island.jpg",
    "/images/gallery/03-raja-ampat-underwater.jpg",
    "/images/gallery/04-bromo-sunrise.jpg",
    "/images/gallery/05-borobudur.jpg",
    "/images/gallery/06-lombok-beach.jpg",
    "/images/gallery/07-bali-temple.jpg",
    "/images/gallery/08-resort-pool.jpg",
    "/images/gallery/09-snorkeling.jpg",
  ],
  avatars: [
    "/images/testimonials/01.jpg",
    "/images/testimonials/02.jpg",
    "/images/testimonials/03.jpg",
    "/images/testimonials/04.jpg",
    "/images/testimonials/05.jpg",
    "/images/testimonials/06.jpg",
  ],
} as const;

export const imageAlt = {
  hero: "Sawah terasering hijau di Bali dengan langit biru cerah",
  destinations: {
    bali: "Pura dan pemandangan Bali saat golden hour",
    "labuan-bajo": "Pemandangan aerial Pulau Padar, Labuan Bajo",
    lombok: "Pantai tropis berpasir putih di Lombok",
    "raja-ampat": "Pemandangan pulau-pulau karst Raja Ampat dari atas",
    bromo: "Sunrise di Gunung Bromo dengan kabut pagi",
    yogyakarta: "Candi Borobudur, warisan budaya Yogyakarta",
  },
  gallery: [
    "Sawah terasering Bali saat matahari terbit",
    "Pemandangan Pulau Padar, Labuan Bajo",
    "Snorkeling di perairan jernih Raja Ampat",
    "Sunrise epik di Kawah Gunung Bromo",
    "Candi Borobudur, Yogyakarta",
    "Pantai eksotis di Lombok",
    "Pura tradisional Bali saat senja",
    "Resort mewah tepi pantai tropis",
    "Wisatawan snorkeling di laut tropis Indonesia",
  ],
} as const;
