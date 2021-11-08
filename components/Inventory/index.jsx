import Item from "../Item"
import { ar } from "../../data/arrays"
import Modal from "../modals/Modal"
import Shop from "../modals/Shop"
import { useState } from "react"

const Inventory = (props) => {
    if(props.auth != null ? !props.auth : false) {
        return (
            <div className="inventory empty">
                <div className="empty-inventory">
                    <span>Авторизуйтесь на сайте чтобы использовать</span>
                    <button className="primary-btn">
                        Авторизация
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <Modal state={props.shopOpened} setState={props.setShopOpened}>
                <Shop close={() => props.setShopOpened(false)} />
            </Modal>
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
                        <button className="inventory__shop-btn" onClick={() => props.setShopOpened(true)}>
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
        </>
    )
}

export default Inventory
