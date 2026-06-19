"use client";

import { useEffect } from "react";

import { getAllImageUrls } from "@/lib/image-utils";

/**
 * Komponen dev-only: memverifikasi semua URL gambar saat halaman dimuat.
 * Mencatat ke console jika ada yang gagal (404, 403, dll).
 */
export default function ImageAudit() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const audit = async () => {
      const urls = getAllImageUrls();
      const results = await Promise.all(
        urls.map(async ({ src, context }) => {
          try {
            const res = await fetch(src, { method: "HEAD", cache: "no-store" });
            return {
              src,
              context,
              ok: res.ok,
              status: res.status,
            };
          } catch (err) {
            return {
              src,
              context,
              ok: false,
              status: 0,
              error: String(err),
            };
          }
        })
      );

      const failed = results.filter((r) => !r.ok);
      const passed = results.filter((r) => r.ok);

      console.group("[Image Audit] Hasil pemeriksaan gambar");
      console.log(`✓ Berhasil: ${passed.length}/${results.length}`);

      if (failed.length > 0) {
        console.error(`✗ Gagal: ${failed.length} gambar`);
        failed.forEach((f) =>
          console.error(`  [${f.status}] ${f.context}: ${f.src}`, f)
        );
      } else {
        console.log("Semua gambar dapat diakses (HTTP 200).");
      }
      console.groupEnd();
    };

    audit();
  }, []);

  return null;
}
