import "./App.css";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Traitements from "./Pages/Traitements/Traitements";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/sagesse-sourire/home" element={<Home />} />
				<Route path="/sagesse-sourire/leCabinet" element={<Cabinet />} />
				<Route path="/sagesse-sourire/traitements" element={<Traitements />} />
			</Routes>
		</>
	);
};

export default App;
