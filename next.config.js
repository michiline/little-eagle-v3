/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'hr'],
		defaultLocale: 'en',
	},
	images: {
		domains: [
			'littleeagle.s3.eu-central-1.amazonaws.com',
			'littleeaglephoto.s3.eu-central-1.amazonaws.com',
		],
	},
}

module.exports = nextConfig
