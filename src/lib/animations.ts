import { Variants } from 'framer-motion';

// Refined easing curve for natural, smooth motion
export const easeEditorial = [0.16, 1, 0.3, 1] as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeEditorial,
    },
  },
};

// Horizontal scroll-triggered entrance variants
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeEditorial,
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeEditorial,
    },
  },
};

// Vertical section reveal
export const verticalSectionReveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeEditorial,
    },
  },
};

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeEditorial },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: { duration: 0.18 },
  },
};
