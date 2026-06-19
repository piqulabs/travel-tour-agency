import type { Variants } from "framer-motion";

export const heroVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const heroTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const cardHover = {
  whileHover: { y: -10, scale: 1.015 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

export const premiumCardHover = {
  whileHover: { y: -12 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

export const buttonHover = {
  whileHover: { scale: 1.03, y: -1 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};

export const defaultViewport = {
  once: true,
  margin: "-60px" as const,
};
