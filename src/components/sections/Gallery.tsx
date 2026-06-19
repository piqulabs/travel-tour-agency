"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

import { images, imageAlt } from "@/data/images";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const galleryItems = images.gallery.map((src, index) => ({
  id: String(index + 1),
  src,
  alt: imageAlt.gallery[index],
  aspect: (["tall", "wide", "square", "tall", "square", "wide", "tall", "square", "wide"] as const)[index],
}));

export default function Gallery() {
  return (
    <section id="galeri" className="section-padding bg-muted/40">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="section-eyebrow">Galeri</span>
          <h2 className="section-title mt-4">
            Foto dari Trip Nyata, Bukan Stock
          </h2>
          <p className="section-desc mt-5">
            Dokumentasi tamu kami di Bali, Komodo, Bromo, dan Raja Ampat.
            Begini kira-kira pemandangan yang menanti Anda.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        >
          {galleryItems.map((image) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl"
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                category="gallery"
                context={`Gallery: ${image.alt}`}
                width={600}
                height={
                  image.aspect === "tall"
                    ? 800
                    : image.aspect === "wide"
                      ? 400
                      : 600
                }
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="image-overlay-gradient absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ZoomIn className="size-8 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
