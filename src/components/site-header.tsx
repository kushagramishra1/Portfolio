"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out",
        scrolled
          ? "border-line bg-paper/92 shadow-[0_1px_0_rgba(23,22,20,0.04)]"
          : "border-transparent bg-paper/80",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#top"
          className="flex items-center text-sm font-medium tracking-wide text-ink transition-opacity duration-150 hover:opacity-70"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-quiet transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="hidden h-10 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper transition-transform duration-150 ease-out hover:bg-mark active:scale-[0.96] sm:inline-flex"
          >
            Email
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="flex flex-col px-5 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-line font-serif text-2xl text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper"
              onClick={() => setOpen(false)}
            >
              Email me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
