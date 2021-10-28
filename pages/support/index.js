import MainLayout from "../../components/MainLayout"

const Support = () => {
	const supportItems = [
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
		},
	]

	return (
		<MainLayout
			hideChat
		>
			<div className="support_page">
				<div className="support_left">
					<img src="/img/support/support_message.svg" alt="" />
					<h2 className="support_left_title">Нужна помощь ?</h2>
					<p className="support_left_text">
						У вас остались вопросы без ответа?
						<br /> У вас есть какие-нибудь предложения ?
					</p>
					{<div></div>}
					<button className="primary-btn blue" style={{marginTop: "auto"}}>
						ЗАДАТЬ ВОПРОС / ВАШИ ПРЕДЛОЖЕНИЯ
					</button>
				</div>
				<div className="support_right">
					{supportItems.map((item, key) => (
						<div>
							<div className="support_card">
								<div className="support_card_left">
									<img src={item.imgUrl} alt="" />
									<div className="support_card_column">
										<h2 className="support_card_theme">
											{item.title}
										</h2>
										<h2 className="support_card_text">
											{item.text}
										</h2>
									</div>
								</div>
								<div className="support_card_column">
									<h2 className="support_card_state">
										Новое сообщение <div></div>
									</h2>
									<h2 className="support_card_time">18:43</h2>
								</div>
							</div>
                            <div className="support_line"></div>
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	)
}

export default Support
