function App() {
	const App = document.createElement("div"); // 최상위 element
	App.textContent = "Hello World";

	return App;
}

document.getElementById("root").appendChild(App());
