import React from "react";
import MainLayout from "../../components/MainLayout";

const History = () => {
	const historyArray = [
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
	];

	return (
		<MainLayout>
			<div className="history_page">
				<h1 className="history_page_cache_title">
					Хэш
					144ed5a8419efdd4fcbde1f66712fb4b0fe5d8ea67d126cdad41e9e99cb7f98f
				</h1>
				<div className="history_page_list">
					
					{historyArray.map((counter, key) => {
						return (
							<div className="history_page_card">
								<div className="history_page_card_top">
									<div className="history_page_card_top_row">
										<h2 className="history_page_card_x">
											x5.33
										</h2>
										<h2 className="history_page_card_peoples">
											<img
												src="/img/history/peoples.svg"
												alt="peoples"
											/>
											1 945
										</h2>
									</div>
									<h2 className="history_page_card_cash-won">
										<img
											src="/img/history/coin.svg"
											alt="coin"
										/>
										1 945
									</h2>
								</div>
								<div className="history_page_card_bottom">
									<div className="history_page_card_info">
										<h2 className="history_page_card_time">
											22:43
										</h2>
										<h2 className="history_page_card_order">
											#21333232
										</h2>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</MainLayout>
	);
};

export default History;
