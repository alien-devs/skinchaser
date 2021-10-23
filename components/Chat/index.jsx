import s from './chat.module.scss'

const Chat = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.chat}>
                <div className={s.giveaway}></div>
                <div className={s.content}>
                    <div className={s.header}>

                    </div>
                    <div className={s.messages}>
                        <div className={s.messageList}>
                            <div className={s.message}>
                            
                            </div>
                        </div>
                        <div className={s.send}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat