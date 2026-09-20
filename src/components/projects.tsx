import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that show how I design, ship, and explain full-stack systems."
        />
        <ol className="divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <li key={project.id} className="grid gap-6 py-10 sm:py-14 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="font-serif text-2xl text-quiet">{project.id}</p>
                <p className="mt-2 text-sm text-quiet">{project.year}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-quiet">{project.category}</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="font-serif text-2xl leading-snug tracking-tight text-ink sm:text-[1.75rem]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-quiet">
                      {project.role} · {project.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-1 rounded-full border border-line bg-raised px-3.5 pr-3 text-sm font-medium text-ink transition-transform duration-150 hover:border-ink/25 active:scale-[0.96]"
                    >
                      GitHub
                      <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center gap-1 rounded-full bg-ink px-3.5 pr-3 text-sm font-medium text-paper transition-transform duration-150 hover:bg-mark active:scale-[0.96]"
                      >
                        Live site
                        <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-quiet">{project.blurb}</p>
                <p className="mt-3 max-w-xl text-sm font-medium text-ink">{project.impact}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2.5 text-[0.975rem] leading-relaxed text-ink">
                  {project.highlights.map((point) => (
                    <li key={point} className="grid grid-cols-[auto_1fr] gap-3">
                      <span className="mt-2.5 size-1.5 rounded-full bg-mark" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
