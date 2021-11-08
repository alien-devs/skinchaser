import MainLayout from "../../components/MainLayout"
import Statistics from "../../components/Statistics"
import Inventory from "../../components/Inventory"
import { useState } from "react"
import Ava from "../../components/Ava"

const UnauthCrash = () => {
	return (
		<div className="empty-crash">
			<img src="/img/crash/anime.png" alt="" />
			<p>Авторизуйтесь чтобы сделать ставку</p>
		</div>
	)
}

const Crash = (props) => {
	const [x, setX] = useState(3)

	return (
		<MainLayout
			shopOpened={props.shopOpened}
			auth={props.auth}
			setAuth={props.setAuth}
		>
			<div className="crash-page">
				<div className="crash_left">
					<div className={!props.auth && "not-auth-crash"}>
						<div className="crash_bet">
							{
								props.auth ? <>
									<div className="topSide">
										<div className="gallery">
											<img src="/img/crash/m4.png" alt="" />
											<img src="/img/crash/m4.png" alt="" />
											<img src="/img/crash/m4.png" alt="" />
										</div>
										<h2>M4A4</h2>
										<p>Магний</p>
									</div>
									<div className="line"></div>
									<div className="bottomSide">
										<div className="arrow">
											<svg
												width="9"
												height="14"
												viewBox="0 0 9 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.77733 0.527405L0.305664 6.99999L6.77733 13.4726L8.7225 11.5274L4.19416 6.99999L8.7225 2.47257L6.77733 0.527405Z"
													fill="#8A8C8D"
												/>
											</svg>
										</div>
										<div className="counter">8/20</div>
										<div className="arrow">
											<svg
												width="9"
												height="14"
												viewBox="0 0 9 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M2.22267 0.527405L8.69434 6.99999L2.22267 13.4726L0.277502 11.5274L4.80584 6.99999L0.277502 2.47257L2.22267 0.527405Z"
													fill="white"
												/>
											</svg>
										</div>
									</div>
								</> : <UnauthCrash />
							}
						</div>
						<Inventory
							shopOpened={props.shopOpened}
							setShopOpened={props.setShopOpened}
							auth={props.auth}
							setAuth={props.setAuth}
						/>
					</div>
				</div>
				<div className="crash_right">
					<Statistics />
					<div className="crash_row">
						<div className="crash_main">
							<div className="crash_prev_bets">
								<span className="crash_prev_bet blue">
									1.5x
								</span>
								<span className="crash_prev_bet purple">
									2.56x
								</span>
								<span className="crash_prev_bet pink">
									4.12x
								</span>
								<span className="crash_prev_bet yellow">
									1.00x
								</span>
								<span className="crash_prev_bet blue">
									1.5x
								</span>
								<span className="crash_prev_bet purple">
									2.56x
								</span>
								<span className="crash_prev_bet pink">
									4.12x
								</span>
								<span className="crash_prev_bet yellow">
									1.00x
								</span>
							</div>
							<span className="crash_bet_know">1.5x</span>
						</div>
						<div className="crash_set_bet">
							<div className="crash_set_bet_row">
								<div className="crash_autostop">
									<h5>АВТО-ВЫВОД</h5>
									<input type="number" placeholder={`${x}X`} />
								</div>
								<div className="crash_beted_items">
									<h2>ПРЕДМЕТОВ:</h2>
								</div>
							</div>
							<div className="crash_set_default">
								<span className="crash_set_default_card" onClick={() => setX(1.2)}>
									1.2x
								</span>
								<span className="crash_set_default_card" onClick={() => setX(2)}>
									2x
								</span>
								<span className="crash_set_default_card" onClick={() => setX(3)}>
									3x
								</span>
								<span className="crash_set_default_card yellow" onClick={() => setX(4)}>
									4x
								</span>
							</div>
							<div className="crash_set_line"></div>
							<div className="crash_winning">
								<div className="crash_winning_block">
									<h2>Ставка</h2>
									<div className="counter_block">
										<img src="/img/crash/auto_image1.png" alt="" />
										<span>1000</span>
										<img src="/img/crash/auto_image2.png" alt="" />
									</div>
								</div>
								<img
									src="/img/crash/line.png"
									alt=""
									className="crash_winning_line"
								/>
								<div className="crash_winning_block">
									<h2>ВЫИГРЫШ</h2>
									<div className="counter_block">
										<img src="/img/crash/auto_image1.png" alt="" />
										<span className="glow">1000</span>
										<img src="/img/crash/auto_image2.png" alt="" />
									</div>
								</div>
							</div>
							<button
								className="primary-btn blue"
								style={{ width: "100%   " }}
							>
								СДЕЛАТЬ СТАВКУ
							</button>
						</div>
					</div>
					<div className="crash_current_bets">
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer green">
								<div className="crash_current_column">
									<h2 className="ratio">1.5 x</h2>
									<span>
										<img
											src="/img/general/coin.svg"
											alt=""
										/>
										2 393
									</span>
								</div>
								<div>
									<img
										src="/img/crash/item.png"
										alt=""
										className="cs-skin"
									/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer red">
								<div className="crash_current_column">
									<h2 className="ratio">1.5 x</h2>
									<span>
										<img
											src="/img/general/coin.svg"
											alt=""
										/>
										2 393
									</span>
								</div>
								<div>
									<img
										src="/img/crash/item.png"
										alt=""
										className="cs-skin pink"
									/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
								</div>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer">
								<button className="crash_current_btn">
									<img src="img/crash/button_icon.svg" />
									Ставка в раунде
								</button>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer">
								<button className="crash_current_btn">
									<img src="img/crash/button_icon.svg" />
									Ставка в раунде
								</button>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer">
								<button className="crash_current_btn">
									<img src="img/crash/button_icon.svg" />
									Ставка в раунде
								</button>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<Ava withBg/>
									<div className="card_current_bet_stats">
										<h2 className="crash_bet_nickname">
											DigitalNox Design
										</h2>
										<span>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 517
										</span>
									</div>
								</div>
								<div className="card_current_bet_row">
									<img src="/img/crash/item.png" alt="" className="cs-skin milspec"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin pink"/>
									<img src="/img/crash/item.png" alt="" className="cs-skin gold"/>
								</div>
							</div>
							<div className="crash_current_footer">
								<button className="crash_current_btn">
									<img src="img/crash/button_icon.svg" />
									Ставка в раунде
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Crash
