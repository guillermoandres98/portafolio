"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";

/* Secuencia de entrada: nombre → subtítulo → descripción → botones → iconos. Sin blur para mejor performance. */
const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

/* Sin filter blur: solo opacity + y para menor coste en GPU y mejor fluidez. */
const nameVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut, delay: 0.05 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, delay: 0.25 },
  },
};

const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut, delay: 0.5 },
  },
};

/* Segunda línea con más delay y duración para leer como dos ideas distintas. */
const descLine2Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut, delay: 0.7 },
  },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut, delay: 0.9 },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut, delay: 1.1 },
  },
};

/* Variantes simplificadas para prefers-reduced-motion: solo opacity, sin movimiento. */
const reducedName = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
const reducedSubtitle = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
};
const reducedDesc = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.2 } },
};
const reducedDescLine2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.35 } },
};
const reducedButtons = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.5 } },
};
const reducedSocial = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.65 } },
};

const SCROLL_INDICATOR_DELAY_DESKTOP = 0.7;
const SCROLL_INDICATOR_DELAY_MOBILE = 1.35;
const MOBILE_BREAKPOINT = 640;

function HeroDescription({
  descVariantsResolved,
  descLine2VariantsResolved,
}: {
  descVariantsResolved: typeof descVariants | typeof reducedDesc;
  descLine2VariantsResolved: typeof descLine2Variants | typeof reducedDescLine2;
}) {
  return (
    <motion.div
      className="mx-auto mt-5 max-w-2xl space-y-3 text-center sm:mt-6"
      variants={{ hidden: {}, visible: {} }}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={descVariantsResolved}
        className="text-sm text-muted-foreground sm:text-base"
      >
        Diseño y desarrollo plataformas web robustas con React, Next.js y Node.js, enfocadas en rendimiento, mantenibilidad y UX clara.
      </motion.p>
      <motion.p
        variants={descLine2VariantsResolved}
        className="text-sm text-muted-foreground/90 sm:text-base"
      >
        Experiencia real en sistemas productivos, soporte operativo y diagnóstico de hardware, asegurando continuidad y estabilidad en entornos de trabajo.
      </motion.p>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [scrollIndicatorDelay, setScrollIndicatorDelay] = useState(SCROLL_INDICATOR_DELAY_DESKTOP);

  const orbY = useTransform(scrollY, [0, 400], [0, -80]);
  const orbOpacity = useTransform(scrollY, [0, 300], [0.8, 0.2]);

  /* Indicador Scroll aparece más tarde en móvil para no competir con el CTA. */
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () =>
      setScrollIndicatorDelay(mql.matches ? SCROLL_INDICATOR_DELAY_MOBILE : SCROLL_INDICATOR_DELAY_DESKTOP);
    handler();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const nameVariantsResolved = reduceMotion ? reducedName : nameVariants;
  const subtitleVariantsResolved = reduceMotion ? reducedSubtitle : subtitleVariants;
  const descVariantsResolved = reduceMotion ? reducedDesc : descVariants;
  const descLine2VariantsResolved = reduceMotion ? reducedDescLine2 : descLine2Variants;
  const buttonsVariantsResolved = reduceMotion ? reducedButtons : buttonsVariants;
  const socialVariantsResolved = reduceMotion ? reducedSocial : socialVariants;

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 md:px-8 md:pt-28"
    >
      {/* Overlay gradiente suave solo en modo claro */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-primary/6 via-primary/2 to-transparent opacity-100 dark:opacity-0"
        aria-hidden
      />
      {/* Línea horizontal con respiración */}
      <div
        className="absolute left-0 right-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-line-breathe"
        aria-hidden
      />

      {/* Líneas verticales sutiles (accent futurista) */}
      <div
        className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-60"
        aria-hidden
      />
      <div
        className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-60"
        aria-hidden
      />

      {/* Gradient mesh: más orbes y profundidad (orb central con parallax) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <motion.div
          style={{ y: orbY, opacity: orbOpacity, animationDuration: "12s" }}
          className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[80px] animate-float"
        />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[400px] rounded-full bg-accent/8 blur-[100px] animate-float-slow" style={{ animationDuration: "14s" }} />
        <div className="absolute left-1/4 bottom-1/4 h-[280px] w-[350px] rounded-full bg-primary/6 blur-[90px] animate-float" style={{ animationDelay: "2s", animationDuration: "10s" }} />
        <div className="absolute right-1/3 top-1/4 h-[200px] w-[250px] rounded-full bg-accent/6 blur-[70px] animate-float-slow" style={{ animationDelay: "4s", animationDuration: "11s" }} />
        <div className="absolute left-1/3 bottom-1/3 h-[180px] w-[220px] rounded-full bg-primary/5 blur-[60px] animate-float" style={{ animationDelay: "1s", animationDuration: "9s" }} />
      </div>

      {/* Partículas pequeñas flotantes */}
      {Array.from({ length: 14 }, (_, i) => (
        <div
          key={`dot-${i}`}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-primary/35 animate-float"
          style={{
            left: `${5 + (i * 7) % 90}%`,
            top: `${8 + (i * 11) % 85}%`,
            animationDelay: `${(i * 0.4) % 5}s`,
            animationDuration: `${5 + (i % 3)}s`,
          }}
          aria-hidden
        />
      ))}

      {/* Partículas tipo estrella (parpadeo) */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`twinkle-${i}`}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary/50 animate-twinkle"
          style={{
            left: `${10 + (i * 9) % 80}%`,
            top: `${15 + (i * 8) % 70}%`,
            animationDelay: `${(i * 0.5) % 4}s`,
          }}
          aria-hidden
        />
      ))}

      {/* Círculos un poco más grandes (órbitas/estrellas) */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`orb-${i}`}
          className="pointer-events-none absolute rounded-full bg-primary/25 animate-float-slow hidden sm:block"
          style={{
            width: i % 2 === 0 ? 4 : 6,
            height: i % 2 === 0 ? 4 : 6,
            left: `${12 + (i * 15) % 76}%`,
            top: `${18 + (i * 12) % 68}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + (i % 2)}s`,
          }}
          aria-hidden
        />
      ))}

      <div className="container relative z-10 mx-auto w-full max-w-4xl px-0 sm:px-6 md:px-8 lg:px-12 min-w-0">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={{ hidden: {}, visible: {} }}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={nameVariantsResolved}
            className="mt-6 text-2xl font-bold tracking-tight text-foreground break-words sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            <span className="block">Guillermo Fuentes Vergara</span>
            <span
              className="mt-2 block h-0.5 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
              aria-hidden
            />
          </motion.h1>

          <motion.p
            variants={subtitleVariantsResolved}
            role="doc-subtitle"
            className="hero-subtitle mt-3 text-base font-medium leading-snug sm:mt-4 sm:text-lg md:mt-5 md:text-xl md:text-2xl md:max-w-2xl md:mx-auto"
          >
            Desarrollador Fullstack · Plataformas productivas &amp; Soporte TI
          </motion.p>

          <HeroDescription
            descVariantsResolved={descVariantsResolved}
            descLine2VariantsResolved={descLine2VariantsResolved}
          />

          <motion.div
            variants={buttonsVariantsResolved}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#proyectos"
              className="btn-shine btn-primary-light group inline-flex w-full min-h-[44px] max-w-[16rem] items-center justify-center gap-2 rounded-xl border border-primary bg-primary/10 px-5 py-3 font-medium text-primary shadow-[var(--glow)] sm:w-auto sm:max-w-none sm:px-6 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--glow-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contacto"
              className="btn-outline-light inline-flex w-full min-h-[44px] max-w-[16rem] items-center justify-center rounded-xl border px-5 py-3 font-medium text-foreground backdrop-blur-sm sm:w-auto sm:max-w-none sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Contacto
            </motion.a>
          </motion.div>

          <motion.div
            variants={socialVariantsResolved}
            className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4"
          >
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "#", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border/50 p-3 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-[var(--glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador Scroll: en móvil aparece más tarde y sin bounce para no competir con el CTA. */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: scrollIndicatorDelay, duration: 0.4 }}
        aria-label="Ir a Sobre mí"
        className="absolute bottom-4 left-4 min-h-[44px] min-w-[44px] justify-center sm:bottom-6 sm:left-8 z-10 flex flex-col items-start gap-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded opacity-90 max-sm:opacity-70 touch-manipulation"
      >
        <span className="text-xs font-medium">Scroll</span>
        <div className="flex flex-col items-center">
          <span className="h-10 w-px rounded-full bg-gradient-to-b from-primary/60 to-transparent animate-scroll-line" />
          <ChevronDown className="h-5 w-5 -mt-1 max-sm:[animation:none] sm:animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
}
