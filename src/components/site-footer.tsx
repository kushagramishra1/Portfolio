import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-quiet">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-sm text-quiet">Built for recruiters — short, specific, and easy to reach.</p>
      </div>
    </footer>
  );
}
