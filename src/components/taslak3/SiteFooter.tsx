import Image from "next/image";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer
      id="iletisim"
      className="relative overflow-hidden border-t border-white/10 bg-[#050812] text-white"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E08000]/70 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
        <div className="lg:col-span-5">
          <Image
            src={company.logoAlt}
            alt="KAF Grup"
            width={180}
            height={32}
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
            {company.tagline}. GMP belgeli üretim altyapısı, temiz oda
            standartları ve 50+ ülkeye uzanan tedarik ağı.
          </p>
          <p className="mt-6 text-[10px] tracking-[0.24em] text-[#E08000] uppercase">
            SYS · HQ · IST
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="text-[10px] tracking-[0.22em] text-white/40 uppercase">
              Merkez
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {company.contact.address}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.22em] text-white/40 uppercase">
              İletişim
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {company.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[#E08000]">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-[#E08000]"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.22em] text-white/40 uppercase">
              Tesisler
            </p>
            <ul className="mt-3 space-y-3 text-sm text-white/75">
              {company.facilities.map((f) => (
                <li key={f.city}>
                  <span className="font-medium text-white">{f.city}</span>
                  <span className="mt-0.5 block text-xs text-white/45">{f.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-[11px] tracking-wide text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{company.legalName}</p>
          <p>© {new Date().getFullYear()} · Taslak 3 — Endüstriyel Teknoloji</p>
        </div>
      </div>
    </footer>
  );
}
