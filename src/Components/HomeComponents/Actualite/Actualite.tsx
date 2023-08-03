import "./Actualite.scss";
import { ActualitesData } from "../../../assets/ActualiteData";

export interface ActualiteItem {
	id: number;
	title: string;
	description: string;
	document: {
		title: string;
		actions: string | { questionnairecovid: string };
	};
}

const Actualite = () => {
	const handleDocumentClick = (
		actions: string | { questionnairecovid: string }
	) => {
		if (!actions) return;

		if (typeof actions === "string") {
			window.location.href = actions;
		} else if (actions.questionnairecovid) {
			const link = document.createElement("a");
			link.href = actions.questionnairecovid;
			link.download = "questionnairecovid.pdf";
			link.click();
		}
	};

	return (
		<div className="actualite-container">
			<h2 className="actualite-title">ACTUALITES</h2>
			<div className="actualite-cards">
				{ActualitesData.map((actu: ActualiteItem) => (
					<div className="card">
						<div className="card__image">{actu.title}</div>
						<div className="card__content">
							<div className="card__describe">{actu.description}</div>
							{actu.document.title.length > 1 ? (
								<div
									className="card__document"
									onClick={() => handleDocumentClick(actu.document.actions)}>
									{actu.document.title}
								</div>
							) : (
								<div></div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Actualite;
