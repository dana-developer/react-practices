import React, { useState } from "react";
import TaskList from "./TaskList";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";

function Card({ title, description, tasks }) {
	const [contents, setContents] = useState(tasks);
	const [titleOpen, setTitleOpen] = useState(false);

	return (
		<div className={_Card}>
			<div
				onClick={() => {
					setTitleOpen((titleOpen) => !titleOpen);
				}}
			>
				<div
					className={
						titleOpen
							? Card_Title
							: Card_Title_Open
					}
				>
					{" " + title}
				</div>
				<div>{description}</div>
			</div>

			{titleOpen ? null : (
				<TaskList
					tasks={contents}
					setContents={setContents}
				></TaskList>
			)}
		</div>
	);
}

export default Card;
