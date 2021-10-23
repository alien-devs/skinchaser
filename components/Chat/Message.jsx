import s from './chat.module.scss'

const Message = () => {
    return (
        <div className={s.message}>
            <div>
                <div className={s.ava}>
                    <img src="" alt="" />
                </div>
                <div className={s.sender}>
                    <div className="center" style={{justifyContent: "space-between"}}>
                        <span className={s.name}>White CroW</span>
                        <span className={s.time}>23:07</span>
                    </div>
                    <p className={s.messageText}>
                        <span>@Majestico "CS.FAIL"</span>, hahahahahaah
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message