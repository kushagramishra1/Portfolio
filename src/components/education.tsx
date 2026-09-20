import { activities, certifications, education } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="border-t border-line bg-raised">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Background"
          title="Computer science fundamentals, plus a habit of shipping."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-sm text-quiet">{education.dates}</p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">{education.degree}</h3>
            <p className="mt-2 text-sm font-medium text-ink">{education.school}</p>
            <p className="mt-1 text-sm text-quiet">
              {education.place} · {education.gpa}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-quiet">
              Coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-6">
            <article className="rounded-xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-serif text-2xl tracking-tight text-ink">Certifications</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink">
                {certifications.map((item) => (
                  <li key={item} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-mark" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-serif text-2xl tracking-tight text-ink">Leadership</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink">
                {activities.map((item) => (
                  <li key={item} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-mark" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
