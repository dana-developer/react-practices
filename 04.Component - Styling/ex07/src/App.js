import React from "react";
import Header from "./Header";
import styled from "styled-components";

// import "./assets/scss/App.scss";

const DivApp = styled.div`
	text-align: center;
	color: #111;
`;

function App() {
	return (
		<DivApp>
			<Header />
		</DivApp>
	);
}

export default App;
