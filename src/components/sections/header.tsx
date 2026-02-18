"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Award, Cpu, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Sobre mí", href: "#sobre-mi", icon: User },
  { label: "Certificados", href: "#certificados", icon: Award },
  { label: "Hardware", href: "#hardware", icon: Cpu },
  { label: "Proyectos", href: "#proyectos", icon: FolderGit2 },
  { label: "Contacto", href: "#contacto", icon: Mail },
];

const NAV_BREAKPOINT = 768; // md

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBgOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(34, 211, 238, 0)", "rgba(34, 211, 238, 0.25)"]
  );

  // Cerrar menú al cambiar a desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= NAV_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        style={{ borderBottomColor: borderColor }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent backdrop-blur-xl"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-background"
          style={{ opacity: headerBgOpacity }}
        />
        <div className="container relative z-10 mx-auto flex h-14 min-h-[3.5rem] min-w-0 items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4 sm:h-16 md:px-6 lg:px-8">
          <motion.a
            href="#inicio"
            className={cn(
              "flex h-10 w-10 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-sm font-bold tracking-widest text-primary shadow-[var(--glow)] transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:shadow-[var(--glow-strong)] sm:h-10 sm:w-10 sm:text-base md:opacity-100 md:pointer-events-auto touch-manipulation",
              menuOpen && "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={closeMenu}
          >
            GF
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:gap-1 lg:gap-2" aria-label="Navegación principal">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link-light relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5 lg:px-4",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Toggle tema: visible en desktop al final del header */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Toggle tema en móvil + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
          </div>
          <motion.button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border/50 bg-card/30 text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary md:hidden touch-manipulation"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Overlay + menú móvil */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex md:hidden"
          >
            <motion.div
              role="presentation"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              onClick={closeMenu}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="relative ml-auto flex h-full w-full max-w-[min(20rem,100vw)] flex-col border-l border-primary/20 bg-card/98 shadow-[-8px_0_32px_rgba(0,0,0,0.15)] dark:shadow-[-8px_0_32px_rgba(0,0,0,0.4)] backdrop-blur-xl min-w-0"
              aria-label="Menú principal"
            >
              {/* Fondo sutil futurista dentro del drawer */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-l-lg" aria-hidden>
                <div className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
                <div className="absolute -left-10 bottom-1/3 h-32 w-32 rounded-full bg-accent/10 blur-[50px]" />
              </div>

              {/* Cabecera del drawer: logo + toggle tema */}
              <div className="relative z-10 flex items-center justify-between border-b border-border/50 px-5 py-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/15 text-base font-bold tracking-widest text-primary shadow-[var(--glow)]"
                  aria-hidden
                >
                  GF
                </span>
                <ThemeToggle className="h-11 w-11 sm:h-10 sm:w-10" />
              </div>

              <nav className="relative z-10 flex flex-1 flex-col gap-1.5 p-4 pt-6">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (i + 1), duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      className={cn(
                        "flex min-h-[44px] items-center gap-3 rounded-xl border border-border/40 px-4 py-3.5 text-base font-medium text-foreground touch-manipulation",
                        "transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        "active:scale-[0.98]"
                      )}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-primary/80" aria-hidden />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
