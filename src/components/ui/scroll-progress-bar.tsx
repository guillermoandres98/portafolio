"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-primary/80 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
