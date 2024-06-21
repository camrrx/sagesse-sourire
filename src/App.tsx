import "./App.css";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Home from "./Pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Traitements from "./Pages/Traitements/Traitements";
import Honoraire from "./Pages/Honoraire/Honoraire";
import { useEffect } from "react";

const App = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	return (
		<>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/equipe.php" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cabinet" element={<Cabinet />} />
				<Route path="/traitements" element={<Traitements />} />
				<Route path="/honoraires" element={<Honoraire />} />
			</Routes>
		</>
	);
};

export default App;
