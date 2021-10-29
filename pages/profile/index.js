import MainLayout from "../../components/MainLayout"
import Item from "../../components/Item"

const Profile = () => {
	const itemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
						<div className="profile_inventory_list">
							{itemsArray.map((key) => (
								<Item key={key}/>
							))}
						</div>
					</div>
				</div>
				<div className="profile_right">
					<div className="profile_withdraw">
						<div className="profile_withdraw_logo"></div>
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
						<img
							src="/img/profile/referal.png"
							alt=""
							style={{ marginBottom: "35px" }}
						/>
						<div className="earned">
							<h2>Заработано</h2>
							<p>$500</p>
						</div>
						<button>Забрать</button>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Profile;
