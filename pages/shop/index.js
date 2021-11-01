import MainLayout from "../../components/MainLayout";
import { ar } from "../../data/arrays";
import Item from "../../components/Item";
import Dropdown from "../../components/Dropdown";
import Slider, { Range } from 'rc-slider';

const Shop = () => {
	return (
		<MainLayout>
			<div className="shop_page">
				<div className="shop_left">
					<h5 className="shop_left_title">Инвентарь</h5>
					<div className="shop_cost_row">
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Отдаете</h1>
							<p className="shop_cost_block_text">
								<img src="/img/general/coin.svg" />
								2000
							</p>
						</div>
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Выбрано</h1>
							<p className="shop_cost_block_text">
								<img src="/img/general/coin.svg" />
								345
							</p>
						</div>
						<div className="shop_cost_block">
							<h1 className="shop_cost_block_title">Останется</h1>
							<p className="shop_cost_block_text">
								<img src="/img/general/coin.svg" />
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
						<Dropdown list={["Цена", "Популярность", "Тип"]} />
					</div>
					<div className="shop_left_line"></div>
					<div className="shop_left_inventory">
						{ar.map((key) => (
							<Item />
						))}
					</div>
					<button
						className="primary-btn blue"
						style={{ width: "100%" }}
					>
						Подтвердить
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
							Цена <img src="/img/shop/filter.svg" alt="" />
						</p>
					</div>
					<div className="shop-filter">
						<Dropdown list={["Цена", "Тип", "Популярность"]} />
						<Dropdown list={["Тип", "Цена", "Популярность"]} />
						<Dropdown list={["Цена", "Популярность", "Тип"]} />
						<div className="shop-range">
							<Slider />
							<Range />
						</div>
					</div>
					<div className="shop_right_list">
						{ar.map((key) => (
							<Item />
						))}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Shop;
