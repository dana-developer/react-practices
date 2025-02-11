import React, { Component } from "react";
import GroceryItem from "./GroceryItem";

class GroceryList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ol className={"grocery-list"}>
				{this.props.groceries.map((grocery, index) => {
					return (
						<GroceryItem
							key={index}
							name={grocery.name}
							count={grocery.count}
						></GroceryItem>
					);
				})}
			</ol>
		);
	}
}

export default GroceryList;
