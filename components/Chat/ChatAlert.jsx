import s from './chat.module.scss'

const ChatAlert = () => {
    return (
        <div className={s.alert}>
            <img src="/img/header/logo.png" alt="" />
            <div>
                <h3 className={s.alertTitle}>Системное сообщение</h3>
                <p className={s.alertText}>Пополни свой счёт на 1000р и получи 10р в подарок.</p>
                <button className="primary-btn">Пополнить</button>
            </div>
        </div>
    )
}

export default ChatAlert
