import "./App.css";
import Home from "./Pages/Home/Home";
import Bienvenue from "./Components/Bienvenue/Bienvenue";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="*" element={<Home></Home>}></Route>
				<Route
					path="/sagesse-sourire/bienvenue"
					element={<Bienvenue></Bienvenue>}></Route>
			</Routes>
		</>
	);
}

export default App;
