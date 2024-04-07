import { Link } from "react-router-dom";
import "./Bienvenue.scss";

const Bienvenue = () => {
	return (
		<div className="welcome-container">
			<h1 className="title">
				Sagesse <br></br> <small>&</small> Sourire
			</h1>
			<p>
				Bienvenue au cabinet dentaire Sagesse et Sourire de Châteaubriant. A
				votre écoute, nous vous accompagnerons en vous proposant les solutions
				les plus adaptées à votre bien-être et votre santé bucco-dentaire.
			</p>
			<div className="buttons">
				<Link to="/nousContacter">
					<button className="button-1 button-contact">Nous contacter</button>
				</Link>
				<Link to="/nousContacter">
					<button className="button-3 button-contact">Prendre RDV</button>
				</Link>
			</div>
		</div>
	);
};
export default Bienvenue;
