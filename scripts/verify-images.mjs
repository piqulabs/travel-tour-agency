import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const REQUIRED = [
  "hero.jpg",
  "fallback/travel.jpg",
  "fallback/destination.jpg",
  "fallback/gallery.jpg",
  "fallback/avatar.jpg",
  "destinations/bali.jpg",
  "destinations/labuan-bajo.jpg",
  "destinations/lombok.jpg",
  "destinations/raja-ampat.jpg",
  "destinations/bromo.jpg",
  "destinations/yogyakarta.jpg",
  "gallery/01-bali-rice-terrace.jpg",
  "gallery/02-padar-island.jpg",
  "gallery/03-raja-ampat-underwater.jpg",
  "gallery/04-bromo-sunrise.jpg",
  "gallery/05-borobudur.jpg",
  "gallery/06-lombok-beach.jpg",
  "gallery/07-bali-temple.jpg",
  "gallery/08-resort-pool.jpg",
  "gallery/09-snorkeling.jpg",
  "testimonials/01.jpg",
  "testimonials/02.jpg",
  "testimonials/03.jpg",
  "testimonials/04.jpg",
  "testimonials/05.jpg",
  "testimonials/06.jpg",
];

let failed = 0;

console.log("Verifying local image files...");
for (const rel of REQUIRED) {
  const file = path.join(imagesDir, rel);
  if (!fs.existsSync(file)) {
    console.error(`MISSING: ${rel}`);
    failed++;
    continue;
  }
  const size = fs.statSync(file).size;
  if (size < 1000) {
    console.error(`TOO SMALL (${size}b): ${rel}`);
    failed++;
    continue;
  }
  const buf = fs.readFileSync(file);
  if (buf[0] !== 0xff || buf[1] !== 0xd8) {
    console.error(`NOT JPEG: ${rel}`);
    failed++;
    continue;
  }
  console.log(`OK ${rel} (${size} bytes)`);
}

const baseUrl = process.env.IMAGE_VERIFY_URL || "http://localhost:3000";
console.log(`\nVerifying HTTP access via ${baseUrl}...`);

for (const rel of REQUIRED) {
  const url = `${baseUrl}/images/${rel}`;
  try {
    const res = await fetch(url, { method: "HEAD" });
    if (!res.ok) {
      console.error(`HTTP ${res.status}: /images/${rel}`);
      failed++;
    }
  } catch (err) {
    console.warn(`SKIP HTTP /images/${rel} (server not running?)`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} verification error(s). Run: npm run setup:images`);
  process.exit(1);
}

console.log("\nAll images verified successfully.");
