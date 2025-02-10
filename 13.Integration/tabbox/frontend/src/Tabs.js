import React from "react";
import TabItem from "./TabItem";

function Tabs({ tabs }) {
	return (
		<ul>
			{tabs.map((tab) => {
				return (
					<TabItem
						key={tab.no}
						name={tab.name}
						active={tab.active}
					></TabItem>
				);
			})}
		</ul>
	);
}

export default Tabs;
