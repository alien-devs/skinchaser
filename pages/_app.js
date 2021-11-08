import '../styles/main.scss'
import '../styles/adaptive.scss'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(true)
  const [shopOpened, setShopOpened] = useState(false)

  return <Component
    {...pageProps}
    shopOpened={shopOpened}
    setShopOpened={setShopOpened}
    auth={auth}
    setAuth={setAuth}
  />
}

export default MyApp