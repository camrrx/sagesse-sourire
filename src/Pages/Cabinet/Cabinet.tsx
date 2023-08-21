import Accueil from "../../Components/CabinetComponents/Accueil/Accueil";
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
		</div>
	);
};

export default Cabinet;
