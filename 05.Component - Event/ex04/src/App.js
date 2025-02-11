import React, { userRef } from "react";
import logo from "./assets/images/react-logo.png";

export default function App() {
	const imgRef = useRef(null);

	const onKeyUpInput = (e) => {
		if (e.key === "Enter") {
			console.log("keyup : " + e.target.value);
		}
	};

	const onKeyDownInput = (e) => {
		console.log("keydown : " + e.target.value);
	};

	const onChangeInput = (e) => {
		console.log("change : " + e.target.value);
	};

	const onFocusInput = (e) => {
		console.log("focus : " + e.target.value);
	};

	const onBlurInput = (e) => {
		console.log("blur : " + e.target.value);
	};

	const onMouseOverImg = (e) => {
		console.log(imgRef.current);
		console.log("mouseOver", `x=${e.clientX}, y=${e.clientY}`);
	};

	const onMouseOutImg = (e) => {
		console.log("mouseOut", `x=${e.clientX}, y=${e.clientY}`);
	};

	const onMouseMoveImg = (e) => {
		const offsetTop = imgRef.current.offsetTop;
		const offsetLeft = imgRef.current.offsetLeft;

		console.log(
			"mouseMove",
			`x=${e.clientX - offsetLeft}, y=${
				e.clientY - offsetTop
			}`
		);
	};

	const onMouseDownImg = (e) => {
		console.log("mouseDown", `x=${e.clientX}, y=${e.clientY}`);
	};
	const onMouseUpImg = (e) => {
		console.log("mouseUp", `x=${e.clientX}, y=${e.clientY}`);
	};
	const onClickImg = (e) => {
		console.log("click", `x=${e.clientX}, y=${e.clientY}`);
	};
	const onDoubleClickImg = (e) => {
		console.log("doubleClick", `x=${e.clientX}, y=${e.clientY}`);
	};

	return (
		<>
			<h2>Event Handler 예제</h2>
			<input
				type="text"
				placeholder="메세지를 입력 하세요"
				onKeyUp={onKeyUpInput}
				onKeyDown={onKeyDownInput}
				onChange={onChangeInput}
				onFocus={onFocusInput}
				onBlur={onBlurInput}
			/>
			<br />
			<br />
			<img
				ref={imgRef}
				style={{
					cursor: "pointer",
					width: 190,
					border: "1px solid #ccc",
				}}
				src={logo}
				onMouseOver={onMouseOverImg}
				onMouseOut={onMouseOutImg}
				onMouseMove={onMouseMoveImg}
				onMouseDown={onMouseDownImg}
				onMouseUp={onMouseUpImg}
				onClick={onClickImg}
				onDoubleClick={onDoubleClickImg}
			/>
		</>
	);
}
