import Esthetique from "../../Components/TraitementsComponents/Esthetique/Esthetique";
import GestionDouleurs from "../../Components/TraitementsComponents/GestionDouleurs/GestionDouleurs";
import ImplantsDentaires from "../../Components/TraitementsComponents/ImplantsDentaires/ImplantsDentaires";
import Orthodontie from "../../Components/TraitementsComponents/Orthodontie/Orthodontie";
import Parodontie from "../../Components/TraitementsComponents/Parodontie/Parodontie";
import TraitementsTop from "../../Components/TraitementsComponents/TraitementsTop/TraitementsTop";
import "./Traitements.scss";

const Traitements = () => {
	return (
		<div className="traitements-container grey-theme">
			<TraitementsTop></TraitementsTop>
			<ImplantsDentaires></ImplantsDentaires>
			<Orthodontie></Orthodontie>
			<Esthetique></Esthetique>
			<Parodontie></Parodontie>
			<GestionDouleurs></GestionDouleurs>
		</div>
	);
};

export default Traitements;
