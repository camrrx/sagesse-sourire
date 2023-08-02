import "./Equipements.scss";
import { EquipementsData } from "../../assets/EquipementsData";

const Equipements = () => {
	return (
		<div className="equipements-container">
			<h2 className="equipements-title">NOS EQUIPEMENTS</h2>
			<div className="equipements-items">
				{EquipementsData.map((equipement, index) => (
					<div key={index} className="equipement-item">
						<div className="circle">{equipement.number}</div>
						<div className="equipement-name">{equipement.equipment}</div>
						<div className="description">{equipement.description}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Equipements;
