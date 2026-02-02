"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { viewportOnce, transitionSmooth } from "@/lib/motion";
import SectionFuturisticBg from "@/components/ui/section-futuristic-bg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "guillermo@ejemplo.com" },
  { icon: Phone, label: "Teléfono", value: "+56 9 1234 5678" },
  { icon: MapPin, label: "Ubicación", value: "Valdivia, Chile" },
];

export default function Contact() {
  return (
    <section
      id="contacto"
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
            Contáctame
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
          ¿Tienes un proyecto en mente? Estoy abierto a discutir nuevas
          oportunidades.
        </motion.p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:mt-14 sm:gap-10 md:grid-cols-2 md:items-start md:gap-12">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transitionSmooth}
            className="space-y-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm sm:space-y-5 sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="input-focus mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:mt-2 min-h-[2.75rem]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="input-focus mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:mt-2 min-h-[2.75rem]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground"
              >
                Teléfono / WhatsApp (opcional)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Ej: +56 9 1234 5678"
                className="input-focus mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:mt-2 min-h-[2.75rem]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tu mensaje..."
                className="input-focus mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:mt-2 min-h-[6rem]"
              />
            </div>
            <motion.button
              type="submit"
              className="btn-shine w-full rounded-xl border border-primary bg-primary/10 py-3 font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[2.75rem]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              Enviar mensaje
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transitionSmooth, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm sm:p-6"
          >
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Información de contacto
            </h3>
            <ul className="mt-5 space-y-4 sm:mt-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/5 p-2.5">
                    <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="truncate text-sm font-medium text-foreground sm:text-base">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Redes
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
