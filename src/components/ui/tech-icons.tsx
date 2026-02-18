"use client";

import Image from "next/image";

const size = 20;

/** Mapa slug → archivo SVG en public/icons (tema oscuro: preferir variantes light donde existan) */
const iconPaths: Record<string, string> = {
  html: "html5.svg",
  css: "css_old.svg",
  javascript: "javascript.svg",
  typescript: "typescript.svg",
  react: "react_light.svg",
  nextjs: "nextjs_icon_dark.svg",
  node: "nodejs.svg",
  mysql: "mysql-icon-light.svg",
  "sql-server": "sql-server.svg",
  postgresql: "postgresql.svg",
  mongodb: "mongodb-icon-light.svg",
  mariadb: "mariadb.svg",
  csharp: "csharp.svg",
  dotnet: "dotnet.svg",
  tailwind: "tailwindcss.svg",
  bootstrap: "bootstrap.svg",
  laravel: "laravel.svg",
  angular: "angular.svg",
};

export type TechSlug = keyof typeof iconPaths;

type TechIconProps = {
  name: TechSlug;
  className?: string;
  size?: number;
};

export function TechIcon({ name, className, size: customSize = size }: TechIconProps) {
  const filename = iconPaths[name];
  if (!filename) return null;
  return (
    <Image
      src={`/icons/${filename}`}
      alt=""
      width={customSize}
      height={customSize}
      className={className}
      aria-hidden
    />
  );
}
