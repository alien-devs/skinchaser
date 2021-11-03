import { useState, useRef } from "react"
import s from "./header.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import Notification from "../modals/Notification"
import { useOnClickOutside } from "../../lib/hooks"

const Header = (props) => {
	const [sound, setSound] = useState(true)
	const [menu, setMenu] = useState(false)
	const [notifications, setNotifications] = useState(false)
	const router = useRouter()

	const notificationRef = useRef()
	useOnClickOutside(notificationRef, () => setNotifications(false))

	return (
		<header className={s.header}>
			<div className={s.main}>
				<Link href="/crash">
					<div className={s.logo}>
						<img src="/img/header/logo.png" alt="" />
						<h6>
							Skin<span>chaser</span>
						</h6>
					</div>
				</Link>
				<div className={s.switchers}>
					<button
						id={s.sound}
						className="secondary-btn"
						onClick={() => setSound(!sound)}
					>
						<img src={`/img/header/sound${sound ? "" : "-off"}.svg`} alt="" />
					</button>
					<button id={s.lang} className="secondary-btn">
						<img
							src="/img/general/flags/uk.png"
							alt=""
							className={s.country}
						/>
						<img src="/img/general/arrow.svg" alt="" />
					</button>
				</div>
			</div>
			<div className={s.burger} onClick={() => setMenu(!menu)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={menu && s.opened}>
				{
					links.map((i, key) => (
						<Link href={`/${i.path}`} key={key}>
							<div
								className={`${s.link} ${router.pathname == `/${i.path}` ? s.activeLink : ""}`}
							>
								<img src={`/img/header/${i.path}.svg`} alt="" />
								<span>{i.name}</span>
							</div>
						</Link>
					))
				}
			</nav>
			<div className={s.right}>
				<div className={s.mainButtons}>
					<button
						className="primary-btn"
						onClick={props.openDepositModal}
					>Пополнить</button>
					<button
						className="primary-btn yellow"
						onClick={props.openShopModal}
					>Магазин</button>
				</div>
				<div className={s.profile}>
					<Link href="/profile">
						<div className={s.ava}>
							<img src="/img/general/ava.png" alt="" />
						</div>
					</Link>
					<div className={s.player}>
						<Link href="/profile">
							<span className={s.name}>DigitalNox Design</span>
						</Link>
						<span className={s.balance}>
							<img src="/img/general/coin.svg" alt="" />
							100
						</span>
					</div>
				</div>
				<div className={s.buttons}>
					<button
						className="secondary-btn"
						onClick={props.openSettingsModal}
					>
						<img src="/img/header/settings.svg" alt="" />
					</button>
					<div ref={notificationRef} className={s.notifications}>
						<button className="secondary-btn" onClick={() => setNotifications(!notifications)}>
							<img src="/img/header/notifications.svg" alt="" />
						</button>
						<Notification
							state={notifications}
						/>
					</div>
					<button className="secondary-btn">
						<img src="/img/header/exit.svg" alt="" />
					</button>
				</div>
			</div>
			{/* <button className="auth-btn primary-btn">
				<img src="/img/general/steam.svg" />
				Авторизация
			</button> */}
		</header>
	)
}

const links = [
	{
		name: "Crash",
		path: "crash",
		active: true,
	},
	{
		name: "Wheel",
		path: "wheel",
	},
	{
		name: "Jackpot",
		path: "jackpot",
	},
	{
		name: "FAQ",
		path: "faq",
	},
	{
		name: "Поддержка",
		path: "support",
	},
]

export default Header
