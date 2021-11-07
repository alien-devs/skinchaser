import '../styles/main.scss'
import '../styles/adaptive.scss'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [shopOpened, setShopOpened] = useState(false)

  return <Component {...pageProps} shopOpened={shopOpened} setShopOpened={setShopOpened}/>
}

export default MyApp