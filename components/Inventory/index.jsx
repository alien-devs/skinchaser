import Item from "../Item"
import { ar } from "../../data/arrays"

const Inventory = () => {
    return (
        <div className="inventory">
            <div className="inventory-heading">
                <div>
                    <h5>Инвентарь</h5>
                    <span className="inventory-balance">
                        <img src="/img/general/coin.svg" alt="" />
                        54.37
                    </span>
                </div>
                <div>
                    <button className="inventory__shop-btn">
                        <img src="/img/general/shop.svg" alt="" />
                        Магазин
                    </button>
                    <div className="inventory-choose-all">
                        Выбрать всё
                        <input type="checkbox" id="chooseAll"/>
                        <label for="chooseAll"></label>
                    </div>
                </div>
            </div>
            <div className="inventory-list">
                {
                    ar.map((i, key) => (
                        <Item key={key} active={i.active}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Inventory
