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
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
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
};

export default withMDX(nextConfig);
