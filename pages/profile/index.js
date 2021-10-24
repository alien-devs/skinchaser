import MainLayout from "../../components/MainLayout"

const Profile = () => {
	const itemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

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
							{
								itemsArray.map(key => (
									<div
										className="profile_inventory_card"
										key={key}
									>
										<div className="profile_inventory_card_row">
											<p className="profile_inventory_cost">
												<img
													src="/img/general/coin.svg"
													alt=""
												/>
												54.37
											</p>
											<p className="profile_inventory_state">
												Fn
											</p>
										</div>
										<img
											src="/img/profile/item.png"
											alt=""
											className="profile_inventory_image"
										/>
										<h2 className="profile_inventory_item_name">
											Tec 9
										</h2>
										<h2 className="profile_inventory_item_skin">
											Терсаса
										</h2>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className="profile_right"></div>
			</div>
		</MainLayout>
	)
}

export default Profile
