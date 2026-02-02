"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setVisible(v > SHOW_AFTER_PX);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#inicio"
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-background/90 text-primary shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8 md:h-12 md:w-12"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
