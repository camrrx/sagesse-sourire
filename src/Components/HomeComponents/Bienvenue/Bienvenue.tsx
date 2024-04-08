import "./Bienvenue.scss";
import PrendreRDV from "../../shared/PrendreRDV/PrendreRDV";
import { useState } from "react";
import SendMail from "../../shared/SendMail/SendMail";

const Bienvenue = () => {
	const [showRDV, setRDV] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	return (
		<div className="welcome-container">
			<PrendreRDV showRDV={showRDV} setRDV={setRDV} />
			<SendMail showPopup={showPopup} setShowPopup={setShowPopup} />
			<h1 className="title">
				Sagesse <br></br> <small>&</small> Sourire
			</h1>
			<p>
				Bienvenue au cabinet dentaire Sagesse et Sourire de Châteaubriant. A
				votre écoute, nous vous accompagnerons en vous proposant les solutions
				les plus adaptées à votre bien-être et votre santé bucco-dentaire.
			</p>
			<div className="buttons">
				<button
					className="button-1 button-contact"
					onClick={() => setShowPopup(true)}>
					Nous contacter
				</button>
				<button
					className="button-3 button-contact"
					onClick={() => setRDV(true)}>
					Prendre RDV
				</button>
			</div>
		</div>
	);
};
export default Bienvenue;
