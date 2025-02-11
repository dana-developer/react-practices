import React from "react";
import GroceryItem from "./GroceryItem";
import styled from "styled-components";

const StyledGroceryList = styled.ol`
	padding-left: 50px;
`;

function GroceryList({ groceries }) {
	return (
		<StyledGroceryList>
			{groceries.map((grocery, index) => {
				return (
					<GroceryItem
						key={index}
						name={grocery.name}
						count={grocery.count}
					></GroceryItem>
				);
			})}
		</StyledGroceryList>
	);
}

export default GroceryList;
