"use client";

import { motion } from "framer-motion";
import { viewportOnce, transitionSmooth } from "@/lib/motion";
import SectionFuturisticBg from "@/components/ui/section-futuristic-bg";

const professionalTitles = [
  {
    title: "Ingeniero en Informática",
    institution: "INACAP",
    description: "Certificado de título profesional.",
    onRequest: true,
  },
  {
    title: "TNS Analista Programador",
    institution: "CFT INACAP",
    description: "Certificado de título técnico de nivel superior.",
    onRequest: true,
  },
];

const courses = [
  {
    title: "Diseño web responsivo",
    description: "Certificado del curso en PDF.",
    link: "#",
  },
  {
    title: "Inglés A2",
    description: "Certificado del curso en PDF.",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificados"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <SectionFuturisticBg />
      <div className="container relative z-10 mx-auto min-w-0 px-3 sm:px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transitionSmooth}
            className="text-xl font-bold text-foreground break-words sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Certificados & Formación
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
          Formación académica y certificaciones en formato PDF.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitionSmooth, delay: 0.1 }}
          className="mx-auto mt-8 max-w-2xl rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mt-10 sm:p-5"
        >
          <p className="text-sm font-medium text-primary">Nota de privacidad</p>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
            Por seguridad, los certificados de título profesional se comparten
            únicamente bajo solicitud. Los certificados de cursos sí se
            mantienen visibles.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitionSmooth, delay: 0.15 }}
          className="mt-10 text-lg font-semibold text-primary sm:mt-14 sm:text-xl"
        >
          Títulos Profesionales
        </motion.h3>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
          {professionalTitles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-premium p-4 sm:p-6"
            >
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                ({item.institution})
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-4 inline-block rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                Disponible bajo solicitud
              </span>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitionSmooth, delay: 0.2 }}
          className="mt-10 text-lg font-semibold text-primary sm:mt-14 sm:text-xl"
        >
          Cursos
        </motion.h3>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
          {courses.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-premium p-4 sm:p-6"
            >
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <motion.a
                href={item.link}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                Ver certificado
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
