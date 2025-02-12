import React, { useState } from "react";

function Incrementor02({ val, step }) {
	const [count, setCount] = useState(val);

	return (
		<div>
			<button
				onClick={() => {
					setCount(count + step);
				}}
			>
				{"+"}
			</button>{" "}
			{count}{" "}
			<button
				onClick={() => {
					// 컴포넌트의 상태 변경 -> trigger 유발 -> 다시 랜더링
					setCount(count - step);
				}}
			>
				{"-"}
			</button>
		</div>
	);
}

export default Incrementor02;
