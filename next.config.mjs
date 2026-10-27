/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servicios/extracciones',
        destination: '/servicios/cirugia-oral',
        permanent: true,
      },
      {
        source: '/servicios/estetica-oral',
        destination: '/servicios/estetica-dental',
        permanent: true,
      },
      {
        source: '/servicios/ortodoncias',
        destination: '/servicios/ortodoncia',
        permanent: true,
      },
      {
        source: '/servicios/rehabilitacion-oral',
        destination: '/servicios/protesis-fija',
        permanent: true,
      },
      {
        source: '/servicios/odontologia-general',
        destination: '/servicios/evaluacion-prevencion',
        permanent: true,
      },
      {
        source: '/servicios/atencion-infantil',
        destination: '/servicios/odontopediatria',
        permanent: true,
      },
      {
        source: '/servicios/armonizacion-facial',
        destination: '/servicios/armonizacion-facial-integral',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
