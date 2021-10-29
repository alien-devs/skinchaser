import { useState } from "react";
import Head from "next/head";
import Chat from "./Chat";
import Header from "./Header";
import Deposit from "./modals/Deposit";
import Modal from "./modals/Modal";
import Settings from "./modals/Settings";
import Notification from "./modals/Notification";

const MainLayout = ({ children, hideChat, title = "Skinchaser" }) => {
	const [depositState, setDepositState] = useState(false);
	const [settingsState, setSettingsState] = useState(false);
	// const [notificationState, setNotificationState] = useState(false);

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

			{/* <Notification /> */}

			<Header
				openDepositModal={() => setDepositState(true)}
				openSettingsModal={() => setSettingsState(true)}
			/>
			<div className={`content ${hideChat ? "full-width" : ""}`}>
				<Chat />
				<main>{children}</main>
			</div>
		</>
	);
};

export default MainLayout;
