import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "hellbunny.com",
      "cdn.shopify.com",
      "www.lulus.com",
      "cdn-img.prettylittlething.com",
      "avatars.githubusercontent.com",
      "s.gravatar.com",
      "content2.rozetka.com.ua",
      "content.rozetka.com.ua",
    ],
  },
  rewrites: async () => [
    {
      source: "/blog-sitemap.xml",
      destination: "/blog-sitemap",
    },
    {
      source: "/static-pages-sitemap.xml",
      destination: "/static-pages-sitemap",
    },
    {
      source: "/products-sitemap-:page.xml",
      destination: "/products-sitemap/:page",
    },
  ],
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
