/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "myawsbucket-nextjscourse.s3.amazonaws.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
