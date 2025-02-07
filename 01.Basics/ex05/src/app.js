import React from "react";

function App() {
	// const App = document.createElement("div"); // 최상위 element
	// App.textContent = "Hello World";

	const App = React.createElement("div", null, "Hello World");
	return App;
}

export { App };
