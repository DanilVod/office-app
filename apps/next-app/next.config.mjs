import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = withTM(['@repo/ui'])({
  reactStrictMode: true,
});

export default nextConfig;
