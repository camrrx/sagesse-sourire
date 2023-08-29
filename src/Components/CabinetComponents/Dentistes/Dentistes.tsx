import CardsPerso from "../../CardsPerso/CardsPerso";
import "./Dentistes.scss";
import { employes_dentistes } from "../../../assets/employes";

const Dentistes = () => {
	return (
		<div className="dentistes-container">
			<h2 className="dentistes-title">LES DENTISTES</h2>
			<h5 className="dentistes-description">
				Tous les dentistes du cabinet travail en équipe et s’impliquent dans la
				mise en oeuvre des traitements globaux que nous proposons à nos
				patients.
			</h5>
			<h6 className="dentistes-description">
				Si vous devez prendre Rendez-vous, soyez compréhensif, il n’est pas
				facile de trouver une place. Il est aussi très important de décommander,
				si vous ne pouvez pas venir.
			</h6>
			<div className="dentistes-perso-container">
				{employes_dentistes.map((dentiste, index) => (
					<CardsPerso key={index} persoInfos={dentiste} />
				))}
			</div>
		</div>
	);
};

export default Dentistes;
