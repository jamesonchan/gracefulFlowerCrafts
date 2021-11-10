import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import {CartContextProvider} from '../contexts/CartContextProvider'




function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
        
    </SessionProvider>

  )
}

export default MyApp
