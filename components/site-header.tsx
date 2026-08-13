"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Saulėta pradinis puslapis">
        Saulėta
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Pagrindinis meniu">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link className={active ? "nav-link nav-link--active" : "nav-link"} href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
