import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Navbar from "./Components/MenuComponents/Navbar/Navbar";
import Sidebar from "./Components/MenuComponents/Sidebar/Sidebar";
import { ThemeProvider } from "./ThemeContext";
const isMobile = window.matchMedia("(max-width: 500px)").matches;

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<HashRouter basename="/">
				{isMobile ? <Sidebar /> : <Navbar />}
				<App />
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>
);
