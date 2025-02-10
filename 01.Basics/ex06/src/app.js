import React from "react";

function App() {
	// const App = document.createElement("div"); // 최상위 element
	// App.textContent = "Hello World";

	// const App = React.createElement(\"div\", null, \"Hello World\", 10, parseInt(\"20\");
	//
	// return App;
	return (
		<div>
			{"Hello World"}
			{10}
			{parseInt("20")}
			<p>
				{"test"}
				<span>{"test2"}</span>
			</p>
		</div>
	);
}

export { App };
