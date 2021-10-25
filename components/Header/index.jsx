import React from "react"
import s from "./header.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
	const router = useRouter()

	return (
		<header className={s.header}>
			<div className={s.main}>
				<div className={s.logo}>
					<img src="/img/header/logo.png" alt="" />
					<h6>
						Skin<span>chaser</span>
					</h6>
				</div>
				<div className={s.switchers}>
					<button id={s.sound} className="secondary-btn">
						<img src="/img/header/sound.svg" alt="" />
					</button>
					<button id={s.lang} className="secondary-btn">
						<img
							src="/img/general/flags/uk.png"
							alt=""
							className={s.country}
						/>
						<img src="/img/header/arrow.svg" alt="" />
					</button>
				</div>
			</div>
			<nav>
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
					<button className="primary-btn">Пополнить</button>
					<button className="primary-btn yellow">Магазин</button>
				</div>
				<div className={s.profile}>
					<div className={s.ava}>
						<img src="" alt="" />
					</div>
					<div className={s.player}>
						<Link href="/profile">
							<span className={s.name}>Tragedy</span>
						</Link>
						<span className={s.balance}>
							<img src="/img/general/coin.svg" alt="" />
							100
						</span>
					</div>
				</div>
				<div className={s.buttons}>
					<button className="secondary-btn">
						<img src="/img/header/settings.svg" alt="" />
					</button>
					<button className="secondary-btn">
						<img src="/img/header/notifications.svg" alt="" />
					</button>
					<button className="secondary-btn">
						<img src="/img/header/exit.svg" alt="" />
					</button>
				</div>
			</div>
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
