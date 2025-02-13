import React from "react";
import "./assets/scss/TabView.scss";

function TabView({ selectedTab }) {
	return <div>{selectedTab.contents}</div>;
}

export default TabView;
