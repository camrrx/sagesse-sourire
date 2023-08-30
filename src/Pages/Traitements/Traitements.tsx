import ImplantsDentaires from "../../Components/TraitementsComponents/ImplantsDentaires/ImplantsDentaires";
import TraitementsTop from "../../Components/TraitementsComponents/TraitementsTop/TraitementsTop";
import "./Traitements.scss";

const Traitements = () => {
	return (
		<div className="traitements-container grey-theme">
			<TraitementsTop></TraitementsTop>
			<ImplantsDentaires></ImplantsDentaires>
		</div>
	);
};

export default Traitements;
