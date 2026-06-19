import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "images");

const DOWNLOADS = [
  {
    out: "hero.jpg",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=85",
  },
  {
    out: "destinations/bali.jpg",
    url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=85",
  },
  {
    out: "destinations/labuan-bajo.jpg",
    url: "https://images.unsplash.com/photo-1508920005420-82c189673623?w=1200&q=85",
  },
  {
    out: "destinations/lombok.jpg",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85",
  },
  {
    out: "destinations/raja-ampat.jpg",
    url: "https://images.pexels.com/photos/2372721/pexels-photo-2372721.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    out: "destinations/bromo.jpg",
    url: "https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?w=1200&q=85",
  },
  {
    out: "destinations/yogyakarta.jpg",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
  },
  {
    out: "gallery/01-bali-rice-terrace.jpg",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
  },
  {
    out: "gallery/02-padar-island.jpg",
    url: "https://images.unsplash.com/photo-1508920005420-82c189673623?w=1200&q=85",
  },
  {
    out: "gallery/03-raja-ampat-underwater.jpg",
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
  },
  {
    out: "gallery/04-bromo-sunrise.jpg",
    url: "https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?w=1200&q=85",
  },
  {
    out: "gallery/05-borobudur.jpg",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
  },
  {
    out: "gallery/06-lombok-beach.jpg",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85",
  },
  {
    out: "gallery/07-bali-temple.jpg",
    url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=85",
  },
  {
    out: "gallery/08-resort-pool.jpg",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85",
  },
  {
    out: "gallery/09-snorkeling.jpg",
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=1200&q=85",
  },
  {
    out: "testimonials/01.jpg",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=85",
  },
  {
    out: "testimonials/02.jpg",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=85",
  },
  {
    out: "testimonials/03.jpg",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=85",
  },
  {
    out: "testimonials/04.jpg",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=85",
  },
  {
    out: "testimonials/05.jpg",
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=85",
  },
  {
    out: "testimonials/06.jpg",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=85",
  },
];

const FALLBACKS = [
  { out: "fallback/travel.jpg", from: "hero.jpg" },
  { out: "fallback/destination.jpg", from: "destinations/bali.jpg" },
  { out: "fallback/gallery.jpg", from: "gallery/01-bali-rice-terrace.jpg" },
  { out: "fallback/avatar.jpg", from: "testimonials/01.jpg" },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) throw new Error(`File too small: ${dest}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
}

async function main() {
  console.log("Setting up images in public/images/...");
  let downloaded = 0;
  let skipped = 0;

  for (const { out, url } of DOWNLOADS) {
    const dest = path.join(imagesDir, out);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      skipped++;
      continue;
    }
    process.stdout.write(`Downloading ${out}... `);
    await download(url, dest);
    console.log("OK");
    downloaded++;
  }

  for (const { out, from } of FALLBACKS) {
    const src = path.join(imagesDir, from);
    const dest = path.join(imagesDir, out);
    if (fs.existsSync(src)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
  }

  console.log(`Done. Downloaded: ${downloaded}, Skipped (exists): ${skipped}`);
}

main().catch((err) => {
  console.error("setup:images failed:", err.message);
  process.exit(1);
});
