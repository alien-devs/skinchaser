import Link from "next/link"

const Statistics = () => {
    return (
        <div className="statistics">
            <div
                className="statistics_metric"
                style={{padding: "0 17px"}}
            >
                <Link href="/history">
                    <button className="primary-btn blue">
                        История игр
                    </button>
                </Link>
            </div>
            <div className="statistics_metric">
                <h2>
                    <img src="/img/wheel/bank.svg" alt="" />
                    Банк:
                </h2>
                <p>$8.61</p>
            </div>
            <div className="statistics_metric">
                <h2>
                    <img src="/img/wheel/game.svg" alt="" />в игре:
                </h2>
                <p>641</p>
            </div>
            <div className="statistics_metric">
                <h2>
                    <img src="/img/wheel/items.png" alt="" />
                    предметов:
                </h2>
                <p>52</p>
            </div>
        </div>
    )
}

export default Statistics