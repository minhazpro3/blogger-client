import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    appDir: true,
  },
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "animals.png",
      "i.ibb.co",
      "img.freepik.com",
    ],
  },
  reactStrictMode: true,
};

export default withMDX({
  ...nextConfig,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
