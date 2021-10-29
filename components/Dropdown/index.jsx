import { useState } from "react"

const Dropdown = (props) => {
    const [state, setState] = useState(false)
    const [choosen, setChoosen] = useState(props.list[0])

    const handleChoose = (i) => {
        setChoosen(i)
        !props.large && setState(false)
    }

    if(props.large) {
        return (
            <div className={`secondary-dropdown ${state ? "opened" : ""}`}>
                <div className="secondary-dropdown__value" onClick={() => setState(!state)}>
                    <span>
                        <img src="/img/wheel/items.svg" alt="" />
                        Инвентарь
                    </span>
                    <img src="/img/general/double-arrow.svg" alt="" />
                </div>
                <div className="popup">
                    {
                        props.list.map(i => <li
                            onClick={() => handleChoose(i)}
                            className={i.name == choosen.name && "choosen"}
                        >
                            <div className="dropdown-img-wrapper">
                                <img src={`/img/header/${i.img}`} alt="" />
                            </div>
                            {i.name}
                        </li>)
                    }
                </div>
            </div>
        )
    }

    return (
        <div className={`primary-dropdown ${state ? "opened" : ""}`}>
            <div className="primary-dropdown__value" onClick={() => setState(!state)}>
                <span>
                    {choosen}
                </span>
                <img src="/img/general/arrow.svg" alt="" />
            </div>
            <div className="popup">
                {
                    props.list.map(i => i != choosen && <li onClick={() => handleChoose(i)}>{i}</li>)
                }
            </div>
        </div>
    )
}

export default Dropdown