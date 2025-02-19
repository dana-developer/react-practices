import React from "react";
import Task from "./Task";
import styled from "styled-components";

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

function TaskList({ tasks, setTasks }) {
	return (
		<div>
			<StyledTaskList>
				{tasks.map((task, i) => (
					<Task
						key={i}
						name={task.name}
						done={task.done}
						setTasks={setTasks}
						index={i}
					></Task>
				))}
			</StyledTaskList>

			<StyledInputAddTask
				type="text"
				placeholder="태스크 추가"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						console.log(
							"테스크 추가합니다." +
								e.target.value
						);

						setContents((contents) => [
							...contents,
							{
								name: e.target
									.value,
								done: false,
								no:
									contents.length +
									1,
							},
						]);
					}
				}}
			/>
		</div>
	);
}

export default TaskList;
