import Checkbox from "../../Checkbox";

const Settings = (props) => {
	return (
		<div className="settings_container">
			<img
				src="/img/settings/vector.svg"
				alt=""
				className="modal-close"
				onClick={props.close}
			/>
			<h5>Настройки</h5>
			<div className="settings_block">
				<h2>Валюта сайта</h2>
				<div className="currency_block">
					<div className="currency">
						<img src="/img/general/coin.svg" />
					</div>
					<div className="currency">
						<img src="/img/general/coin.svg" />
					</div>
				</div>
			</div>
			<div className="settings_block">
				<h2>Язык</h2>
				<div className="language">
					<img src="/img/general/flags/uk.png" alt="" />
					<img
						src="/img/general/arrow.svg"
						alt=""
						className="language_arrow"
					/>
				</div>
			</div>
			<div className="settings_line"></div>
			<div className="settings_checkboxes">
				<Checkbox id="animationCb" title="Анимация на сайте"/>
				<Checkbox id="stickerCb" title="Включить стикеры"/>
				<Checkbox id="autoplayCb" title="Автовоспроизведение стикеров"/>
				<Checkbox id="streamerCb" title="Режим стримера"/>
			</div>
		</div>
	);
};

export default Settings;
