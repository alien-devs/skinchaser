import Item from "../Item"

const Inventory = () => {
    const itemsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

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
                    </div>
                </div>
            </div>
            <div className="inventory-list">
                {
                    itemsArray.map((i, key) => (
                        <Item key={key}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Inventory
