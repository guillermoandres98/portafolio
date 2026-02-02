"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 400], [0, -80]);
  const orbOpacity = useTransform(scrollY, [0, 300], [0.8, 0.2]);

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28"
    >
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

      <div className="container relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-12">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Guillermo Fuentes Vergara</span>
            <span
              className="mt-2 block h-0.5 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
              aria-hidden
            />
          </motion.h1>

          <motion.p
            variants={item}
            role="doc-subtitle"
            className="mt-4 text-lg font-medium text-primary/95 sm:mt-5 sm:text-xl md:text-2xl md:max-w-2xl md:mx-auto"
          >
            <span className="bg-gradient-to-r from-primary via-cyan-200/90 to-primary bg-clip-text text-transparent">
              Desarrollador Web · Conocimientos en Hardware & Soporte TI
            </span>
          </motion.p>

          <motion.div
            variants={item}
            className="mx-auto mt-5 max-w-2xl space-y-2 text-center sm:mt-6"
          >
            <p className="text-sm text-muted-foreground sm:text-base">
              Experiencias digitales con React, Next.js y Node.js. Código limpio,
              rendimiento y UX clara.
            </p>
            <p className="text-sm text-muted-foreground/90 sm:text-base">
              Desarrollo soluciones web modernas (Front-End y Back-End) y también
              manejo diagnóstico y soporte de hardware para entornos de trabajo.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#proyectos"
              className="btn-shine group inline-flex w-full max-w-[16rem] items-center justify-center gap-2 rounded-xl border border-primary bg-primary/10 px-5 py-3 font-medium text-primary sm:w-auto sm:max-w-none sm:px-6 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--glow-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contacto"
              className="inline-flex w-full max-w-[16rem] items-center justify-center rounded-xl border border-border bg-card/50 px-5 py-3 font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-sm sm:w-auto sm:max-w-none sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Contacto
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
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
                className="flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-xl border border-border/50 p-3 text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

      {/* Indicador Scroll — fijo al fondo del Hero */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        aria-label="Ir a Sobre mí"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
