import React from "react";
import { Grocery_Item } from "./assets/scss/GroceryItem.scss";

function GroceryListItem({ name, count }) {
	return (
		<li className={Grocery_Item}>
			<strong>{name}</strong>
			<span>{count}</span>
		</li>
	);
}

export default GroceryListItem;
