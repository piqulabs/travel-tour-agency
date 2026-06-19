import type { TravelPackage } from "@/types";
import { images } from "@/data/images";

export const packages: TravelPackage[] = [
  {
    id: "open-trip-labuan-bajo",
    title: "Sailing Komodo",
    summary:
      "Kapal phinisi, sunrise Padar, snorkeling Pink Beach, dan trekking Pulau Komodo.",
    location: "Labuan Bajo, NTT",
    duration: "3 Hari 2 Malam",
    durationCode: "3D2N",
    groupSize: "2–16 orang",
    schedule: "Setiap Jumat",
    highlights: [
      "Sunrise trekking Pulau Padar",
      "Snorkeling di Pink Beach",
      "Bertemu komodo di Pulau Komodo",
    ],
    price: 3850000,
    image: images.destinations["labuan-bajo"],
  },
  {
    id: "liburan-keluarga-bali",
    title: "Bali 4 Hari",
    summary:
      "Hotel bintang 4, driver harian, Waterbom, Ubud, dan pantai Nusa Dua.",
    location: "Bali",
    duration: "4 Hari 3 Malam",
    durationCode: "4D3N",
    groupSize: "2–8 orang",
    schedule: "Kapan saja",
    highlights: [
      "Tanah Lot saat golden hour",
      "Ubud — monkey forest & sawah",
      "Hari santai di pantai Nusa Dua",
    ],
    price: 4200000,
    image: images.destinations.bali,
  },
  {
    id: "explore-raja-ampat",
    title: "Raja Ampat Explorer",
    summary:
      "Island hopping, viewpoint Piaynemo, dan 4 sesi snorkeling di spot berbeda.",
    location: "Raja Ampat, Papua Barat",
    duration: "5 Hari 4 Malam",
    durationCode: "5D4N",
    groupSize: "2–12 orang",
    schedule: "Setiap Senin",
    highlights: [
      "Viewpoint Piaynemo",
      "Island hopping Wayag",
      "Snorkeling di Arborek",
    ],
    price: 9800000,
    image: images.destinations["raja-ampat"],
  },
  {
    id: "wisata-bromo-sunrise",
    title: "Bromo Sunrise",
    summary:
      "Jeep 4WD jam 3 pagi, sunrise Penanjakan, trekking kawah, dan lautan pasir.",
    location: "Bromo, Jawa Timur",
    duration: "2 Hari 1 Malam",
    durationCode: "2D1N",
    groupSize: "1–20 orang",
    schedule: "Setiap Sabtu",
    highlights: [
      "Sunrise dari Bukit Penanjakan",
      "Trekking kawah Bromo",
      "Foto di lautan pasir",
    ],
    price: 1150000,
    image: images.destinations.bromo,
  },
  {
    id: "tour-yogyakarta-heritage",
    title: "Jogja Heritage",
    summary:
      "Borobudur pagi-pagi, Prambanan sore hari, dan kuliner Malioboro.",
    location: "Yogyakarta",
    duration: "3 Hari 2 Malam",
    durationCode: "3D2N",
    groupSize: "2–15 orang",
    schedule: "Kapan saja",
    highlights: [
      "Borobudur saat fajar",
      "Keraton & Taman Sari",
      "Malam di Malioboro",
    ],
    price: 2450000,
    image: images.destinations.yogyakarta,
  },
  {
    id: "lombok-island-adventure",
    title: "Lombok & Gili",
    summary:
      "Gili Trawangan, pantai Tanjung Aan, dan desa budaya Sasak.",
    location: "Lombok, NTB",
    duration: "4 Hari 3 Malam",
    durationCode: "4D3N",
    groupSize: "2–10 orang",
    schedule: "Setiap Rabu",
    highlights: [
      "Island hopping Gili",
      "Pantai Tanjung Aan",
      "Desa Sade — budaya Sasak",
    ],
    price: 3650000,
    image: images.destinations.lombok,
  },
];
