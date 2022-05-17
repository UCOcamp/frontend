import '../styles/globals.css'
import '../styles/landing.css'
import '../styles/button.css'
import '../styles/navbar.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
