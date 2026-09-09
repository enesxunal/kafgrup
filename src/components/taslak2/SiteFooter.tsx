import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-black bg-[#111111] text-[#f7f5f1]">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:px-12">
        <p className="font-[family-name:var(--font-fraunces)] text-3xl tracking-tight sm:text-4xl">
          KAF Grup
        </p>
        <p className="mt-2 text-sm tracking-[0.2em] text-white/40 uppercase">
          Medikal ürün portföyü
        </p>
        <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm text-base leading-relaxed text-white/55">
            <p>{company.contact.email}</p>
            <p className="mt-2">{company.contact.phones[0]}</p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            {company.contact.address}
          </p>
        </div>
        <p className="mt-10 text-xs text-white/30">
          © {new Date().getFullYear()} · KAF Grup medikal ürün kataloğu
        </p>
      </div>
    </footer>
  );
}
