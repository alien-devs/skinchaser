import MainLayout from "../../components/MainLayout";
import Statistics from "../../components/Statistics";

const Crash = () => {
	return (
		<MainLayout>
			<div className="crash-page">
				<div className="crash_left"></div>
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
									<input type="number" placeholder="3.00X" />
								</div>
								<div className="crash_beted_items">
									<h2>ПРЕДМЕТОВ:</h2>
								</div>
							</div>
							<div className="crash_set_default">
								<span className="crash_set_default_card light">
									1.2x
								</span>
								<span className="crash_set_default_card dark">
									2x
								</span>
								<span className="crash_set_default_card light">
									3x
								</span>
								<span className="crash_set_default_card yellow">
									4x
								</span>
							</div>
							<div className="crash_set_line"></div>
							<div className="crash_winning">
								<div className="crash_winning_block">
									<h2>Ставка</h2>
									<img src="/img/crash/win1.png" alt="" />
								</div>
								<img
									src="/img/crash/line.png"
									alt=""
									className="crash_winning_line"
								/>
								<div className="crash_winning_block">
									<h2>ВЫИГРЫШ</h2>
									<img src="/img/crash/win2.png" alt="" />
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
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
										src="/img/crash/bet.png"
										alt=""
										style={{ marginRight: "14px" }}
									/>
									<img src="/img/crash/bet.png" alt="" />
								</div>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
										src="/img/crash/bet.png"
										alt=""
										style={{ marginRight: "14px" }}
									/>
									<img src="/img/crash/bet.png" alt="" />
								</div>
							</div>
						</div>
						<div className="crash_current_bet">
							<div className="crash_current_heading">
								<div className="card_current_bet_info">
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
									<img
										src="/img/crash/logo.png"
										alt=""
										className="crash_bet_logo"
									/>
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
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
									<img src="/img/crash/bet.png" alt="" />
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
	);
};

export default Crash;
