import React from "react";
import "./assets/scss/KanbanBoard.scss";
import CardList from "./CardList";
import styled from "styled-components";
import data from "./assets/json/data.js";

const StyledKanbanBoard = styled.div`
	white-space: nowrap;
	height: 100%;
	margin: 20px auto;
`;

function KanbanBoard() {
	const statusList = ["ToDo", "Doing", "Done"];

	return (
		<>
			<h4>Kanbanboard 과제</h4>
			<StyledKanbanBoard>
				{statusList.map((status, index) => (
					<CardList
						status={status}
						data={data}
						key={index}
					></CardList>
				))}
			</StyledKanbanBoard>
		</>
	);
}

export default KanbanBoard;
