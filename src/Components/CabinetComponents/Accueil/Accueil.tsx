import CardsPerso from "../../CardsPerso/CardsPerso";
import "./Accueil.scss";
import { employes_accueils } from "../../../assets/employes";

const Accueil = () => {
	return (
		<div className="accueil-container">
			<h2 className="actualite-title">L'ACCUEIL</h2>
			<div className="accueil-perso-container">
				{employes_accueils.map((employe, index) => (
					<CardsPerso key={index} persoInfos={employe} />
				))}
			</div>
		</div>
	);
};

export default Accueil;
