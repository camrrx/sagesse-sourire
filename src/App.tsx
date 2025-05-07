import "./App.css";
import Cabinet from "./Pages/Cabinet/Cabinet";
import Home from "./Pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Traitements from "./Pages/Traitements/Traitements";
import Honoraire from "./Pages/Urgences/Urgences";
import { useEffect, useState } from "react";
import Sidebar from "./Components/MenuComponents/Sidebar/Sidebar";
import Navbar from "./Components/MenuComponents/Navbar/Navbar";

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
	// const isMobile = window.matchMedia("(max-width: 500px)").matches;

	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 500px)").matches
	);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.matchMedia("(max-width: 500px)").matches);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isMobile ? <Sidebar /> : <Navbar />}

			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/equipe.php" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cabinet" element={<Cabinet />} />
				<Route path="/traitements" element={<Traitements />} />
				<Route path="/urgences" element={<Honoraire />} />
			</Routes>
		</>
	);
};

export default App;
