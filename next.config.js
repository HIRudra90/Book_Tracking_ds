/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Explicitly pin the root to THIS folder
    root: __dirname,
  },
};
module.exports = nextConfig;
