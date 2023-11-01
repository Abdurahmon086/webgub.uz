import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 bg-white py-[30px]'>
        <Header />
      </header>
      <Component {...pageProps} />
      <footer style={{ background: " linear-gradient(95deg, #331DA8 0%, #865AEF 100.96%)" }}>
        <Footer />
      </footer >
    </>
  )
}
