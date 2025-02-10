import React from "react";

function TabItem({ name, active }) {
	return <li className={active == true ? "active" : ""}>{name}</li>;
}

export default TabItem;
