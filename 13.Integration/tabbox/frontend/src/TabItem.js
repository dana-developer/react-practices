import React from "react";
import { Tab_Item } from "./assets/scss/TabItem.scss";

function TabItem({ name, active }) {
	// return <li className={active == true ? "active" : ""}>{name}</li>;
	// return <li className={[Tab_Item, active ? "active" : ""].join(" ")}></li>

	return <li className={`Tab_Item${active ? " active" : ""}`}>{name}</li>;
}

export default TabItem;
