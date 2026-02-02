"use client";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Certificados", href: "#certificados" },
  { label: "Hardware", href: "#hardware" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/80 py-8 sm:py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Guillermo Fuentes. Todos los derechos reservados.
        </p>
        <nav
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 sm:gap-8"
          aria-label="Enlaces del sitio"
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
