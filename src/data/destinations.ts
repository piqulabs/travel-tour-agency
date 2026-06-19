import type { Destination } from "@/types";
import { images } from "@/data/images";

export const destinations: Destination[] = [
  {
    id: "bali",
    title: "Bali",
    description:
      "Pulau Dewata dengan pantai eksotis, pura bersejarah, dan sawah terasering yang memukau. Cocok untuk honeymoon, liburan keluarga, maupun petualangan.",
    image: images.destinations.bali,
    startingPrice: 2500000,
    slug: "bali",
    highlights: ["Pantai & sunset", "Pura & budaya", "Kuliner lokal"],
  },
  {
    id: "labuan-bajo",
    title: "Labuan Bajo",
    description:
      "Gerbang menuju Taman Nasional Komodo. Nikmati sailing trip, snorkeling di Pink Beach, dan pemandangan Pulau Padar yang ikonik.",
    image: images.destinations["labuan-bajo"],
    startingPrice: 3500000,
    slug: "labuan-bajo",
    highlights: ["Komodo & Padar", "Sailing trip", "Snorkeling"],
  },
  {
    id: "lombok",
    title: "Lombok",
    description:
      "Surga tersembunyi dengan pantai Gili yang tenang, budaya Sasak yang autentik, dan pemandangan Gunung Rinjani yang menakjubkan.",
    image: images.destinations.lombok,
    startingPrice: 2800000,
    slug: "lombok",
    highlights: ["Gili Trawangan", "Pantai pink", "Budaya Sasak"],
  },
  {
    id: "raja-ampat",
    title: "Raja Ampat",
    description:
      "Surga bawah laut terbaik di dunia. Jelajahi keindahan karst, laguna biru, dan keanekaragaman hayati laut yang luar biasa.",
    image: images.destinations["raja-ampat"],
    startingPrice: 8500000,
    slug: "raja-ampat",
    highlights: ["Diving & snorkeling", "Wayag & Piaynemo", "Island hopping"],
  },
  {
    id: "bromo",
    title: "Bromo",
    description:
      "Saksikan matahari terbit legendaris di Kawah Bromo, lautan pasir yang mistis, dan pemandangan gunung berapi yang epik.",
    image: images.destinations.bromo,
    startingPrice: 1200000,
    slug: "bromo",
    highlights: ["Sunrise Bromo", "Jeep adventure", "Kawah aktif"],
  },
  {
    id: "yogyakarta",
    title: "Yogyakarta",
    description:
      "Kota budaya dengan Candi Borobudur, Keraton Yogyakarta, dan warisan Jawa yang kaya. Destinasi favorit wisatawan domestik.",
    image: images.destinations.yogyakarta,
    startingPrice: 1500000,
    slug: "yogyakarta",
    highlights: ["Borobudur", "Keraton & Malioboro", "Kuliner Jogja"],
  },
];
