import React from "react";
import TaskList from "./TaskList";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";

function Card({ title, description, tasks }) {
	return (
		<div className={_Card}>
			<div className={Card_Title}>{title}</div>
			<div>{description}</div>
			<TaskList tasks={tasks}></TaskList>
		</div>
	);
}

export default Card;
