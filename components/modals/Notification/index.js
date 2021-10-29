import React from "react";

const Notification = (props) => {
	return (
		<div className="notification">
			<img src="/img/notification/arrow.svg" alt="" />
			<div className="notification_row">
				<p>21.10.2021</p>
				<h2>
					Вы получили бонус в размере <span>15р</span>
				</h2>
			</div>
			<div className="notification_row">
				<p>21.10.2021</p>
				<h2>
					Вы получили бонус в размере <span>15р</span>
				</h2>
			</div>
			<div className="notification_row">
				<p>21.10.2021</p>
				<h2>
					Вы получили бонус в размере <span>15р</span>
				</h2>
			</div>
		</div>
	);
};

export default Notification;
