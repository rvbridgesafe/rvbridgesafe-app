import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
