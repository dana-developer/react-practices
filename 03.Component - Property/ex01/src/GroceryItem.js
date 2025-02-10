import React from "react";

function GroceryListItem({ name, count }) {
	return (
		<li>
			<strong>{name}</strong>
			<span>{count}</span>
		</li>
	);
}

export default GroceryListItem;
