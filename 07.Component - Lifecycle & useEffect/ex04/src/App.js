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

	return ticks % 10 === 0 ? null : (
		<Clock
			title={`ex04: Clock Component II: ${ticks}`}
			hours={currentTime.hours}
			minutes={currentTime.minutes}
			seconds={currentTime.seconds}
		/>
	);
}
