import MainLayout from "../../components/MainLayout"
import Item from "../../components/Item"
import Dropdown from "../../components/Dropdown"
import { ar } from "../../data/arrays"

const Profile = () => {
	return (
		<MainLayout>
			<div className="profile_page">
				<div className="profile_left">
					<div className="profile_info_list">
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img src="/img/profile/games.png" alt="games" />
							</div>

							<h2 className="profile_info_card_title">
								Сыграно игр
							</h2>
							<p className="profile_info_card_text">25</p>
						</div>
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img src="/img/profile/wins.png" alt="games" />
							</div>

							<h2 className="profile_info_card_title">Побед</h2>
							<p className="profile_info_card_text">20</p>
						</div>
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img
									src="/img/profile/winrate.png"
									alt="games"
								/>
							</div>

							<h2 className="profile_info_card_title">Винрейт</h2>
							<p className="profile_info_card_text">15%</p>
						</div>
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img src="/img/profile/won.png" alt="games" />
							</div>

							<h2 className="profile_info_card_title">
								СУММА ВЫИГРЫШЕЙ
							</h2>
							<p className="profile_info_card_text">
								<img src="/img/general/coin.svg" alt="coin" />
								4653
							</p>
						</div>
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img src="/img/profile/money.png" alt="games" />
							</div>

							<h2 className="profile_info_card_title">
								ТОП ВЫИГРЫШЕЙ
							</h2>
							<p className="profile_info_card_text">20</p>
						</div>
						<div className="profile_info_card">
							<div className="profile_info_card_image_block">
								<img
									src="/img/profile/crystal.png"
									alt="games"
								/>
							</div>

							<h2 className="profile_info_card_title">
								ТОП КОЭФФИЦИЕНТ
							</h2>
							<p className="profile_info_card_text">15</p>
						</div>
					</div>
					<div className="profile_inventory">
						<Dropdown
							large
							list={[
								{
									name: "Crash",
									img: "crash.svg"
								},
								{
									name: "Jackpot",
									img: "jackpot.svg"
								},
								{
									name: "Wheel",
									img: "wheel.svg"
								}
							]}
						/>
						<div className="profile_inventory_list">
							{
								ar.map((key) => (
									<Item key={key} />
								))
							}
						</div>
					</div>
				</div>
				<div className="profile_right">
					<div className="profile_withdraw">
						<div className="profile_large-ava">
							<span className="profile-lvl">1 LvL</span>
							<img src="/img/general/ava.png" />
							<img src="/img/profile/ava-stroke.png" className="stroke"/>
						</div>
						<div className="profile_withdraw_row">
							<input
								type="text"
								placeholder="Введите ссылку на трейд"
							/>
							<button>
								<img src="/img/profile/save_icon.svg" alt="" />
							</button>
						</div>
						<button
							className="primary-btn blue"
							style={{ width: "100%" }}
						>
							РЕДАКТИРОВАТЬ ПРОФИЛЬ
						</button>
					</div>
					<div className="profile_referal">
						<h2 className="referal_title">РЕФЕРАЛЬНАЯ СИСТЕМА</h2>
						<div className="level_progress">
							<img src="/img/profile/referal.png" alt="" />
							<div className="block">
								<h2>1 LvL</h2>
								<div className="line">

								</div>
								<p>4 реф.</p>
							</div>
						</div>

						<div className="earned">
							<h2>Заработано</h2>
							<p>$500</p>
						</div>
						<button>Забрать</button>
						<div className="level">
							<div className="row">
								<h2>до 2 уровня</h2>
								<p>
									<img src="/img/general/coin.svg" />
									987 <span>/</span> 1500
								</p>
							</div>
							<div className="graph">
								<img
									src="/img/profile/medal.svg"
									alt=""
									className="graph_img"
								/>
								<div className="line big"></div>
								<div className="vertical_line default"></div>
								<div className="line"></div>
								<div className="vertical_line green"></div>
								<div className="line"></div>
								<div className="vertical_line second_green"></div>
							</div>
						</div>
						<div className="referal_footer">
							<div className="referal_footer_block">
								<h2 className="referal_footer_title">
									Ваш код:
								</h2>
								<div className="referal_footer_cont">
									<h2 className="margin">free50</h2>
									<img src="/img/profile/mark.svg" alt="" />
								</div>
							</div>
							<div className="referal_footer_block">
								<h2 className="referal_footer_title">
									Ваша ссылка:
								</h2>
								<div className="referal_footer_cont">
									<h2>https://skinbox.n...</h2>
									<img src="/img/profile/coppy.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Profile
