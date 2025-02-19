import React, { useState } from "react";
import TaskList from "./TaskList";
import styled from "styled-components";
import axios from "axios";

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

function Card({ title, description, no }) {
	const [tasks, setTasks] = useState([]);
	const [titleOpen, setTitleOpen] = useState(false);

	const fetchTasks = async (cardNo) => {
		try {
			const response = await axios.get(
				`/kanbanboard/task?cardNo=${cardNo}`
			);

			const jsonResult = response.data;

			setTasks(jsonResult.data);

			setTitleOpen((titleOpen) => !titleOpen);
		} catch (err) {
			console.error(
				err.response
					? `${err.response.status} ${err.response.data.message}`
					: err
			);
		}
	};

	return (
		<StyledCard>
			<div
				onClick={() => {
					if (titleOpen === false) {
						fetchTasks(no);
					} else {
						setTitleOpen(
							(titleOpen) =>
								!titleOpen
						);
					}
				}}
			>
				<StyledCardTitle isOpen={titleOpen}>
					{" " + title}
				</StyledCardTitle>
				<div>{description}</div>
			</div>

			{titleOpen ? (
				<TaskList
					tasks={tasks}
					setTasks={setTasks}
					cardNo={no}
				></TaskList>
			) : null}
		</StyledCard>
	);
}

export default Card;
