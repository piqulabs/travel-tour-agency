import type { Variants } from "framer-motion";

export const heroVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const heroTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const cardHover = {
  whileHover: { y: -8, scale: 1.02 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

export const defaultViewport = {
  once: true,
  margin: "-80px" as const,
};
