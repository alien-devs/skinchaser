import { ar } from "../../../data/arrays";
import Item from "../../Item";

const Shop = () => {
	return (
		<div className="modal shop_modal">
			<div className="row">
				<h2 className="shop_modal_title">Магазин</h2>
				<img src="/img/general/vector.svg" alt="" />
			</div>
			<div className="shop_modal_cost_row">
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
			<div className="shop_modal_list">
				{ar.map((item) => (
					<Item />
                ))}
			</div>
		</div>
	);
};

export default Shop;
