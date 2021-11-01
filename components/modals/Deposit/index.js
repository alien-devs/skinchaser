import { CSSTransition } from "react-transition-group";

const Deposit = (props) => {
	return (
		<div className="deposit_container modal">
			<img
				src="/img/general/vector.svg"
				alt=""
				className="modal-close"
				onClick={props.close}
			/>
			<div className="deposit_left">
				<h2
					className="deposit_title"
					style={{ marginBottom: "28px" }}
				>
					ПОПОЛНЕНИЕ СЧЁТА
				</h2>
				<p className="deposit_left_text">
					Выберите способ пополнения
				</p>
				<div className="deposit_left_type_list">
					<div className="deposit_type_card">
						<button className="deposit_type_btn">Все</button>
					</div>
					<div className="deposit_type_card">
						<button className="deposit_type_btn">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V5H0V4ZM0 7V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V7H0ZM3 9H4C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10V11C5 11.2652 4.89464 11.5196 4.70711 11.7071C4.51957 11.8946 4.26522 12 4 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9Z"
									fill="white"
								/>
							</svg>
							Карты
						</button>
					</div>
					<div className="deposit_type_card">
						<button className="deposit_type_btn">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.33325 6H14.6666V10H9.33325V6Z"
									fill="#575C74"
								/>
								<path
									d="M13.3333 2H3.33325C2.23059 2 1.33325 2.89733 1.33325 4V12C1.33325 13.1027 2.23059 14 3.33325 14H13.3333C14.0686 14 14.6666 13.402 14.6666 12.6667V11.3333H9.33325C8.59792 11.3333 7.99992 10.7353 7.99992 10V6C7.99992 5.26467 8.59792 4.66667 9.33325 4.66667H14.6666V3.33333C14.6666 2.598 14.0686 2 13.3333 2Z"
									fill="#575C74"
								/>
							</svg>
							Эл. кошельки
						</button>
					</div>
					<div className="deposit_type_card">
						<button className="deposit_type_btn">Скины</button>
					</div>
					<div className="deposit_type_card">
						<button className="deposit_type_btn">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.9531 8.81897L11.4061 11.009C12.0251 11.163 13.9351 11.793 14.2441 10.553C14.5661 9.26197 12.5711 8.97397 11.9531 8.81897ZM11.1311 12.115L10.5281 14.53C11.2711 14.715 13.5651 15.451 13.9041 14.089C14.2591 12.667 11.8751 12.3 11.1311 12.115Z"
									fill="#575C74"
								/>
								<path
									d="M14.421 2.29899C9.06404 0.963986 3.64104 4.22399 2.30604 9.58099C0.970042 14.936 4.23004 20.361 9.58304 21.697C14.94 23.032 20.366 19.773 21.7 14.416C23.036 9.05999 19.776 3.63499 14.421 2.29899ZM16.412 10.574C16.267 11.548 15.726 12.019 15.01 12.185C15.995 12.697 16.495 13.483 16.019 14.846C15.427 16.537 14.021 16.68 12.149 16.326L11.695 18.146L10.599 17.873L11.046 16.079C10.7536 16.0059 10.4619 15.9299 10.171 15.851L9.72204 17.655L8.62704 17.38L9.08104 15.557C8.82404 15.491 8.56404 15.421 8.29904 15.355L6.87004 15L7.41604 13.744C7.41604 13.744 8.22404 13.959 8.21304 13.943C8.52404 14.02 8.66104 13.818 8.71504 13.682L9.43404 10.807L9.54904 10.836C9.51194 10.821 9.47385 10.8087 9.43504 10.799L9.94704 8.74599C9.96004 8.51199 9.88104 8.21799 9.43604 8.10699C9.45404 8.09599 8.63904 7.90899 8.63904 7.90899L8.93004 6.73699L10.444 7.11499L10.443 7.11999C10.67 7.17699 10.904 7.23099 11.143 7.28499L11.592 5.48299L12.689 5.75599L12.249 7.52199C12.543 7.58899 12.84 7.65699 13.128 7.72899L13.566 5.97399L14.663 6.24699L14.214 8.04899C15.598 8.52799 16.61 9.24399 16.412 10.574Z"
									fill="#575C74"
								/>
							</svg>
							Криптовалюта
						</button>
					</div>
					<div className="deposit_type_card">
						<button className="deposit_type_btn">Другие</button>
					</div>
				</div>
				<div className="payments_list">
					<div className="payment">
						<p className="payment_label">#1</p>
						<img src="/img/deposit/payment1.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">#1</p>
						<img src="/img/deposit/payment2.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">#1</p>
						<img src="/img/deposit/payment2.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">#1</p>
						<img src="/img/deposit/payment3.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">#1</p>
						<img src="/img/deposit/payment4.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">WMZ</p>
						<img src="/img/deposit/payment5.png" alt="" />
					</div>
					<div className="payment">
						<img src="/img/deposit/payment6.png" alt="" />
					</div>

					<div className="payment">
						<img src="/img/deposit/payment7.png" alt="" />
					</div>
					<div className="payment">
						<img src="/img/deposit/payment7.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">Скины</p>
						<img src="/img/deposit/payment8.png" alt="" />
					</div>
					<div className="payment">
						<p className="payment_label">Скины</p>
						<img src="/img/deposit/payment9.png" alt="" />
					</div>
				</div>
			</div>
			<div className="deposit_right">
				<h2
					className="deposit_title"
					style={{ marginBottom: "47px" }}
				>
					ВВЕДИТЕ СУММУ
				</h2>
				<input
					type="number"
					placeholder="5000"
					className="deposit_input"
				/>
				<button className="primary-btn" style={{ width: "100%" }}>
					пополнить
				</button>

				<div className="line"></div>
				<div className="deposit_heading">
					<h2 className="deposit_promo">Промо-код</h2>
					<h2 className="deposit_bonus_h2">Бонус к пополнению</h2>
				</div>

				<div className="promo_input">
					<input type="text" />
					<button className="primary-btn blue">
						<img src="/img/deposit/mark.svg" alt="" />
					</button>
				</div>
				<div className="deposit_bonus">
					<h2>
						ПОСТАВЬ В НИК <span>“NAMESITE.RU”</span>
						<br /> И ПОЛУЧИ БОНУС К ПОПОЛНЕНИЮ
					</h2>
					<p>10% </p>
				</div>
			</div>
		</div>
	);
};

export default Deposit;
