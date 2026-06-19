import type { Destination } from "@/types";
import { images } from "@/data/images";

export const destinations: Destination[] = [
  {
    id: "bali",
    title: "Bali",
    description:
      "Pura, pantai, dan kuliner dalam satu trip. Kami atur driver harian, hotel sesuai budget, dan tiket wahana — Anda tinggal explore.",
    image: images.destinations.bali,
    startingPrice: 2500000,
    slug: "bali",
    highlights: ["Honeymoon & keluarga", "Kuliner & budaya", "Pantai selatan"],
  },
  {
    id: "labuan-bajo",
    title: "Labuan Bajo",
    description:
      "Sailing Komodo, trekking Padar, dan snorkeling di perairan jernih. Kapal phinisi, makan, dan guide Flores sudah kami siapkan.",
    image: images.destinations["labuan-bajo"],
    startingPrice: 3500000,
    slug: "labuan-bajo",
    highlights: ["Kapal phinisi", "Pink Beach", "Pulau Padar"],
  },
  {
    id: "lombok",
    title: "Lombok",
    description:
      "Gili Trawangan tanpa keramaian Bali, pantai Tanjung Aan seputih tepung, dan budaya Sasak yang masih hidup. Lebih slow, sama indahnya.",
    image: images.destinations.lombok,
    startingPrice: 2800000,
    slug: "lombok",
    highlights: ["Gili Trawangan", "Pantai Tanjung Aan", "Budaya Sasak"],
  },
  {
    id: "raja-ampat",
    title: "Raja Ampat",
    description:
      "Surga bawah laut yang worth the flight. Piaynemo dari atas, snorkeling di Arborek, resort tepi laut. Kami handle logistik antar pulau.",
    image: images.destinations["raja-ampat"],
    startingPrice: 8500000,
    slug: "raja-ampat",
    highlights: ["Piaynemo", "Snorkeling", "Island hopping"],
  },
  {
    id: "bromo",
    title: "Bromo",
    description:
      "Bangun jam 3 pagi, jeep 4WD ke Penanjakan, lalu turun ke kawah. Trip 2 hari paling laris dari Jakarta dan Surabaya — budget friendly.",
    image: images.destinations.bromo,
    startingPrice: 1200000,
    slug: "bromo",
    highlights: ["Sunrise Penanjakan", "Jeep 4WD", "Kawah Bromo"],
  },
  {
    id: "yogyakarta",
    title: "Yogyakarta",
    description:
      "Borobudur sebelum wisatawan ramai, Prambanan saat sore, malamnya gudeg di Malioboro. Wisata budaya yang nggak pernah bosan.",
    image: images.destinations.yogyakarta,
    startingPrice: 1500000,
    slug: "yogyakarta",
    highlights: ["Borobudur sunrise", "Prambanan", "Kuliner Malioboro"],
  },
];
