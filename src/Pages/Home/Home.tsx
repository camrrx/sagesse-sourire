import "./Home.scss";
import Bienvenue from "../../Components/HomeComponents/Bienvenue/Bienvenue";
import Actualite from "../../Components/HomeComponents/Actualite/Actualite";
import Presentation from "../../Components/HomeComponents/Presentation/Presentation";
import Equipements from "../../Components/HomeComponents/Equipements/Equipements";
import VenirChezNous from "../../Components/HomeComponents/VenirChezNous/VenirChezNous";
import Services from "../../Components/HomeComponents/Services/Services";
import dentist from "../../assets/dentist.png";
import { useTheme } from "../../ThemeContext";
import Footer from "../../Components/shared/Footer";
import { useEffect, useState } from "react";

const Home = () => {
	const { theme } = useTheme();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		const handleResize = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};

		setIsMobile(mediaQuery.matches);

		mediaQuery.addEventListener("change", handleResize);
		return () => {
			mediaQuery.removeEventListener("change", handleResize);
		};
	}, []);

	return (
		<div className={`home-container ${theme}`}>
			{isMobile ? (
				""
			) : (
				<div className="banniere">
					<img src={dentist} alt="" />
				</div>
			)}

			<div className="bienvenue" id="bienvenue">
				<Bienvenue></Bienvenue>
			</div>
			<div className="services" id="services">
				<Services></Services>
			</div>
			<div className="presentation" id="presentation">
				<Presentation></Presentation>
			</div>
			<div className="actualite" id="actualites">
				<Actualite></Actualite>
			</div>
			<div className="equipements" id="equipements">
				<Equipements></Equipements>
			</div>

			<div className="venircheznous">
				<div id="venircheznous">
					<VenirChezNous></VenirChezNous>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
