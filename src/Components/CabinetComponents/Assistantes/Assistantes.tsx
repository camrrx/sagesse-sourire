import CardsPerso from "../../CardsPerso/CardsPerso";
import "./Assistantes.scss";
import { employes_assistantes } from "../../../assets/employes";
import {
	handleScrollForSection,
	addScrollListener,
	removeScrollListener,
} from "../../../utils/scrollUtils";
import { useState, useEffect } from "react";

const Assistantes = () => {
	const [showSection, setShowSection] = useState(false);

	useEffect(() => {
		const handleScroll: EventListener = () => {
			handleScrollForSection("assistantes", setShowSection);
		};

		addScrollListener(handleScroll);

		return () => {
			removeScrollListener(handleScroll);
		};
	}, []);
	return (
		<div
			className={`assistantes-container grey-theme ${
				showSection ? "show" : "noshow"
			}`}>
			<h1 className="assistantes-title">LES ASSISTANTES</h1>
			<h5 className="assistantes-description">
				Tous les dentistes du cabinet travail en équipe et s’impliquent dans la
				mise en oeuvre des traitements globaux que nous proposons à nos
				patients.
			</h5>
			<h6 className="assistantes-description">
				Si vous devez prendre Rendez-vous, soyez compréhensif, il n’est pas
				facile de trouver une place. Il est aussi très important de décommander,
				si vous ne pouvez pas venir.
			</h6>
			<div className="assistantes-perso-container">
				{employes_assistantes.map((assistante, index) => (
					<CardsPerso key={index} persoInfos={assistante} />
				))}
			</div>
		</div>
	);
};

export default Assistantes;
