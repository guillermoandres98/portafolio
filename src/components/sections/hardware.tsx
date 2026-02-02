"use client";

import { motion } from "framer-motion";
import { Cpu, Settings } from "lucide-react";
import { viewportOnce, transitionSmooth } from "@/lib/motion";
import SectionFuturisticBg from "@/components/ui/section-futuristic-bg";

const cards = [
  {
    icon: Cpu,
    title: "Diagnóstico y Mantención",
    items: [
      "Identificación de cuellos de botella (CPU/RAM/Disco/GPU)",
      "Optimización de rendimiento en Windows",
      "Limpieza, revisión de temperaturas y estabilidad",
      "Instalación de drivers y resolución de errores comunes",
    ],
  },
  {
    icon: Settings,
    title: "Upgrades y Configuración",
    items: [
      "Armado y upgrades (SSD, RAM, GPU, fuente, etc.)",
      "Configuración BIOS/UEFI, Secure Boot y arranque",
      "Instalación de sistemas operativos y herramientas",
      "Recomendaciones de componentes según presupuesto",
    ],
  },
];

export default function Hardware() {
  return (
    <section
      id="hardware"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <SectionFuturisticBg />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transitionSmooth}
            className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
          >
            Hardware{" "}
            <span className="text-primary">& Soporte TI</span>
          </motion.h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-2 block h-0.5 w-20 mx-auto rounded-full bg-primary/60 origin-center"
            aria-hidden
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitionSmooth, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:mt-4 sm:text-base"
        >
          Conocimientos complementarios para mantener equipos optimizados y
          listos para trabajar.
        </motion.p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-premium p-4 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-primary/25 bg-primary/10 p-2.5 shrink-0">
                  <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{title}</h3>
              </div>
              <ul className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
                {items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
