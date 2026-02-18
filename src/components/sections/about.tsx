"use client";

import { motion } from "framer-motion";
import { viewportOnce, transitionSmooth } from "@/lib/motion";
import { TechIcon, type TechSlug } from "@/components/ui/tech-icons";

const skills: { name: string; slug: TechSlug }[] = [
  { name: "HTML", slug: "html" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Node.js", slug: "node" },
  { name: "MySQL", slug: "mysql" },
  { name: "SQL Server", slug: "sql-server" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MariaDB", slug: "mariadb" },
  { name: "C#", slug: "csharp" },
  { name: ".NET", slug: "dotnet" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Laravel", slug: "laravel" },
  { name: "Angular", slug: "angular" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="section-stripe relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Fondo futurista: orbes y partículas animadas */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* Orbes grandes con blur */}
        <div
          className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-[80px] animate-float"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <div
          className="absolute right-[15%] top-[50%] h-48 w-48 rounded-full bg-accent/15 blur-[70px] animate-float-slow"
          style={{ animationDelay: "1.5s", animationDuration: "10s" }}
        />
        <div
          className="absolute left-[50%] bottom-[15%] h-56 w-56 rounded-full bg-primary/8 blur-[90px] animate-float"
          style={{ animationDelay: "3s", animationDuration: "9s" }}
        />
        {/* Partículas pequeñas */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`orb-dot-${i}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/40 animate-twinkle"
            style={{
              left: `${15 + (i * 7) % 70}%`,
              top: `${10 + (i * 8) % 80}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`orb-float-${i}`}
            className="absolute h-2 w-2 rounded-full bg-primary/25 animate-float"
            style={{
              left: `${20 + (i * 9) % 60}%`,
              top: `${25 + (i * 10) % 55}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto min-w-0 px-3 sm:px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transitionSmooth}
            className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Sobre mí
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

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:mt-14 sm:gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transitionSmooth, delay: 0.05 }}
            className="flex justify-center md:justify-start"
          >
            <div className="h-32 w-32 rounded-2xl border border-primary/25 bg-card/80 backdrop-blur-sm flex items-center justify-center overflow-hidden sm:h-40 sm:w-40 md:h-48 md:w-48 card-premium shrink-0">
              <span className="text-5xl sm:text-6xl" aria-hidden>👨‍💻</span>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitionSmooth, delay: 0.1 }}
              className="text-sm text-muted-foreground leading-relaxed sm:text-base"
            >
              Soy desarrollador web e ingeniero en informática. Me enfoco en
              crear aplicaciones y sitios web con buena estructura, código
              mantenible y una experiencia de usuario clara.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transitionSmooth, delay: 0.15 }}
              className="text-sm text-muted-foreground leading-relaxed sm:text-base"
            >
              Trabajo con JavaScript, TypeScript, HTML, CSS, Node.js, React y Next.js,
              bases de datos como MySQL y SQL Server, y también C# para soluciones
              backend. Uso librerías como Tailwind CSS y Bootstrap para estilos y
              componentes. Me gusta construir proyectos reales: autenticación,
              formularios, consumo de APIs, despliegue y mantenimiento.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...transitionSmooth, delay: 0.2 }}
          className="mt-10 sm:mt-14"
        >
          <p className="mb-4 text-center text-sm text-muted-foreground sm:mb-5">
            Tecnologías con las que trabajo
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-2 min-w-0 justify-items-center gap-2 sm:gap-3 sm:grid-cols-3 md:gap-4 md:grid-cols-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.35, delay: 0.04 * i, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="card-premium flex w-full min-w-0 min-h-[44px] items-center justify-center gap-1.5 px-3 py-2.5 text-center text-xs font-medium text-foreground break-words sm:gap-2 sm:px-4 sm:py-3 sm:text-sm touch-manipulation"
              >
                <TechIcon name={skill.slug} className="shrink-0 text-primary/90" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
