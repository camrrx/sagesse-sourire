import Accueil from "../../Components/CabinetComponents/Accueil/Accueil";
import Assistantes from "../../Components/CabinetComponents/Assistantes/Assistantes";
import Dentistes from "../../Components/CabinetComponents/Dentistes/Dentistes";
import Equipe from "../../Components/CabinetComponents/Equipe/Equipe";
import "./Cabinet.scss";

const Cabinet = () => {
	return (
		<div className="lecabinet-container light-theme">
			<div className="top" id="top">
				<Equipe></Equipe>
			</div>
			<div className="equipe" id="equipe">
				<Accueil></Accueil>
			</div>
			<div className="equipe" id="equipe">
				<Dentistes></Dentistes>
			</div>
			<div className="equipe" id="equipe">
				<Assistantes></Assistantes>
			</div>
		</div>
	);
};

export default Cabinet;
