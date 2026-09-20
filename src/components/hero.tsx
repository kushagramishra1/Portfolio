import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20">
      <div className="lg:col-span-7">
        <p className="rise rise-1 text-xs font-medium uppercase tracking-[0.22em] text-quiet">
          {site.role} · {site.location}
        </p>
        <h1 className="rise rise-2 mt-5 font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
          {site.name}
        </h1>
        <p className="rise rise-3 mt-6 max-w-xl text-lg text-quiet sm:text-xl">
          {site.pitch}
        </p>
        <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 pr-4 text-sm font-medium text-paper transition-transform duration-150 ease-out hover:bg-mark active:scale-[0.96]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            Email me
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-raised px-5 pr-4 text-sm font-medium text-ink transition-transform duration-150 ease-out hover:border-ink/20 active:scale-[0.96]"
          >
            View work
            <ArrowDown className="size-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <aside className="rise rise-5 flex flex-col justify-end gap-8 lg:col-span-5 lg:pl-6">
        <p className="max-w-md text-[0.975rem] leading-relaxed text-quiet">{site.summary}</p>
        <p className="text-sm font-medium text-ink">{site.availability}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-ink transition-opacity duration-150 hover:opacity-70"
            >
              <Github className="size-4" strokeWidth={1.75} />
              GitHub
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-ink transition-opacity duration-150 hover:opacity-70"
            >
              <Linkedin className="size-4" strokeWidth={1.75} />
              LinkedIn
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </a>
          </li>
          <li>
            <a
              href={site.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-ink transition-opacity duration-150 hover:opacity-70"
            >
              <FileText className="size-4" strokeWidth={1.75} />
              Resume
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </a>
          </li>
        </ul>
      </aside>
      </div>
    </section>
  );
}
