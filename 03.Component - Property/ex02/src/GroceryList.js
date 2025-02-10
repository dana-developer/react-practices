import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
	// const groceryItems = [];

	// groceries.forEach((grocery) => {
	// 	groceryItems.push(
	// 		<GroceryItem
	// 			name={grocery.name}
	// 			count={grocery.count}
	// 		></GroceryItem>
	// 	);
	// });

	return (
		<ol className={"grocery-list"}>
			{groceries.map((grocery, index) => {
				return (
					<GroceryItem
						key={index} // 같은 DOM안에 같은 컴포넌트가 여러개인 경우 key값을 제공하는 것이 좋음!
						name={grocery.name}
						count={grocery.count}
					></GroceryItem>
				);
			})}
		</ol>
	);
}

export default GroceryList;
