import React from "react";
import "./assets/scss/App.scss";
import data from "./assets/json/data";
import TabBox from "./TabBox";

function App(props) {
	return (
		<div id={"App"}>
			<TabBox tabs={data}></TabBox>
		</div>
	);
}

export default App;
