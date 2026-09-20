import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-raised">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="Security fundamentals I now apply to every full-stack build."
        />
        {experience.map((job) => (
          <article
            key={job.org}
            className="rounded-xl border border-line bg-paper p-6 shadow-[0_0_0_1px_rgba(23,22,20,0.02)] sm:p-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-2xl tracking-tight text-ink">{job.role}</h3>
              <p className="text-sm text-quiet">{job.dates}</p>
            </div>
            <p className="mt-2 text-sm font-medium text-ink">
              {job.org}
              <span className="text-quiet"> · {job.place}</span>
            </p>
            <ul className="mt-6 space-y-3 text-[0.975rem] leading-relaxed text-ink">
              {job.points.map((point) => (
                <li key={point} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-2.5 size-1.5 rounded-full bg-mark" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
