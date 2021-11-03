import { useState } from "react"
import Head from "next/head"
import Chat from "./Chat"
import Header from "./Header"
import Deposit from "./modals/Deposit"
import Modal from "./modals/Modal"
import Settings from "./modals/Settings"
import Shop from "./modals/Shop"

const MainLayout = ({ children, hideChat, title = "Skinchaser", mainClass }) => {
	const [depositState, setDepositState] = useState(false)
	const [settingsState, setSettingsState] = useState(false)
	const [shopState, setShopState] = useState(false)

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			{/* МОДАЛЬНЫЕ ОКНА */}
			<Modal state={depositState} setState={setDepositState}>
				<Deposit close={() => setDepositState(false)} />
			</Modal>
			<Modal state={settingsState} setState={setSettingsState}>
				<Settings close={() => setSettingsState(false)} />
			</Modal>
			<Modal state={shopState} setState={setShopState}>
				<Shop close={() => setShopState(false)} />
			</Modal>

			<Header
				openDepositModal={() => setDepositState(true)}
				openSettingsModal={() => setSettingsState(true)}
				openShopModal={() => setShopState(true)}
			/>
			<div className={`content ${hideChat ? "full" : ""}`}>
				<Chat hide={hideChat}/>
				<main className={mainClass}>
					{children}
				</main>
			</div>
		</>
	)
}

export default MainLayout
