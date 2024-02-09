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
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
