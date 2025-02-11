import React, { Component } from "react";
import "./assets/css/styles.css";
import GroceryList from "../../ex02/src/GroceryList";

const groceries = [
	{ name: "milk", count: 10 },
	{ name: "egg", count: 20 },
	{ name: "bread", count: 5 },
];

class App extends Component {
	render() {
		return (
			<div id={"App"}>
				<h1>{"Grocery List"}</h1>
				<p> GroceryList 컴포넌트 작성하기</p>
				<GroceryList
					groceries={groceries}
				></GroceryList>
			</div>
		);
	}
}

// new GroceryList(groceries) 생성자에서 전달

export default App;
