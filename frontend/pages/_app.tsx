import '../styles/globals.css'
import { Layout } from '../components'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
				<ToastContainer position='top-center' />
			</Layout>
		</Provider>
	)
}
