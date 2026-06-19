"use client";

import { useEffect, useRef, useState } from "react";
import SafeImage from "@/components/shared/SafeImage";
import {
  motion,
  useInView,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";

import type { Stat } from "@/types";
import { images } from "@/data/images";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const stats: Stat[] = [
  { id: "travelers", value: 10000, suffix: "+", label: "Tamu Berangkat" },
  { id: "packages", value: 500, suffix: "+", label: "Trip Terjadwal" },
  { id: "destinations", value: 50, suffix: "+", label: "Rute Indonesia" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Booking Ulang" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest.toLocaleString("id-ID"));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-primary py-14 sm:py-20">
      <SafeImage
        src={images.hero}
        alt=""
        category="hero"
        context="Stats background"
        fill
        className="object-cover opacity-15"
        sizes="100vw"
        aria-hidden
      />
      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="font-heading text-3xl leading-none tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/75 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
