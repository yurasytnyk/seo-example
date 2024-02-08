import { MetadataRoute } from "next";

import { ENV } from "@/configs/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${ENV.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
