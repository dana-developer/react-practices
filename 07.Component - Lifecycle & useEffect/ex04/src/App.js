import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
	const __getCurrentTime = () => {
		const now = new Date();

		return {
			hours: now.getHours(),
			minutes: now.getMinutes(),
			seconds: now.getSeconds(),
		};
	};

	const [currentTime, setCurrentTime] = useState(__getCurrentTime());
	const [ticks, setTicks] = useState(0);
	// const [intervalId, setIntervalId] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// componentDidMount
			setCurrentTime(__getCurrentTime());
			setTicks((ticks) => ticks + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []); // []의존성 배열이 빈 경우, 컴포넌트가 처음 마운트될 때 한번만 실행
	// [] 배열를 아예 선언하지 않으면, 리렌더링될때마다 마운트된다.

	// 마운트는 상태가 변경될때마다 실행되지 않고, 해당 컴포넌트가 생성될때에만 실행된다.

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		// componentDidMount
	// 		setCurrentTime(__getCurrentTime());
	// 		setTicks(ticks + 1);
	// 	}, 1000);

	// 	return () => {
	// 		clearInterval(intervalId);
	// 	};
	// }, [ticks]); // []의존성 배열에 ticks가 있는 경우, ticks가 업데이트될때마다 마운트시킨다.

	return ticks % 10 === 0 ? null : (
		<Clock
			title={`ex04: Clock Component II: ${ticks}`}
			hours={currentTime.hours}
			minutes={currentTime.minutes}
			seconds={currentTime.seconds}
		/>
	);
}
