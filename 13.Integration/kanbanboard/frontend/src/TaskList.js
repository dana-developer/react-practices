import React, { useRef } from "react";
import Task from "./Task";
import styled from "styled-components";
import axios from "axios";

const StyledTaskList = styled.ul`
	list-style-type: none;
`;

const StyledInputAddTask = styled.input`
	border: 1px dashed #bbb;
	width: 100%;
	padding: 10px;
	margin-top: 5px;
	border-radius: 3px;
`;

function TaskList({ tasks, setTasks, cardNo }) {
	const addTaskRef = useRef(null);

	const addTask = async (task) => {
		try {
			const response = await axios.post(
				"/kanbanboard/task",
				task
			);

			const jsonResult = response.data;

			setTasks([jsonResult.data, ...tasks]);

			addTaskRef.current.value = "";
		} catch (err) {
			console.error(
				err.response
					? `${err.response.status} ${err.response.data.message}`
					: err
			);
		}
	};
	return (
		<div>
			<StyledTaskList>
				{tasks.map((task) => (
					<Task
						key={task.no}
						name={task.name}
						done={task.done}
						setTasks={setTasks}
						tasks={tasks}
						no={task.no}
					></Task>
				))}
			</StyledTaskList>

			<StyledInputAddTask
				type="text"
				placeholder="태스크 추가"
				ref={addTaskRef}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const task = {
							name: e.target.value,
							done: "N",
							no: null,
							cardNo: cardNo,
						};

						addTask(task);
					}
				}}
			/>
		</div>
	);
}

export default TaskList;
