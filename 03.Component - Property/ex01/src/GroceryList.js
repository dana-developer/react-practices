import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList() {
	return (
		<ol className={"grocery-list"}>
			{}
			<GroceryItem name="bread" count={10}></GroceryItem>
			<GroceryItem name="banana" count={20}></GroceryItem>
			<GroceryItem name="lemon" count={5}></GroceryItem>
			<GroceryItem name="milk" count={30}></GroceryItem>
		</ol>
	);
}

export default GroceryList;
