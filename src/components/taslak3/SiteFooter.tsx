import Image from "next/image";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer id="iletisim" className="border-t border-[#172033]/10 bg-[#f5f7f8] text-[#172033]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
        <div className="lg:col-span-5">
          <Image src={company.logo} alt="KAF Grup" width={165} height={30} className="h-7 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-6 text-[#172033]/50">{company.tagline}. GMP belgeli üretim altyapısı, temiz oda standartları ve 50+ ülkeye uzanan tedarik ağı.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
          <div><p className="text-[10px] font-semibold tracking-[0.16em] text-[#d97800] uppercase">İletişim</p><p className="mt-3 text-sm">{company.contact.email}</p><p className="mt-2 text-sm">{company.contact.phones[0]}</p></div>
          <div><p className="text-[10px] font-semibold tracking-[0.16em] text-[#d97800] uppercase">Merkez</p><p className="mt-3 text-sm leading-6 text-[#172033]/55">{company.contact.address}</p></div>
          <div><p className="text-[10px] font-semibold tracking-[0.16em] text-[#d97800] uppercase">Tesisler</p><div className="mt-3 space-y-2 text-sm">{company.facilities.map((facility) => <p key={facility.city}><strong>{facility.city}</strong><span className="ml-2 text-[#172033]/45">{facility.role}</span></p>)}</div></div>
        </div>
      </div>
      <div className="border-t border-[#172033]/10"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-[#172033]/40 sm:flex-row sm:justify-between sm:px-8 lg:px-12"><p>{company.legalName}</p><p>© {new Date().getFullYear()} · KAF Grup</p></div></div>
    </footer>
  );
}
