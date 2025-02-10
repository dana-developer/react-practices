import React from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";

function TabBox({ tabs }) {
	return (
		<div className="tab-box">
			<Tabs tabs={tabs}></Tabs>
			<TabView></TabView>
		</div>
	);
}

export default TabBox;
