import type { Testimonial, GoogleReview } from "@/types";
import { images } from "@/data/images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andi Pratama",
    rating: 5,
    review:
      "Trip ke Labuan Bajo bareng Nusantara Trip beneran rapi dari awal. Kapal bersih, makan enak, guide-nya sabar banget. Anak saya sampai bilang mau balik lagi tahun depan.",
    image: images.avatars[0],
    location: "Jakarta",
  },
  {
    id: "2",
    name: "Rina Maharani",
    rating: 5,
    review:
      "Paket keluarga ke Bali 4H3M worth it banget. Hotelnya nyaman, jadwalnya nggak buru-buru, dan timnya fast response di WhatsApp. Recommended buat yang bawa anak kecil.",
    image: images.avatars[1],
    location: "Bandung",
  },
  {
    id: "3",
    name: "Dimas Saputra",
    rating: 5,
    review:
      "Pertama kali ke Raja Ampat dan langsung puas. Semua sudah diurus, tinggal foto-foto dan menikmati. Harganya transparan, nggak ada biaya tambahan yang nggak jelas.",
    image: images.avatars[2],
    location: "Surabaya",
  },
  {
    id: "4",
    name: "Siti Nurhaliza",
    rating: 5,
    review:
      "Open trip Bromo-nya seru banget. Sunrise-nya cakep, jeep-nya oke, dan grupnya asik. Cocok buat solo traveler yang mau hemat tapi tetap nyaman.",
    image: images.avatars[3],
    location: "Semarang",
  },
  {
    id: "5",
    name: "Bambang Wijaya",
    rating: 5,
    review:
      "Tour Jogja bareng istri puas semua. Borobudur pagi-pagi, Prambanan sore, plus kuliner di Malioboro. Guide-nya paham banget sejarahnya, bukan asal jalan aja.",
    image: images.avatars[4],
    location: "Yogyakarta",
  },
  {
    id: "6",
    name: "Putri Anggraini",
    rating: 5,
    review:
      "Custom trip ke Lombok sesuai request kami. Budget dijaga, itinerary fleksibel, dan timnya bantu carikan penginapan bagus di Senggigi. Pasti pakai lagi buat trip berikutnya.",
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
      "Pelayanan ramah, harga jelas, dan trip Labuan Bajo-nya sesuai itinerary. Mantap!",
    avatar: images.avatars[0],
  },
  {
    id: "gr-2",
    name: "Maya Sari",
    date: "1 bulan lalu",
    rating: 5,
    review:
      "Booking lewat WhatsApp cepat banget. Timnya detail jelasin fasilitasnya. Puas!",
    avatar: images.avatars[1],
  },
  {
    id: "gr-3",
    name: "Rizky Fadillah",
    date: "3 minggu lalu",
    rating: 5,
    review:
      "Bromo sunrise trip recommended. Jeep tepat waktu, guide berpengalaman.",
    avatar: images.avatars[2],
  },
  {
    id: "gr-4",
    name: "Dewi Lestari",
    date: "1 bulan lalu",
    rating: 5,
    review:
      "Paket Bali keluarga sangat membantu. Anak-anak happy, kami juga tenang.",
    avatar: images.avatars[3],
  },
];
