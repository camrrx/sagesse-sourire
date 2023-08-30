import "./ImplantsDentaires.scss";
import implant from "../../../assets/cards/implant.png";

const ImplantsDentaires = () => {
	return (
		<div className="ImplantsDentaires-container grey-theme">
			<div></div>
			<div className="implant-container">
				<img className="implant-img" src={implant}></img>
			</div>
		</div>
	);
};

export default ImplantsDentaires;
