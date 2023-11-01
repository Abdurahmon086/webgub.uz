import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />

<<<<<<< HEAD
=======
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 bg-white py-[30px]'>
        <Header />
      </header>
      <Component {...pageProps} />
      <footer style={{ background: "linear-gradient(95deg, #331DA8 0%, #865AEF 100.96%)" }}>
        <Footer />
      </footer >
    </>
  )
>>>>>>> 7d4a15f0eec41e200fc15c7992fff95e7dfdfe05
}
