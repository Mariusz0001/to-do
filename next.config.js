/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["avatar.oxro.io",
              "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
