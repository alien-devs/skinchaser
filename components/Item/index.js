const Item = () => {
    return (
        <div
            className="item_card"
        >
            <div className="item_card_row">
                <p className="item_cost">
                    <img
                        src="/img/general/coin.svg"
                        alt=""
                    />
                    54.37
                </p>
                <p className="item_state">
                    Fn
                </p>
            </div>
            <img
                src="/img/profile/item.png"
                alt=""
                className="item_image"
            />
            <h2 className="item_item_name">
                Tec 9
            </h2>
            <h2 className="item_item_skin">
                Терсаса
            </h2>
        </div>
    )
}

export default Item
