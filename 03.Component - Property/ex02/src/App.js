import React from "react";
import "./assets/css/styles.css";
import GroceryList from "../../ex02/src/GroceryList";

function App(props) {
	const groceries = [
		{ name: "milk", count: 10 },
		{ name: "egg", count: 20 },
		{ name: "bread", count: 5 },
	];

	return (
		<div id={"App"}>
			<h1>{"Grocery List"}</h1>
			<p> GroceryList 컴포넌트 작성하기</p>
			<GroceryList groceries={groceries}></GroceryList>
		</div>
	);
}

export default App;
