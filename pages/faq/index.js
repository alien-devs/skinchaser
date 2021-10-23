import React from "react"
import MainLayout from "../../components/MainLayout"

const Faq = () => {
	return (
		<MainLayout>
			<div className="faq_page">
				<h1 className="faq_page_title">Часто задаваемые вопросы</h1>
				<div className="faq_page_list">
					<div className="faq_page_card">
						<div className="faq_page_card_row">
							<h2 className="faq_page_card_title">
								How do the Gem event work?
							</h2>
							<div className="faq_page_card_icon_block">
								<img src="/img/faq/arrow_up.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="faq_page_card opened">
						<div className="faq_page_card_row">
							<h2 className="faq_page_card_title">
								How do the Gem event work?
							</h2>
							<div className="faq_page_card_icon_block">
								<img src="/img/faq/arrow_up.svg" alt="" />
							</div>
						</div>
						<div className="faq_page_card_opened_cont">
							<h2 className="faq_page_card_opened_title">Gems</h2>
							<p className="faq_page_card_opened_text">
								The % chance of winning Gems scales with the
								amount wagered. The % chance of winning is
								capped at 50% for each wager, so that it always
								feels random and never guaranteed. For every
								0.01 Coins spent, your % chance of winning
								increases by 0.05%. If you wager more than the
								required amount for a 50% chance, then the Gems
								rewards scale vertically. We don’t support
								fractions of Gems, so if you bet 19 Coins, you
								would still only have a 50% chance to receive 1
								Gem. You would not receive 1.9 Gems (it always
								rounds down). You can spend them HERE on one of
								the Santas to receive extra tickets and items.
							</p>
							<h2 className="faq_page_card_opened_title margin">
								JANUARY CALENDAR
							</h2>
							<p className="faq_page_card_opened_text">
								Every day you will open a free box for the
								chance to win between 0 and 5 free jackpot
								tickets. You can only open the box of the day
								and the reward chances are based on your recent
								deposits, if you deposited in the last 7 days,
								your chances of receiving more tickets will be
								higher.
							</p>
							<h2 className="faq_page_card_opened_title margin">
								50K GIVEAWAY
							</h2>
							<p className="faq_page_card_opened_text">
								Collect tickets from one of the events to
								guarantee your entry into the final Jackpot. The
								tickets you hold will automatically count as an
								entry and the more you have, the better your
								chances are when we draw the winners. Good luck!
							</p>
						</div>
					</div>
					<div className="faq_page_card">
						<div className="faq_page_card_row">
							<h2 className="faq_page_card_title">
								Why do you ask for my Steam API Key?
							</h2>
							<div className="faq_page_card_icon_block">
								<img src="/img/faq/arrow_up.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="faq_page_card">
						<div className="faq_page_card_row">
							<h2 className="faq_page_card_title">
								Triple green jackpot, how does it work?
							</h2>
							<div className="faq_page_card_icon_block">
								<img src="/img/faq/arrow_up.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="faq_page_card">
						<div className="faq_page_card_row">
							<h2 className="faq_page_card_title">
								How do I get coins?
							</h2>
							<div className="faq_page_card_icon_block">
								<img src="/img/faq/arrow_up.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Faq