import MainLayout from "../../components/MainLayout"

const Shop = () => {
	const shopArray = [
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	]

	return (
		<MainLayout>
			<div className="shop_page">
				<div className="shop_left">
					<h1 className="shop_left_title">Инвентарь</h1>
					<div className="shop_cost_row">
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Отдаете</h1>
							<p className="shop_cost_block_text">
								<img src="/img/shop/coin.png" />
								2000
							</p>
						</div>
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Выбрано</h1>
							<p className="shop_cost_block_text">
								<img src="/img/shop/coin.png" />
								345
							</p>
						</div>
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Останется</h1>
							<p className="shop_cost_block_text">
								<img src="/img/shop/coin.png" />
								1655
							</p>
						</div>
					</div>
					<div className="shop_filter">
						<input
							type="text"
							placeholder="Поиск"
							className="shop_filter_find_input"
						/>
						<input
							type="text"
							placeholder="Цена"
							className="shop_filter_cost_input"
						/>
					</div>
					<div className="shop_left_line"></div>
					<div className="shop_left_inventory">
						{
							shopArray.map(key => (
								<div className="shop_left_inventory_card" key={key}>
									<div className="shop_left_inventory_card_row">
										<p className="shop_left_inventory_cost">
											<img src="/img/shop/coin.png" alt="" />
											54.37
										</p>
										<p className="profile_inventory_state">
											Fn
										</p>
									</div>
									<img
										src="/img/profile/item.png"
										alt=""
										className="shop_left_inventory_image"
									/>
									<h2 className="shop_left_inventory_item_name">
										Tec 9
									</h2>
									<h2 className="shop_left_inventory_item_skin">
										Терсаса
									</h2>
								</div>
							))
						}
					</div>
					<button
						className="primary-btn blue"
						style={{width: "100%"}}
					>
						ПОДТВЕРДИТЬ
					</button>
				</div>
				<div className="shop_right">
					<div className="shop_right_row">
						<input
							type="text"
							className="shop_right_search_input"
							placeholder="Поиск"
						/>
						<p className="shop_right_cost">
							Цена <img src="/img/shop/cost.png" alt="" />
						</p>
					</div>
					<div className="shop_right_list">
						{
							shopArray.map(key => (
								<div className="shop_left_inventory_card" key={key}>
									<div className="shop_left_inventory_card_row">
										<p className="shop_left_inventory_cost">
											<img src="/img/shop/coin.png" alt="" />
											54.37
										</p>
										<p className="profile_inventory_state">
											Fn
										</p>
									</div>
									<img
										src="/img/profile/item.png"
										alt=""
										className="shop_left_inventory_image"
									/>
									<h2 className="shop_left_inventory_item_name">
										Tec 9
									</h2>
									<h2 className="shop_left_inventory_item_skin">
										Терсаса
									</h2>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Shop
