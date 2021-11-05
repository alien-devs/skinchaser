import Ava from "../../components/Ava"
import Input from "../../components/Input"
import MainLayout from "../../components/MainLayout"

const Support = () => {
	const supportItems = [
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
			status: "new",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
			status: "waiting",
		},
		{
			title: "Не могу пополнить счёт",
			text: "Почему то выкидывает после редикта на платежку =(",
			imgUrl: "/img/support/logo.png",
			status: "closed",
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
		}
	]

	const statusHandler = (status) => {
		if (status == "new") {
			return "Новое сообщение";
		} else if (status == "waiting") {
			return "Ожидает ответа";
		} else {
			return "Вопрос решен";
		}
	}

	return (
		<MainLayout>
			<div className="support_page">
				<div className="support_left">
					<img src="/img/support/support_message.svg" alt="" />
					<h2 className="support_left_title">Нужна помощь ?</h2>
					<p className="support_left_text">
						У вас остались вопросы без ответа?
						<br /> У вас есть какие-нибудь предложения ?
					</p>
					{<div></div>}
					<button
						className="primary-btn blue"
						style={{ marginTop: "auto" }}
					>
						ЗАДАТЬ ВОПРОС / ВАШИ ПРЕДЛОЖЕНИЯ
					</button>
				</div>
				<div className="support_middle">
					{supportItems.map((item, key) => (
						<div>
							<div className={`support_card ${item.status}`}>
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
										{statusHandler(item.status)}
										<div className="state"></div>
									</h2>
									<h2 className="support_card_time">18:43</h2>
								</div>
							</div>
							<div className="support_line"></div>
						</div>
					))}
				</div>
				<div className="support_right">
					<div className="support_message">
						<Ava />
						<div className="message_right">
							<div className="message_row">
								<h2 className="user">Bets by Boss</h2>
								<p className="time">23:08</p>
							</div>
							<p className="text">
								УРА! У меня началось получатся выигрывать
							</p>
						</div>
					</div>
					<div className="support_message">
						<Ava />
						<div className="message_right">
							<div className="message_row">
								<h2 className="admin">Administrator</h2>
								<p className="time">23:07</p>
							</div>
							<p className="text">
								Здравствуйте! Мы в процессе решения ваше
								проблемы.
							</p>
						</div>
					</div>
					<Input />
				</div>
			</div>
		</MainLayout>
	)
}

export default Support
