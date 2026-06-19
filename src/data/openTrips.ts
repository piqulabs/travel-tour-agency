import type { OpenTrip } from "@/types";
import { images } from "@/data/images";

export const openTrips: OpenTrip[] = [
  {
    id: "ot-1",
    destination: "Labuan Bajo — Sailing Komodo 3H2M",
    departureDate: "5 Juli 2026",
    seatsLeft: 4,
    totalSeats: 16,
    price: 3850000,
    image: images.destinations["labuan-bajo"],
  },
  {
    id: "ot-2",
    destination: "Bromo Sunrise + Madakaripura",
    departureDate: "12 Juli 2026",
    seatsLeft: 7,
    totalSeats: 20,
    price: 1150000,
    image: images.destinations.bromo,
  },
  {
    id: "ot-3",
    destination: "Raja Ampat — Piaynemo & Snorkeling",
    departureDate: "19 Juli 2026",
    seatsLeft: 2,
    totalSeats: 12,
    price: 9800000,
    image: images.destinations["raja-ampat"],
  },
  {
    id: "ot-4",
    destination: "Jogja Heritage — Borobudur & Prambanan",
    departureDate: "26 Juli 2026",
    seatsLeft: 9,
    totalSeats: 18,
    price: 2450000,
    image: images.destinations.yogyakarta,
  },
  {
    id: "ot-5",
    destination: "Lombok — Gili Trawangan Hopping",
    departureDate: "2 Agustus 2026",
    seatsLeft: 5,
    totalSeats: 15,
    price: 3650000,
    image: images.destinations.lombok,
  },
  {
    id: "ot-6",
    destination: "Bali Family Trip — Waterbom & Ubud",
    departureDate: "9 Agustus 2026",
    seatsLeft: 6,
    totalSeats: 20,
    price: 4200000,
    image: images.destinations.bali,
  },
];
