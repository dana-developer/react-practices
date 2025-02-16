import React from "react";
import Task from "./Task";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";

function TaskList({ tasks, setContents }) {
	return (
		<div className={Task_List}>
			<ul>
				{tasks.map((task, i) => (
					<Task
						key={i}
						name={task.name}
						done={task.done}
						setContents={setContents}
						index={i}
					></Task>
				))}
			</ul>
			<input
				className={Input_Add_Task}
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
