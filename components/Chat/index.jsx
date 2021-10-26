import s from './chat.module.scss'
import ChatAlert from './ChatAlert'
import Message from './Message'

const Chat = () => {
    return (
        <div className={`${s.chat} chat`}>
            <div className={s.giveaway}></div>
            <div className={s.content}>
                <div className={s.header}>
                    <div className={s.leftHeader}>
                        <div className="center">
                            <h5>Онлайн чат</h5>
                            <span className={s.online}>
                                <span className={s.dot}></span>
                                1343
                            </span>
                        </div>
                        <span className={s.subtitle}>Правила чата</span>
                    </div>
                    <button className={s.close + " secondary-btn chat-switcher"}>
                        <img src="/img/chat/arrow.svg" alt="" />
                    </button>
                </div>
                <div className={s.messages}>
                    <div className={s.messageList}>
                        <Message />
                        <Message />
                        <ChatAlert />
                        <Message />
                        <Message />
                        <Message />
                        <ChatAlert />
                        <Message />
                    </div>
                    <div className={s.sendWrapper}>
                        <div className={s.send}>
                            <input type="text" placeholder="Введите сообщение"/>
                            <button>
                                <img src="/img/chat/send.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat