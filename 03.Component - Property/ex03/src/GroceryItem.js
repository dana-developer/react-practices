import React, { Component } from "react";

class GroceryListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>
				<strong>{this.props.name}</strong>
				<span>{this.props.count}</span>
			</li>
		);
	}
}

export default GroceryListItem;
