import React from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";
import axios from "axios";
import update from "react-addons-update";

function Task({ index, name, no, done, tasks, setTasks }) {
	const updateTaskDone = async (no, done) => {
		try {
			const response = await axios.put(
				`/kanbanboard/task/${no}?done=${done}`
			);
			const jsonResult = response.data;

			const index = tasks.findIndex(
				(task) => task.no === jsonResult.data.no
			);

			setTasks([
				...tasks.slice(0, index),
				update(tasks[index], {
					no: {
						$set: jsonResult.data.no,
					},
					done: {
						$set: jsonResult.data.done,
					},
				}),
				...tasks.slice(index + 1),
			]);
		} catch (err) {
			console.error(
				err.response
					? `${err.response.status} ${err.response.data.message}`
					: err
			);
		}
	};
	return (
		<li className={_Task}>
			<input
				type="checkbox"
				checked={done === "Y"}
				onClick={() => {
					const isDone = done === "Y" ? "N" : "Y";
					updateTaskDone(no, isDone);
				}}
			/>
			{" " + name + " "}
			<a
				href="#"
				className={Task_Remove}
				onClick={() => {
					setTasks((prevContents) =>
						prevContents.filter(
							(_, idx) =>
								idx !== index
						)
					);
				}}
			></a>
		</li>
	);
}

export default Task;
