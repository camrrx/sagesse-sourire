import "./CardsPerso.scss";

const CardsPerso = () => {
	return (
		<div className="card-container">
			<div className="card-perso-pict"></div>
			<div className="card-bg"></div>
			<div className="card-perso-info">
				<div className="card-perso-name">Stéphanie</div>
				<div className="card-perso-function-container">
					<div className="card-perso-function">Accueil Téléphonique</div>
					<div className="card-perso-function">Secrétariat</div>
					<div className="card-perso-function"> Comptabilité</div>
				</div>
			</div>
		</div>
	);
};

export default CardsPerso;
