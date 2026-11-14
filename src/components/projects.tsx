import { ArrowUpRight, BarChart3, Bot, Eye, Github, LayoutDashboard, Users } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const projectIcons = {
  workspace: Bot,
  media: Eye,
  operations: BarChart3,
  people: Users,
  portfolio: LayoutDashboard,
} as const;

const projectAccents = {
  workspace: "bg-sky-300/10 text-sky-200",
  media: "bg-rose-300/10 text-rose-200",
  operations: "bg-amber-300/10 text-amber-200",
  people: "bg-teal-300/10 text-teal-200",
  portfolio: "bg-lime-300/10 text-lime-200",
} as const;

export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Selected work · 05 projects"
          title="Products for smarter workflows, clearer decisions, and better teams."
        />
        <ol className="grid gap-4 border-y border-line py-5 md:grid-cols-2 md:gap-5">
          {projects.map((project, index) => {
            const ProjectIcon = projectIcons[project.icon];

            return (
              <li key={project.id} className={index === 0 ? "md:col-span-2" : undefined}>
                <article
                  className={`grid h-full gap-5 rounded-[6px] border border-line bg-raised/40 p-5 transition-colors duration-200 hover:border-mark/50 sm:p-6 ${
                    index === 0 ? "md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-8" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-[6px] ${projectAccents[project.icon]}`}
                        aria-hidden="true"
                      >
                        <ProjectIcon className="size-5" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-quiet">
                          {project.category}
                        </p>
                        <p className="mt-0.5 font-serif text-xs text-mark">{project.id} / 05</p>
                      </div>
                    </div>
                    <h3 className="mt-5 font-serif text-xl leading-snug text-ink sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-quiet">{project.role}</p>
                    <p className="mt-3 max-w-xl text-[0.975rem] leading-relaxed text-ink/85">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 border-b border-transparent text-sm font-medium text-ink transition-colors hover:border-mark hover:text-mark"
                      >
                        <Github className="size-4" strokeWidth={1.75} />
                        Source code
                        <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 border-b border-transparent text-sm font-medium text-ink transition-colors hover:border-mark hover:text-mark"
                      >
                        Live demo
                        <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 sm:justify-between">
                    <p className="border-l-2 border-mark/60 pl-3 text-sm leading-relaxed text-quiet">
                      {project.outcome}
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-[4px] border border-line bg-paper/60 px-2.5 py-1 text-xs font-medium text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
