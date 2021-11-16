import "../styles/main.scss"
import "../styles/adaptive.scss"
import { useEffect, useState } from "react"
import originalScale from "forced-original-scale"

function MyApp({ Component, pageProps }) {
    const [auth, setAuth] = useState(true)
    const [shopOpened, setShopOpened] = useState(false)

    useEffect(() => {
        originalScale("App")
    }, [])

    return (
        <div id="App">
            <Component
                {...pageProps}
                shopOpened={shopOpened}
                setShopOpened={setShopOpened}
                auth={auth}
                setAuth={setAuth}
            />
        </div>
    );
}

export default MyApp
