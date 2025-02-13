import React from "react";
import "./assets/scss/KanbanBoard.scss";
import CardList from "./CardList";
import styled from "styled-components";

const StyledKanbanBoard = styled.div`
	white-space: nowrap;
	height: 100%;
	margin: 20px auto;
`;

function KanbanBoard() {
	return (
		<>
			<h4>Kanbanboard 과제</h4>
			<StyledKanbanBoard>
				<CardList status={"ToDo"}></CardList>
				<CardList status={"Doing"}></CardList>
				<CardList status={"Done"}></CardList>
			</StyledKanbanBoard>
		</>
	);
}

export default KanbanBoard;
