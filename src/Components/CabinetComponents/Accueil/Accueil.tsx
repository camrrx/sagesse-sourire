import CardsPerso from "../../CardsPerso/CardsPerso";
import "./Accueil.scss";
import { employes_accueils } from "../../../assets/employes";

const Accueil = () => {
	return (
		<div className="accueil-container">
			<div className="accueil-text">
				<h1 className="accueil-title">L'ACCUEIL</h1>
				<h5 className="accueil-description">
					L’accueil et le secrétariat sont à la charge de deux personnes, elles
					reçoivent le renfort des autres assistantes lorsque les patients sont
					trop nombreux. Elles accueillent les patients avec sourire et
					compétence.
				</h5>
			</div>

			<div className="accueil-perso-container">
				{employes_accueils.map((employe, index) => (
					<CardsPerso key={index} persoInfos={employe} />
				))}
			</div>
		</div>
	);
};

export default Accueil;
