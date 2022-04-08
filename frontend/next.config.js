/** @type {import('next').NextConfig} */

const process = require('process')

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	async redirects() {
		return [
			{
				source: '/api/:path*',
				destination: `${
					process.env.SERVER_ENDPOINT
						? process.env.SERVER_ENDPOINT
						: 'http:/localhost:4000'
				}/api/:path*`,
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
