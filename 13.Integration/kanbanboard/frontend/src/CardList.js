import React from "react";
import { Card_List } from "./assets/scss/CardList.scss";
import Card from "./Card";

function CardList({ status, data }) {
	const filterData = data.filter((e) => e.status === status);

	return (
		<div className={Card_List}>
			<h1>{status}</h1>
			{filterData?.map((e) => (
				<Card
					key={e.no}
					title={e.title}
					description={e.description}
					no={e.no}
				></Card>
			))}
		</div>
	);
}

export default CardList;
