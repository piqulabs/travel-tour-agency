import type { Testimonial, GoogleReview } from "@/types";
import { images } from "@/data/images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andi Pratama",
    rating: 5,
    review:
      "Pertama kali ke Labuan Bajo dan langsung naik kapal phinisi. Kamar bersih, makanannya enak — ada ikan bakar tiap malam. Guide-nya orang Flores asli, jelasin sejarah Pulau Komodo dengan detail. Anak saya (7 tahun) ikut trekking komodo juga aman.",
    image: images.avatars[0],
    location: "Jakarta Selatan",
  },
  {
    id: "2",
    name: "Rina Maharani",
    rating: 5,
    review:
      "Booking paket Bali keluarga buat 4 orang termasuk 2 anak. Driver-nya Pak Made sabar banget, hotel di Seminyak sesuai foto. Yang paling saya suka: jadwalnya nggak dikejar-kejar. Waterbom-nya anak-anak puas, kami juga dapat waktu sendiri di pantai.",
    image: images.avatars[1],
    location: "Bandung",
  },
  {
    id: "3",
    name: "Dimas Saputra",
    rating: 5,
    review:
      "Raja Ampat memang mahal, tapi Nusantara Trip kasih breakdown harga yang jelas dari awal. Nggak ada biaya mendadak di lapangan. Snorkeling di Arborek ketemu penyu, guide fotoin juga. Resort-nya basic tapi lokasinya tepat di tepi laut.",
    image: images.avatars[2],
    location: "Surabaya",
  },
  {
    id: "4",
    name: "Siti Nurhaliza",
    rating: 5,
    review:
      "Ikut open trip Bromo sendirian, awalnya ragu. Ternyata grupnya 12 orang, mostly solo traveler juga. Jeep-nya datang tepat waktu jam 3 pagi, sunrise-nya keluar — foto di Penanjakan jadi wallpaper HP saya sampai sekarang.",
    image: images.avatars[3],
    location: "Semarang",
  },
  {
    id: "5",
    name: "Bambang Wijaya",
    rating: 5,
    review:
      "Trip Jogja buat anniversary ke-15. Guide-nya Mas Joko mantan pramuwisata, cerita sejarah Borobudur-nya hidup banget. Plus dia tau warung gudeg enak yang nggak ada di Google Maps. Istri saya bilang ini trip terbaik kami sejak nikah.",
    image: images.avatars[4],
    location: "Yogyakarta",
  },
  {
    id: "6",
    name: "Putri Anggraini",
    rating: 5,
    review:
      "Minta custom trip Lombok buat 6 orang kantor. Budget kami Rp4 juta/orang, tim Nusantara Trip susun itinerary yang pas tanpa ngurangin pengalaman. Resort di Senggigi bagus, fast boat ke Gili lancar. HR kami sudah rencana booking lagi tahun depan.",
    image: images.avatars[5],
    location: "Medan",
  },
];

export const googleReviews: GoogleReview[] = [
  {
    id: "gr-1",
    name: "Hendra Gunawan",
    date: "2 minggu lalu",
    rating: 5,
    review:
      "Udah 3x booking di sini. Labuan Bajo terakhir jadwalnya persis kayak yang dijanjiin, kapalnya lebih bagus dari ekspektasi. Admin WhatsApp-nya jawab cepat, bahkan malam.",
    avatar: images.avatars[0],
    city: "Jakarta",
    verified: true,
  },
  {
    id: "gr-2",
    name: "Maya Sari",
    date: "1 bulan lalu",
    rating: 5,
    review:
      "Pertama booking travel online, deg-degan. Tapi semua fasilitas dijelasin detail lewat PDF itinerary. Pas berangkat, semuanya sesuai. Nggak ada drama.",
    avatar: images.avatars[1],
    city: "Bandung",
    verified: true,
  },
  {
    id: "gr-3",
    name: "Rizky Fadillah",
    date: "3 minggu lalu",
    rating: 5,
    review:
      "Bromo trip dari Surabaya. Jeep-nya nyampe hotel jam 3.15, nggak telat. Guide-nya bantu cari spot foto terbaik di kawah. Harga segini worth it buat weekend.",
    avatar: images.avatars[2],
    city: "Surabaya",
    verified: true,
  },
  {
    id: "gr-4",
    name: "Dewi Lestari",
    date: "1 bulan lalu",
    rating: 5,
    review:
      "Bawa 3 anak kecil ke Bali pakai paket keluarga mereka. Driver sabar nungguin anak capek, hotel ada kolam renang. Anak-anak happy, saya juga bisa istirahat.",
    avatar: images.avatars[3],
    city: "Denpasar",
    verified: true,
  },
];
