import "./NotreHistoire.scss";
import frise from "../../../assets/frise.png";

const NotreHistoire = () => {
	return (
		<div className="notrehistoire-container">
			<h2 className="notrehistoire-title">NOTRE HISTOIRE</h2>
			<img src={frise} />
		</div>
	);
};

export default NotreHistoire;
