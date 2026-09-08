import Image from "next/image";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1f4d] bg-[#1a1f4d] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <Image
            src={company.logo}
            alt="KAF Grup"
            width={140}
            height={22}
            className="h-6 w-auto brightness-0 invert"
            unoptimized
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            {company.legalName}. GMP belgeli üretim ve uluslararası tedarik
            ağıyla medikal iş ortaklarına hizmet verir.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-[#E08000] uppercase">
              Merkez
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {company.contact.address}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-[#E08000] uppercase">
              İletişim
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-white"
                >
                  {company.contact.email}
                </a>
              </li>
              {company.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {company.shortName}</p>
          <p>Kurumsal güven tasarım taslağı</p>
        </div>
      </div>
    </footer>
  );
}
