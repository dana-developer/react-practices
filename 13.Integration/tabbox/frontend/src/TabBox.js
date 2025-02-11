import React from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import styled from "styled-components";

function TabBox({ tabs }) {
	const StyledTabBox = styled.div`
		width: fit-content;
		margin: 100px auto;
	`;

	return (
		<StyledTabBox className="tab-box">
			<Tabs tabs={tabs}></Tabs>
			<TabView></TabView>
		</StyledTabBox>
	);
}

export default TabBox;
