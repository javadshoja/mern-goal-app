import '../styles/globals.css'
import { Layout } from '../components'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
