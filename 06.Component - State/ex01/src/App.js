import React from "react";
import Incrementor01 from "./Incrementor01";
import Incrementor02 from "./Incrementor02";

function App() {
	return (
		<>
			<h2>ex04 - Component State?</h2>
			<Incrementor01 val={100} step={100} />
			<br />
			<Incrementor02 val={0} step={10} />
		</>
	);
}

export default App;
