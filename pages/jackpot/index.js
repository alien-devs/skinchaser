import Ava from "../../components/Ava"
import Inventory from "../../components/Inventory"
import MainLayout from "../../components/MainLayout"
import Statistics from "../../components/Statistics"
import { ar } from "../../data/arrays"

const Jackpot = (props) => {
    const bets = [1, 1, 1, 1, 1]

    return (
        <MainLayout>
            <div className="jackpot-page">
                <div>
                    <Inventory
                        shopOpened={props.shopOpened}
                        setShopOpened={props.setShopOpened}
                    />
                </div>
                <div>
                    <Statistics />
                    <div className="jackpot-main">
                        <div className="jackpot-roulette grey-block">
                            <div className="jackpot-avas">
                                <ul>
                                    {
                                        ar.map(i => (
                                            <li>
                                                <img src="/img/support/logo.png" alt="" />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="jackpot-roulette__content">
                                <div>
                                    <span className="jackpot-roulette__last">
                                        Последние 100
                                    </span>
                                    <div className="jackpot-roulette__results">
                                        <span className="blue">51</span>
                                        <span className="green">34</span>
                                        <span className="yellow">23</span>
                                    </div>
                                </div>
                                <div className="status">Крутится</div>
                                <div className="jackpot-roulette__previous">
                                    <span className="blue"></span>
                                    <span></span>
                                    <span className="blue"></span>
                                    <span className="blue"></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="jackpot-block grey-block">
                            <h5>Авто-вывод</h5>
                            <div className="jackpot-block__user">
                                <div className="ava"></div>
                                <div>
                                    <span className="user-balance">
                                        <img src="/img/general/coin.svg" alt="" />
                                        100
                                    </span>
                                    <h2 className="user-name">DigitalNoxDes...</h2>
                                </div>
                            </div>
                            <button className="primary-btn disabled">Шанс 0.77%</button>
                        </div>
                        <div className="jackpot-block grey-block">
                            <h5>Пред.игра</h5>
                            <div className="jackpot-block__user">
                                <div className="ava"></div>
                                <div>
                                    <span className="user-balance">
                                        <img src="/img/general/coin.svg" alt="" />
                                        100
                                    </span>
                                    <h2 className="user-name">DigitalNoxDes...</h2>
                                </div>
                            </div>
                            <button className="primary-btn disabled">Шанс 0.77%</button>
                        </div>
                    </div>
                    <div className="jackpot-bets">
                        {
                            bets.map(i => (
                                <div className="jackpot__bet grey-block">
                                    <div className="jackpot__bet-heading">
                                        <div>
                                            <div className="ava">
                                                <Ava withBg width="43"/>
                                            </div>
                                            <h2 className="user-name">
                                                DigitalNox Design
                                            </h2>
                                            <span className="user-balance">
                                                <img src="/img/general/coin.svg" alt="" />
                                                100
                                            </span>
                                        </div>
                                        <div>
                                            <div className="jackpot-bet__chance">
                                                Шанс
                                                <span>0.77%</span>
                                            </div>
                                            <div className="jackpot-bet__ticket">
                                                Билет
                                                <span>
                                                    #166-#483
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jackpot__bet-items">
                                        <img src="/img/profile/item.png" alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Jackpot
