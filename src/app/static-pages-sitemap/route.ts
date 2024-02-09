import { ENV } from "@/configs/env";

const ALLOWED_PAGES = [
  `${ENV.NEXT_PUBLIC_BASE_URL}`,
  `${ENV.NEXT_PUBLIC_BASE_URL}/agencies`,
  `${ENV.NEXT_PUBLIC_BASE_URL}/all-products`,
];

async function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ALLOWED_PAGES.map(
      (page) => `
      <url>
        <loc>${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `,
    ).join("")}
  </urlset>
`;
}

export async function GET() {
  const body = await generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
