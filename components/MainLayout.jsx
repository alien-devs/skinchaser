import { useState } from "react"
import Head from "next/head"
import Chat from "./Chat"
import Header from "./Header"
import Deposit from "./modals/Deposit"
import Modal from "./modals/Modal"
import Settings from "./modals/Settings"

const MainLayout = ({ children, hideChat, title = "Skinchaser", mainClass, shopOpened, auth, setAuth }) => {
	const [depositState, setDepositState] = useState(false)
	const [settingsState, setSettingsState] = useState(false)

	// if (typeof window !== "undefined") {
	// 	let scaling = window.devicePixelRatio
	// 	document.body.style.zoom = 1 / scaling;
	// }

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div className={`wrapper ${shopOpened ? "shop-opened" : ""}`}>
				{/* МОДАЛЬНЫЕ ОКНА */}
				<Modal state={depositState} setState={setDepositState}>
					<Deposit close={() => setDepositState(false)} />
				</Modal>
				<Modal state={settingsState} setState={setSettingsState}>
					<Settings close={() => setSettingsState(false)} />
				</Modal>

				<Header
					openDepositModal={() => setDepositState(true)}
					openSettingsModal={() => setSettingsState(true)}
					auth={auth}
					setAuth={setAuth}
				/>
				<div className={`content ${hideChat ? "full" : ""}`}>
					<Chat hide={hideChat}/>
					<main className={mainClass}>
						{children}
					</main>
				</div>
			</div>
		</>
	)
}

export default MainLayout
