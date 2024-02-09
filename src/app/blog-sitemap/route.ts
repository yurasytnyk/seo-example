import prisma from "@/lib/prisma";
import { ENV } from "@/configs/env";

const URL = ENV.NEXT_PUBLIC_BASE_URL;

async function generateSiteMap() {
  const posts = await prisma.product.findMany();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/portfolio</loc>
     </url>
      <url>
       <loc>${URL}/blog</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
           <url>
               <loc>${`${URL}/blog/${id}`}</loc>
           </url>
         `;
       })
       .join("")}
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
