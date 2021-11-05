import { ar } from "../../../data/arrays"
import Item from "../../Item"
import Dropdown from "../../Dropdown"
import { useEffect } from "react"

const Shop = (props) => {
	return (
		<div className="modal shop_modal">
			<img
				src="/img/general/vector.svg"
				alt=""
				className="modal-close"
				onClick={props.close}
			/>
			<h2 className="shop_modal_title">Магазин</h2>
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
				<Dropdown
					list={["Цена", "Популярность", "Тип"]}
				/>
			</div>
			<div className="shop_modal_list">
				{ar.map(() => <Item />)}
			</div>
			<button className="primary-btn blue">Подтвердить</button>
		</div>
	)
}

export default Shop
