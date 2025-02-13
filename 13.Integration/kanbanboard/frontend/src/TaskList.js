import React from "react";
import Task from "./Task";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";

function TaskList({ tasks }) {
	return (
		<div class={Task_List}>
			<ul>
				{tasks.map((task) => (
					<Task
						name={task.name}
						done={task.done}
					></Task>
				))}
			</ul>
			<input
				className={Input_Add_Task}
				type="text"
				placeholder="태스크 추가"
			/>
		</div>
	);
}

export default TaskList;
