import "./App.css";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Traitements from "./Pages/Traitements/Traitements";
import Honoraire from "./Pages/Honoraire/Honoraire";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cabinet" element={<Cabinet />} />
				<Route path="/traitements" element={<Traitements />} />
				<Route path="/honoraires" element={<Honoraire />} />
			</Routes>
		</>
	);
};

export default App;
