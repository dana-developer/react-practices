import React from "react";
import TabItem from "./TabItem";
import styled from "styled-components";

function Tabs({ tabs }) {
	const StyledTabs = styled.ul`
		height: 24px;
	`;
	return (
		<StyledTabs>
			{tabs.map((tab) => {
				return (
					<TabItem
						key={tab.no}
						name={tab.name}
						active={tab.active}
					></TabItem>
				);
			})}
		</StyledTabs>
	);
}

export default Tabs;
