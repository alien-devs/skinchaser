import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img src="/img/header/logo.png" alt="" />
                    <h6>Skin<span>chaser</span></h6>
                </div>
                <div className={styles.switchers}>
                    <button id={styles.sound} className="secondary-btn">
                        <img src="/img/header/sound.svg" alt="" />
                    </button>
                    <button id={styles.lang} className="secondary-btn">
                        <img src="/img/header/flags/uk.png" alt="" className={styles.country} />
                        <img src="/img/header/arrow.svg" alt="" />
                    </button>
                </div>
            </div>
            <nav>
                {
                    links.map((i, key) => (
                        <div
                            className={`${styles.link} ${i.active ? styles.activeLink : ""}`}
                            key={key}
                        >
                            <img src={`/img/header/${i.path}.svg`} alt="" />
                            <span>{i.name}</span>
                        </div>
                    ))
                }
            </nav>
            <div className={styles.right}>
                <div className={styles.mainButtons}>
                    <button className="primary-btn">Пополнить</button>
                    <button className="primary-btn yellow">Магазин</button>
                </div>
                <div className={styles.profile}>
                    <div className={styles.ava}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.player}>
                        <span className={styles.name}>Tragedy</span>
                        <span className={styles.balance}>
                            <img src="/img/general/coin.svg" alt="" />
                            100
                        </span>
                    </div>
                </div>
                <div className={styles.buttons}>
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
        active: true
    },
    {
        name: "Crash",
        path: "crash"
    },
    {
        name: "Crash",
        path: "crash"
    },
    {
        name: "Crash",
        path: "crash"
    },
    {
        name: "Crash",
        path: "crash"
    }
]

export default Header