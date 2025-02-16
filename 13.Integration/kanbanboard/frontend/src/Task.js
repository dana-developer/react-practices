import React from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ index, name, done, setContents }) {
	return (
		<li className={_Task}>
			<input
				index={index}
				type="checkbox"
				checked={done}
				onClick={() => {
					setContents((prevContents) =>
						prevContents.map(
							(content, idx) =>
								idx === index
									? {
											...content,
											done: !content.done,
									  } // index와 일치할 때 done 토글
									: content // 아닐 때는 기존 content 유지
						)
					);
				}}
			/>
			{" " + name + " "}
			<a
				href="#"
				className={Task_Remove}
				onClick={() => {
					setContents((prevContents) =>
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
