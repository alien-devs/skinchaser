const Input = (props) => {
    return (
        <div className={`primary-input_wrapper ${props.classes ?? ""}`}>
            <div className="primary-input">
                <input type="text" placeholder="Введите сообщение"/>
                <button>
                    <img src="/img/chat/send.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Input