import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="If you are hiring for an entry-level web role, I would like to talk."
        />
        <div className="grid gap-8 lg:grid-cols-12">
          <a
            href={`mailto:${site.email}`}
            className="group rounded-xl border border-line bg-raised p-6 transition-[border-color] duration-150 hover:border-ink/25 sm:p-8 lg:col-span-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-quiet">Email</p>
            <p className="mt-4 font-serif text-xl tracking-tight text-ink sm:text-3xl">
              {site.email}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-mark">
              Write a note
              <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
          <div className="grid gap-8 lg:col-span-4">
            <a
              href={site.phoneHref}
              className="rounded-xl border border-line bg-paper p-6 transition-[border-color] duration-150 hover:border-ink/25"
            >
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-quiet">
                <Phone className="size-3.5" strokeWidth={1.75} />
                Phone
              </p>
              <p className="mt-3 text-lg font-medium text-ink">{site.phone}</p>
            </a>
            <div className="rounded-xl border border-line bg-paper p-6">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-quiet">
                <MapPin className="size-3.5" strokeWidth={1.75} />
                Location
              </p>
              <p className="mt-3 text-lg font-medium text-ink">{site.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 pr-4 text-sm font-medium text-paper transition-transform duration-150 hover:bg-mark active:scale-[0.96]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            Email me
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-raised px-5 pr-4 text-sm font-medium text-ink transition-transform duration-150 hover:border-ink/25 active:scale-[0.96]"
          >
            Download resume
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
