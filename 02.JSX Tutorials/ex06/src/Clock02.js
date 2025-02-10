import React from "react";

function Clock02(props) {
	const now = new Date();
	// 여기에는 hook과 같은 함수만 작성하는 것이 좋다.
	// 상태값은 변경하지 않는 것이 좋음!

	return (
		// 표현식만 작성하는 것이 좋다!
		<div>
			{now.getHours() > 10
				? now.getHours()
				: "0" + now.getHours()}
			{":"}
			{("0" + now.getMinutes()).slice(-2)}
			{":"}
			{("0" + now.getSeconds()).slice(-2)}
		</div>
	);
}

export default Clock02;
