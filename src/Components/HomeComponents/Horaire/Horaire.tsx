import "./Horaire.scss";
import horaires from "../../../assets/datehoraires.jpg";

const Horaire = () => {
	return (
		<div className="horaire-container light-theme">
			<div className="box-container">
				<div className="warning">
					<div>
						Le cabinet dentaire reçoit uniquement sur rendez-vous.
						<br />
						<br />
						<span className="lighter-font">
							En cas d’urgence, vous pouvez nous contacter, au 02.40.81.01.28.
							Le caractère urgent de votre situation sera évalué et nous nous
							efforcerons d'y répondre le plus rapidement possible.
						</span>
					</div>
				</div>
			</div>

			<div className="box-container">
				<img src={horaires} className="horaireimg" />
			</div>
		</div>
	);
};

export default Horaire;
