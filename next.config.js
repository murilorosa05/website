/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/github',       // Caminho que você quer acessar (murilo.gg/github)
        destination: 'https://github.com/murilorosa05', // URL do seu GitHub
        permanent: true,         // Redirecionamento permanente (308)
      },
    ];
  },
};

module.exports = nextConfig;