import Head from 'next/head'
import Chat from './Chat'
import Header from './Header'

const MainLayout = ({ children, title = 'Skinchaser' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <div className="content">
                <Chat />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default MainLayout