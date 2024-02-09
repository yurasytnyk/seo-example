import prisma from "@/lib/prisma";
import { ENV } from "@/configs/env";

const PAGE_SIZE = 50_000;

function generateSitemap(length: number, path: string): string[] {
  return Array.from({ length }, (_, page) => {
    return `
      <sitemap>
        <loc>${ENV.NEXT_PUBLIC_BASE_URL}/${path}-${page}.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
    `;
  });
}

async function generateSiteMap() {
  const productsCount = await prisma.product.count();

  const productsTotalPages = Math.ceil(productsCount / PAGE_SIZE);

  return `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>${ENV.NEXT_PUBLIC_BASE_URL}/static-pages-sitemap.xml</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap> 
        ${generateSitemap(productsTotalPages, "products-sitemap")} 
      </sitemapindex>
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
