"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { viewportOnce, transitionSmooth } from "@/lib/motion";
import SectionFuturisticBg from "@/components/ui/section-futuristic-bg";

const projects = [
  {
    title: "Blog de Café",
    description:
      "Página web informativa sobre cursos de café (solo Front-end).",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
  },
  {
    title: "Escapadas al Sur",
    description:
      "Página web informativa para empresa turística de Valdivia, Chile.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
  },
  {
    title: "Sistema de caja Gustitos Pizza",
    description:
      "Sistema de caja web en Python (Flask) para negocio gastronómico. Ventas, propinas, turnos y cierres en Excel.",
    tech: ["Python", "Flask", "JavaScript"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
  },
  {
    title: "Impulsa Web",
    description:
      "Landing page profesional para desarrollo web y automatización. CTAs claros, responsive y WhatsApp.",
    tech: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
  },
  {
    title: "Clínica VerdeSonrisa",
    description:
      "Landing para clínica odontológica. Secciones informativas, especialistas y contacto vía WhatsApp.",
    tech: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
  },
  {
    title: "Proyecto en desarrollo",
    description:
      "Actualmente desarrollando este proyecto. Será publicado cuando esté terminado.",
    tech: ["React", "Next.js"],
    demoUrl: "#",
    codeUrl: "#",
    image: null,
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
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
            Mis Proyectos
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
          Algunos de mis trabajos más recientes y destacados.
        </motion.p>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-14 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-premium flex flex-col overflow-hidden"
            >
              <div className="flex h-32 items-center justify-center border-b border-border/50 bg-muted/20 sm:h-40">
                {project.comingSoon ? (
                  <span className="text-sm font-medium text-muted-foreground">
                    Próximamente
                  </span>
                ) : (
                  <span className="text-4xl opacity-40" aria-hidden>🖥️</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {project.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] text-muted-foreground sm:px-2 sm:text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                  <motion.a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-primary bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:gap-2 sm:px-4 sm:text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    Demo
                    <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:gap-2 sm:px-4 sm:text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    Código
                    <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
