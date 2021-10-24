import Head from 'next/head'
import Chat from './Chat'
import Header from './Header'
import Deposit from './modals/Deposit'
import Settings from './modals/Settings'

const MainLayout = ({ children, title = 'Skinchaser' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            {/* <Deposit /> */}
            {/* <Settings /> */}
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