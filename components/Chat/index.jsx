import { useState, useEffect } from 'react'
import Input from '../Input'
import s from './chat.module.scss'
import ChatAlert from './ChatAlert'
import Message from './Message'

const Chat = (props) => {
    const [state, setState] = useState(true)

    useEffect(() => {
        if(props.hide) {
            setState(false)
        }
    }, [props.hide])

    useEffect(() => {
        !state ? document.body.classList.add("full-width") : document.body.classList.remove("full-width")
    }, [state])

    return (
        <div className={`${s.chat} chat`}>
            <div className={s.giveaway}>
                <span className={s.effect}></span>
                <div>
                    <div className={s.giveawaySkin}>
                        <img src="/img/general/m4.png" alt="" />
                        <img src="/img/general/blue-skin.png" alt="" className={s.skin}/>
                    </div>
                    <div>
                        <h5>Бесплатный скин</h5>
                        <span className={s.timer}>
                            00:58:41
                        </span>
                    </div>
                </div>
                <img src="/img/chat/tick.png" alt="" />
                <span className={s.border}></span>
            </div>
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
                    <button onClick={() => setState(!state)} className={s.close + " secondary-btn chat-switcher"}>
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
                    <Input classes={s.sendWrapper}/>
                </div>
            </div>
        </div>
    )
}

export default Chat