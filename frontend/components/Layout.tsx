import Head from 'next/head'
import Navbar from './Navbar'
import { Container } from './styles'

function Layout({ children }: any) {
	const name = 'GoalSetter'
	const title = 'GoalSetter'
	const description = 'A mern stack app for setting up goals'
	const keywords = 'MERN,React,Node,Express,Mongo,Goal'
	const type = 'website'
	const url = '/'
	const image = ''
	const origin = ''
	const locale = 'en'
	return (
		<>
			<Container>
				<Head>
					<meta charSet='utf-8' />
					<title>{title}</title>
					<meta name='robots' content='index, follow' />
					<meta name='description' content={description} />
					<meta name='keywords' content={keywords} />
					<meta
						property='twitter:image:src'
						content={`${origin}${image}?v=${Math.floor(Date.now() / 100)}`}
					/>
					<meta property='twitter:card' content='summary' />
					<meta property='twitter:url' content={url} />
					<meta property='twitter:title' content={title} />
					<meta property='twitter:description' content={description} />
					<meta
						property='og:image'
						content={`${origin}${image}?v=${Math.floor(Date.now() / 100)}`}
					/>
					<meta property='og:type' content={type} />
					<meta property='og:title' content={title} />
					<meta property='og:url' content={url} />
					<meta property='og:description' content={description} />
					<meta property='og:site_name' content={name} />
					<meta property='og:locale' content={locale} />
					<link rel='icon' href='/favicon.ico' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
				</Head>
				<Navbar />
				{children}
			</Container>
		</>
	)
}

export default Layout
