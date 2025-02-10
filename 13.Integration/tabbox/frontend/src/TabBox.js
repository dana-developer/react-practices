import React from "react";
import Tabs from "./Tabs";

function TabBox({ tabs }) {
	return (
		<div className="tab-box">
			<Tabs tabs={tabs}></Tabs>
			<div>탭뷰입니다.</div>
		</div>
	);
}

export default TabBox;
