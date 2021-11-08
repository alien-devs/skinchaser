import Inventory from "../../components/Inventory"
import MainLayout from "../../components/MainLayout"
import Statistics from "../../components/Statistics"
import { ar } from "../../data/arrays"

const Wheel = (props) => {
	return (
		<MainLayout
			auth={props.auth}
			setAuth={props.setAuth}
		>
			<div className="wheel-page">
				<div className="wheel_left">
					<div className="wheel_ratio_choose">
						<h2 className="wheel_ratio_title">
							ВЫБЕРИТЕ КОЭФФИЕНТ
						</h2>
						<div className="wheel_ratio_block">
							<img src="/img/wheel/ratio_ship.png" alt="" />
							<h2>3x</h2>
						</div>
						<div className="wheel_ratio_options">
							<div className="wheel_option orange">
								<h2>4x</h2>
							</div>
							<div className="wheel_option green">
								<h2>5x</h2>
							</div>
							<div className="wheel_option blue">
								<h2>10x</h2>
							</div>
							<div className="wheel_option cyan">
								<h2>50x</h2>
							</div>
						</div>
						<button
							className="primary-btn yellow"
							style={{ width: "100%" }}
						>
							СДЕЛАТЬ СТАВКУ
						</button>
					</div>
					<Inventory
						shopOpened={props.shopOpened}
						setShopOpened={props.setShopOpened}
					/>
				</div>
				<div className="wheel_right">
					<Statistics />
					<div className="wheel_main">
						<span className="wheel-random">Победитель определяется через сервис random.org</span>
						<span className="wheel-hash">Хэш 144ed5a8419efdd4fcbde1f66712fb4b0fe5d8ea67d126cdad41e9e99cb7f98f</span>

						<div className="wheel-main__content">
							<img src="/img/wheel/drum.png" alt="" />
							<div>
								<span className="wheel-winner">Победитель</span>
								<span className="wheel-cur-ratio">3Х</span>
								<div className="wheel-last">
									<span className="red"></span>
									<span className="blue"></span>
									<span className="purple"></span>
									<span className="red"></span>
									<span className="blue"></span>
									<span className="purple"></span>
									<span className="red"></span>
									<span className="blue"></span>
									<span className="purple"></span>
									<span className="red"></span>
									<span className="blue"></span>
									<span className="green"></span>
									<span className="purple"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wheel_bets">
						<div className="wheel_bet">
							<div className="wheel_bet_heading">
								<h2>Ставка 2X</h2>
								<p>
									<img src="/img/general/coin.svg" alt="" />1
									945
								</p>
							</div>
							<div className="wheel_bet_main">
								{ar.map((key) => (
									<div className="wheel_bet_row" key={key}>
										<div className="wheel_bet_row_left">
											<img
												src="/img/wheel/avatar.png"
												alt=""
												className="bet_user_logo"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
												className="bet_image"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
											/>
											<span className="wheel_bet_more">
												+3
											</span>
										</div>
										<p>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 945
										</p>
									</div>
								))}
							</div>
						</div>
                        <div className="wheel_bet">
							<div className="wheel_bet_heading blue">
								<h2 className="white">Ставка 3X <img src="/img/wheel/win_ratio.png" alt="" /></h2>
								<p className="white">
									<img src="/img/general/coin.svg" alt="" />1
									945
								</p>
							</div>
							<div className="wheel_bet_main">
								{ar.map((key) => (
									<div className="wheel_bet_row" key={key}>
										<div className="wheel_bet_row_left">
											<img
												src="/img/wheel/avatar.png"
												alt=""
												className="bet_user_logo"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
												className="bet_image"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
											/>
											<span className="wheel_bet_more">
												+3
											</span>
										</div>
										<p>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 945
										</p>
									</div>
								))}
							</div>
						</div>
                        <div className="wheel_bet">
							<div className="wheel_bet_heading">
								<h2>Ставка 2X</h2>
								<p>
									<img src="/img/general/coin.svg" alt="" />1
									945
								</p>
							</div>
							<div className="wheel_bet_main">
								{ar.map((key) => (
									<div className="wheel_bet_row" key={key}>
										<div className="wheel_bet_row_left">
											<img
												src="/img/wheel/avatar.png"
												alt=""
												className="bet_user_logo"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
												className="bet_image"
											/>
											<img
												src="/img/wheel/bet.png"
												alt=""
											/>
											<span className="wheel_bet_more">
												+3
											</span>
										</div>
										<p>
											<img
												src="/img/general/coin.svg"
												alt=""
											/>
											1 945
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Wheel