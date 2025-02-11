import React from "react";
import GroceryList from "../src/GroceryList";
import { title } from "./assets/scss/App.scss";

function App(props) {
	const groceries = [
		{ name: "milk", count: 10 },
		{ name: "egg", count: 20 },
		{ name: "bread", count: 5 },
	];

	return (
		<div id={"App"}>
			<h1 className={title}>{"Grocery List"}</h1>
			<p> GroceryList 컴포넌트 작성하기</p>
			<GroceryList groceries={groceries}></GroceryList>
		</div>
	);
}

export default App;
