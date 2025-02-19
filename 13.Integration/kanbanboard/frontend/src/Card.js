import React, { useState } from "react";
import TaskList from "./TaskList";
import styled from "styled-components";

const StyledCard = styled.div`
	position: relative;
	z-index: 1;
	background: #fff;
	width: 100%;
	padding: 10px 10px 10px 15px;
	margin: 0 0 10px 0;
	overflow: auto;
	border: 1px solid #e5e5df;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
`;

const StyledCardTitle = styled.div`
	font-weight: bold;
	border-bottom: solid 5px transparent;
	&:before {
		display: inline-block;
		width: 1em;
		content: "${(props) => (props.isOpen ? "▾" : "▸")}";
	}
`;

function Card({ title, description, tasks }) {
	const [contents, setContents] = useState(tasks);
	const [titleOpen, setTitleOpen] = useState(false);

	return (
		<StyledCard>
			<div
				onClick={() => {
					setTitleOpen((titleOpen) => !titleOpen);
				}}
			>
				<StyledCardTitle isOpen={titleOpen}>
					{" " + title}
				</StyledCardTitle>
				<div>{description}</div>
			</div>

			{titleOpen ? null : (
				<TaskList
					tasks={contents}
					setContents={setContents}
				></TaskList>
			)}
		</StyledCard>
	);
}

export default Card;
