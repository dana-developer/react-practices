import React from "react";
import { Card_List } from "./assets/scss/CardList.scss";
import Card from "./Card";
import data from "./assets/json/data.js";

function CardList({ status }) {
	const filterData = data.filter((e) => e.status === status);

	return (
		<div className={Card_List}>
			<h1>{status}</h1>
			{filterData.map((e) => (
				<Card
					key={e.no}
					title={e.title}
					description={e.description}
					tasks={e.tasks}
				></Card>
			))}
		</div>
	);
}

export default CardList;
