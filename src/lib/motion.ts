/** Configuración compartida para animaciones de scroll (Framer Motion) */
export const viewportOnce = { once: true, margin: "-40px" as const };
export const transitionSmooth = {
  duration: 0.5,
  ease: [0.22, 0.61, 0.36, 1] as const, // easeOut cubic-bezier
};
export const transitionFast = {
  duration: 0.35,
  ease: [0.22, 0.61, 0.36, 1] as const,
};
