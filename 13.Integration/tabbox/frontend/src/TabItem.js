import React from "react";
import { Tab_Item } from "./assets/scss/TabItem.scss";

function TabItem({ index, name, active, handleTabSelect }) {
	// return <li className={active == true ? "active" : ""}>{name}</li>;
	// return <li className={[Tab_Item, active ? "active" : ""].join(" ")}></li>

	return (
		<li
			className={`Tab_Item${active ? " active" : ""}`}
			onClick={() => {
				handleTabSelect(index);
			}}
		>
			{name}
		</li>
	);
}

export default TabItem;
