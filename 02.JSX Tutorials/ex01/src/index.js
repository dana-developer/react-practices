import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";

if (process.env.NODE_ENV === "production") {
	// 로그를 작성할 때에는 사용자가 보지 못하도록 함수를 재정의한다.
	console.log = () => {};
	console.info = () => {};
	console.error = () => {};
	console.warn = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
