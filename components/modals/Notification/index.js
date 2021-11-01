import { CSSTransition } from "react-transition-group";

const Notification = (props) => {
	return (
		<CSSTransition in={props.state} unmountOnExit timeout={200} classNames="modal">
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
		</CSSTransition>
	);
};

export default Notification;
