import { Organization, WithContext } from "schema-dts";

export const ORGANIZATION_SCHEMA: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Seo Corporation",
  description: "Dynamic at the speed of static.",
  image: "https://nextjs.org/imgs/sticker.png",
};
