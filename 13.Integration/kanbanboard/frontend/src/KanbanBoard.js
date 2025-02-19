import React, { useState, useEffect } from "react";
import "./assets/scss/KanbanBoard.scss";
import CardList from "./CardList";
import styled from "styled-components";
import axios from "axios";

const StyledKanbanBoard = styled.div`
	white-space: nowrap;
	height: 100%;
	margin: 20px auto;
`;

function KanbanBoard() {
	const statusList = ["ToDo", "Doing", "Done"];

	const [cards, setCards] = useState([]);

	const fetchCards = async () => {
		try {
			const response = await axios.get("/kanbanboard/card");
			const jsonResult = response.data;

			setCards(jsonResult.data);
		} catch (err) {
			console.error(
				err.response
					? `${err.response.status} ${err.response.data.message}`
					: err
			);
		}
	};

	useEffect(() => {
		fetchCards();
	}, []);

	return (
		<>
			<h4>Kanbanboard 과제</h4>
			<StyledKanbanBoard>
				{statusList?.map((status, index) => (
					<CardList
						status={status}
						data={cards}
						key={index}
					></CardList>
				))}
			</StyledKanbanBoard>
		</>
	);
}

export default KanbanBoard;
