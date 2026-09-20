export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-quiet">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
