import React, { useState } from "react";
import Tabs from "./Tabs";
import TabView from "./TabView";
import styled from "styled-components";
import data from "./assets/json/data";

function TabBox(props) {
	const StyledTabBox = styled.div`
		width: fit-content;
		margin: 100px auto;
	`;

	// TabBox (TabItem, Tabs, TabView의 부모인 컴포넌트)가 data를 가지고 있으므로 active를 변경할 수 있다.
	const [tabs, setTabs] = useState(data);
	const [selectedTab, setSelectedTab] = useState(data[0].no);

	const handleTabSelect = (tabNo) => {
		const updatedTabs = tabs.map((tab) => ({
			// react에서는 상태를 불편성을 유지하며 업데이트해야 함.
			...tab, // 기존 tab 객체를 복사
			active: tab.no === tabNo, // 현재 탭 번호와 일치하면 활성화
		}));
		setTabs(updatedTabs);
		setSelectedTab(tabNo);
	};

	return (
		<StyledTabBox className="tab-box">
			<Tabs
				tabs={tabs}
				handleTabSelect={handleTabSelect} // bottom -> up으로 진행하기 위해
			></Tabs>
			<TabView
				selectedTab={tabs.find(
					(tab) => tab.no === selectedTab
				)}
			></TabView>
		</StyledTabBox>
	);
}

export default TabBox;
