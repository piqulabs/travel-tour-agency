import type { TravelPackage } from "@/types";
import { images } from "@/data/images";

export const packages: TravelPackage[] = [
  {
    id: "open-trip-labuan-bajo",
    title: "Open Trip Labuan Bajo — Komodo 3H2M",
    summary:
      "Sailing phinisi 3 malam, sunrise di Padar, snorkeling Pink Beach, dan lihat komodo dari jarak aman. Paling banyak di-booking tamu solo & pasangan.",
    duration: "3 Hari 2 Malam",
    facilities: [
      "Kapal phinisi ber-AC (kamar sharing)",
      "6x makan selama trip — termasuk ikan bakar",
      "Alat snorkeling + life jacket",
      "Tiket Taman Nasional Komodo",
      "Guide lokal Flores berbahasa Indonesia",
    ],
    highlights: [
      "Sunrise trekking Pulau Padar",
      "Snorkeling di Pink Beach",
      "Bertemu komodo di Pulau Komodo",
    ],
    price: 3850000,
    image: images.destinations["labuan-bajo"],
    popular: true,
    badge: "best-seller",
  },
  {
    id: "liburan-keluarga-bali",
    title: "Paket Keluarga Bali 4H3M All-In",
    summary:
      "Dirancang buat keluarga dengan anak — jadwal santai, driver sabar, hotel ada kolam renang. Waterbom + pura + pantai dalam satu trip.",
    duration: "4 Hari 3 Malam",
    facilities: [
      "Hotel bintang 4 area Seminyak/Nusa Dua",
      "Sarapan harian + 1x makan siang",
      "Mobil Innova + driver harian (12 jam)",
      "Tiket Waterbom Bali (2 dewasa + 2 anak)",
      "Asuransi perjalanan inklusif",
    ],
    highlights: [
      "Tanah Lot saat golden hour",
      "Ubud — monkey forest & sawah",
      "Hari santai di pantai Nusa Dua",
    ],
    price: 4200000,
    image: images.destinations.bali,
    popular: true,
    badge: "favorit",
  },
  {
    id: "explore-raja-ampat",
    title: "Raja Ampat Explorer 5H4M",
    summary:
      "Untuk yang mau lihat bawah laut terbaik Indonesia. Island hopping, viewpoint Piaynemo, dan 4 sesi snorkeling di spot yang beda tiap hari.",
    duration: "5 Hari 4 Malam",
    facilities: [
      "Resort tepi laut (kamar twin/double)",
      "Speedboat antar pulau",
      "Makan 3x sehari",
      "4 sesi snorkeling terpandu",
      "Ranger lokal Raja Ampat",
    ],
    highlights: [
      "Viewpoint Piaynemo — foto ikonik",
      "Island hopping Wayag",
      "Snorkeling di Arborek",
    ],
    price: 9800000,
    image: images.destinations["raja-ampat"],
    popular: true,
    badge: "best-seller",
  },
  {
    id: "wisata-bromo-sunrise",
    title: "Bromo Sunrise Trip 2H1M",
    summary:
      "Weekend escape dari Jakarta/Surabaya. Jeep 4WD jam 3 pagi, sunrise Penanjakan, trekking kawah. Harga paling terjangkau di lineup kami.",
    duration: "2 Hari 1 Malam",
    facilities: [
      "Hotel area Probolinggo/Bromo",
      "Jeep 4WD sunrise tour (shared)",
      "3x makan (1x prasmanan)",
      "Tiket masuk kawasan Bromo",
      "Guide lokal berpengalaman",
    ],
    highlights: [
      "Sunrise dari Bukit Penanjakan",
      "Trekking kawah Bromo",
      "Foto di lautan pasir & Teletubbies",
    ],
    price: 1150000,
    image: images.destinations.bromo,
    badge: "promo",
  },
  {
    id: "tour-yogyakarta-heritage",
    title: "Jogja Heritage Tour 3H2M",
    summary:
      "Borobudur pagi-pagi sebelum ramai, Prambanan sore hari, malamnya makan gudeg di Malioboro. Guide lulusan UGM yang cerita sejarahnya hidup.",
    duration: "3 Hari 2 Malam",
    facilities: [
      "Hotel 3★ dekat Malioboro",
      "Mobil Avanza/Innova + driver",
      "5x makan pilihan lokal",
      "Tiket Borobudur & Prambanan",
      "Guide wisata bersertifikat UGM",
    ],
    highlights: [
      "Borobudur saat fajar",
      "Keraton & Taman Sari",
      "Malam di Malioboro + gudeg",
    ],
    price: 2450000,
    image: images.destinations.yogyakarta,
    badge: "favorit",
  },
  {
    id: "lombok-island-adventure",
    title: "Lombok & Gili Getaway 4H3M",
    summary:
      "Alternatif Bali yang lebih tenang — Gili Trawangan, pantai Tanjung Aan, dan desa Sasak. Cocok buat honeymoon atau trip ber-4–6 orang.",
    duration: "4 Hari 3 Malam",
    facilities: [
      "Resort area Senggigi",
      "Fast boat PP ke Gili Trawangan",
      "7x makan",
      "Snorkeling trip Gili",
      "Transport lokal selama tour",
    ],
    highlights: [
      "Island hopping Gili",
      "Pantai Tanjung Aan",
      "Desa Sade — budaya Sasak",
    ],
    price: 3650000,
    image: images.destinations.lombok,
    badge: "promo",
  },
];
