import Accueil from "../../Components/CabinetComponents/Accueil/Accueil";
import Assistantes from "../../Components/CabinetComponents/Assistantes/Assistantes";
import Dentistes from "../../Components/CabinetComponents/Dentistes/Dentistes";
import Equipe from "../../Components/CabinetComponents/Equipe/Equipe";
import Prothesistes from "../../Components/CabinetComponents/Prothesistes/Prothesistes";
import "./Cabinet.scss";

const Cabinet = () => {
	return (
		<div className="lecabinet-container grey-theme">
			<div className="top" id="equipes">
				<Equipe />
			</div>
			<div className="accueil" id="accueil">
				<Accueil />
			</div>
			<div id="dentistes">
				<Dentistes />
			</div>
			<div id="assistantes">
				<Assistantes />
			</div>
			<div id="prothesistes">
				<Prothesistes />
			</div>
		</div>
	);
};

export default Cabinet;
