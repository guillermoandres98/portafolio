"use client";

/**
 * Fondo futurista reutilizable: orbes con blur y partículas animadas.
 * Usar dentro de secciones con relative + overflow-hidden.
 */
export default function SectionFuturisticBg() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* Orbes grandes con blur */}
      <div
        className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full bg-primary/10 blur-[70px] animate-float"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />
      <div
        className="absolute right-[12%] top-[45%] h-40 w-40 rounded-full bg-accent/12 blur-[60px] animate-float-slow"
        style={{ animationDelay: "1.5s", animationDuration: "10s" }}
      />
      <div
        className="absolute left-[55%] bottom-[10%] h-44 w-44 rounded-full bg-primary/8 blur-[80px] animate-float"
        style={{ animationDelay: "3s", animationDuration: "9s" }}
      />
      {/* Partículas pequeñas */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/35 animate-twinkle"
          style={{
            left: `${12 + (i * 8) % 76}%`,
            top: `${8 + (i * 9) % 82}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`float-${i}`}
          className="absolute h-2 w-2 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${18 + (i * 11) % 64}%`,
            top: `${22 + (i * 12) % 56}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}
