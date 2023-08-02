import "./Home.scss";
import Bienvenue from "../../Components/HomeComponents/Bienvenue/Bienvenue";
import Actualite from "../../Components/HomeComponents/Actualite/Actualite";
import Presentation from "../../Components/HomeComponents/Presentation/Presentation";
import Equipements from "../../Components/HomeComponents/Equipements/Equipements";
import VenirChezNous from "../../Components/HomeComponents/VenirChezNous/VenirChezNous";
import Horaire from "../../Components/HomeComponents/Horaire/Horaire";

const Home = () => {
	return (
		<div className="home-container light-theme">
			<div className="bienvenue" id="bienvenue">
				<Bienvenue></Bienvenue>
			</div>
			<div className="presentation" id="presentation">
				<Presentation></Presentation>
			</div>
			<div className="separation"></div>
			<div className="actualite" id="actualites">
				<Actualite></Actualite>
			</div>
			<div className="separation"></div>
			<div className="equipements" id="equipements">
				<Equipements></Equipements>
			</div>
			<div className="venircheznous-horaire">
				<div id="venircheznous">
					<VenirChezNous></VenirChezNous>
				</div>
				<div id="horaire">
					<Horaire></Horaire>
				</div>
			</div>
		</div>
	);
};

export default Home;
