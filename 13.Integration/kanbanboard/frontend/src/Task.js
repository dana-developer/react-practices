import React from "react";
import { Task_Remove } from "./assets/scss/Task.scss";
import axios from "axios";
import update from "react-addons-update";
import styled from "styled-components";

const StyledTask = styled.li`
	&:first-child {
		margin-top: 10px;
		padding-top: 10px;
		border-top: dashed 1px #ddd;
	}
`;

function Task({ name, no, done, tasks, setTasks }) {
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

	const deleteTask = async (no) => {
		try {
			const response = await axios.delete(
				`/kanbanboard/task/${no}`
			);
			const jsonResult = response.data;

			setTasks(tasks.filter((e) => e.no !== jsonResult.data));
		} catch (err) {
			console.error(
				err.response
					? `${err.response.status} ${err.response.data.message}`
					: err
			);
		}
	};

	return (
		<StyledTask>
			<input
				type="checkbox"
				checked={done === "Y"}
				onChange={() => {
					const isDone = done === "Y" ? "N" : "Y";
					updateTaskDone(no, isDone);
				}}
			/>
			{" " + name + " "}
			<a
				href="#"
				className={Task_Remove}
				onClick={() => {
					deleteTask(no);
				}}
			></a>
		</StyledTask>
	);
}

export default Task;
