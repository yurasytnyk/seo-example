import { ENV } from "@/configs/env";

const DATA = [
  {
    leaseType: "rent",
    date: "2023-09-03T07:12:22.437Z",
  },
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${DATA.map(({ leaseType, date }) => {
      return `
      <loc>${ENV.NEXT_PUBLIC_BASE_URL}/${leaseType}</loc>
    <lastmod>${date}</lastmod>`;
    })}
  </urlset>
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
