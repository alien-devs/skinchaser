const Settings = () => {
	return (
		<div className="settings">
			<div className="settings_container">
				<img
					src="/img/settings/vector.svg"
					alt=""
					className="settings_close_icon"
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
							src="/img/settings/arrow.svg"
							alt=""
							className="language_arrow"
						/>
					</div>
				</div>
                <div className="settings_line"></div>
                <div className="settings_advansed">
                    <div className="advansed">
                        <input type="checkbox" />
                        <h2>Анимации на сайте</h2>
                    </div>
                    <div className="advansed">
                        <input type="checkbox" />
                        <h2>Включить стикеры</h2>
                    </div>
                    <div className="advansed">
                        <input type="checkbox" />
                        <h2>Автовоспроизведение стикеров</h2>
                    </div>
                    <div className="advansed">
                        <input type="checkbox" />
                        <h2>Режим стримера</h2>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Settings;
