import { useTheme } from "../../../ThemeContext";
import "./PrendreRDV.scss";
import { Dialog } from "@headlessui/react";

interface PrendreRDVProps {
	showRDV: boolean;
	setRDV: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrendreRDV = ({ showRDV, setRDV }: PrendreRDVProps) => {
	const { theme } = useTheme();

	return (
		<div className={`${theme}`}>
			<Dialog open={showRDV} onClose={() => setRDV(false)}>
				<Dialog.Panel className={`dialog-overlay ${theme}`}>
					<div className="dialog-box">
						<Dialog.Title className="dialog-title">
							Prendre rendez-vous
						</Dialog.Title>
						<Dialog.Description className="dialog-description">
							<p>Le cabinet reçoit exclusivement sur rendez-vous. </p> <br />
							<p>
								Pour prendre rendez-vous, vous pouvez nous contacter au
								<strong> 02.40.81.01.28.</strong>
							</p>
							<br />
							<p>
								Le caractère urgent de votre situation sera évalué et nous nous
								efforcerons d’y répondre le plus rapidement possible.
								<br /> L’accueil téléphonique est ouvert le matin, du lundi au
								samedi, de <strong>8h à 11h30</strong> et
								<strong>l’après-midi</strong>, du lundi au vendredi, de
								<strong>14h à 18h30</strong>.
							</p>
							<br />
							<p>
								Avant votre rendez-vous veuillez remplir le questionnaire pré
								rendez-vous et nous le remettre à votre arrivée au cabinet
								dentaire.
							</p>
						</Dialog.Description>

						<button
							className="button-1 button-contact"
							onClick={() => setRDV(false)}>
							OK
						</button>
					</div>
				</Dialog.Panel>
			</Dialog>
		</div>
	);
};

export default PrendreRDV;
