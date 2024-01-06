/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { // 外部の画像をImageで使うための設定
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/**',
            },
        ],
    }
}

module.exports = nextConfig
