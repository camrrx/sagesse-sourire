import "./App.css";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<>
			<div className="navbar light-theme">
				<Navbar />
			</div>
			<Routes>
				<Route path="*" element={<Home></Home>}></Route>
				<Route path="/sagesse-sourire/home" element={<Home></Home>}></Route>
				<Route
					path="/sagesse-sourire/leCabinet"
					element={<Cabinet></Cabinet>}></Route>
			</Routes>
		</>
	);
}

export default App;
