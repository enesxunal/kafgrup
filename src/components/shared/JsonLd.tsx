import { faqSchema, organizationSchema } from "@/lib/schema";
import { companyFaqs } from "@/data/seo-architecture";

/** Server-safe JSON-LD injector for future production pages. */
export function JsonLd({ data }: { data: Record<string, unknown> | object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Demo schemas included on the presentation hub to show the architecture. */
export function PresentationSchema() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema([...companyFaqs])} />
    </>
  );
}
