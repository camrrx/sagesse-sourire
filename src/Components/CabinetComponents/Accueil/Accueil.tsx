import CardsPerso from "../../CardsPerso/CardsPerso";
import "./Accueil.scss";
import { employes_accueils } from "../../../assets/employes";
import {
	handleScrollForSection,
	addScrollListener,
	removeScrollListener,
} from "../../../utils/scrollUtils";
import { useState, useEffect } from "react";

const Accueil = () => {
	const [showSection, setShowSection] = useState(false);

	useEffect(() => {
		const handleScroll: EventListener = () => {
			handleScrollForSection("accueil", setShowSection);
		};

		addScrollListener(handleScroll);

		return () => {
			removeScrollListener(handleScroll);
		};
	}, []);

	return (
		<div
			className={`accueil-container ${
				showSection ? "show" : "noshow"
			}`}
			id="accueil">
			<div className="accueil-text">
				<h1 className={`accueil-title  ${showSection ? "show" : "noshow"}`}>
					L'Accueil 
				</h1>
				<h5
					className={`accueil-description  ${showSection ? "show" : "noshow"}`}>
					L’accueil et le secrétariat sont à la charge de deux personnes, elles
					reçoivent le renfort des autres assistantes lorsque les patients sont
					trop nombreux. Elles accueillent les patients avec sourire et
					compétence.
				</h5>
			</div>

			<div className="accueil-perso-container">
				{employes_accueils.map((employe, index) => (
					<div
						className={`card-perso-accueil  ${
							showSection ? "show" : "noshow"
						}`}>
						<CardsPerso key={index} persoInfos={employe} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Accueil;
