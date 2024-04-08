import { useState } from "react";
import { useTheme } from "../../../ThemeContext";
import "../PrendreRDV/PrendreRDV.scss";
import { Dialog } from "@headlessui/react";
import "./SendMail.scss";

interface SendMailProps {
	showPopup: boolean;
	setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendMail = ({ showPopup, setShowPopup }: SendMailProps) => {
	const { theme } = useTheme();
	const [objet, setobjet] = useState("");
	const [corp, setCorp] = useState("");

	const handleSendEmail = () => {
		const subject = encodeURIComponent(objet);
		const body = encodeURIComponent(corp);

		const mailtoUrl = `mailto:eve-Lelievre@hotmail.fr?subject=${subject}&body=${body}`;
		window.open(mailtoUrl);
		setShowPopup(false);
	};

	return (
		<div className={`send-mail-container ${theme}`}>
			<Dialog open={showPopup} onClose={() => setShowPopup(false)}>
				<Dialog.Panel className={`dialog-overlay ${theme}`}>
					<div className="dialog-box">
						<Dialog.Title className="dialog-title">
							Rédigez votre mail
						</Dialog.Title>
						<Dialog.Description className="dialog-description">
							<div className="subject-container">
								<label>Sujet :</label>
								<input
									className="input"
									type="text"
									value={objet}
									onChange={e => setobjet(e.target.value)}
								/>
							</div>
							<div className="subject">
								<label>Corps du message :</label>
								<textarea
									className="input"
									value={corp}
									onChange={e => setCorp(e.target.value)}
								/>
							</div>
						</Dialog.Description>
						<div className="buttons-container">
							<button
								className="button-1 button-contact"
								onClick={() => {
									setShowPopup(false);
								}}>
								Annuler
							</button>
							<button
								className="button-1 button-contact"
								onClick={handleSendEmail}>
								Ok
							</button>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</div>
	);
};

export default SendMail;
