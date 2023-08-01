import "./Actualite.scss";
import { ActualitesData } from "../../assets/ActualiteData";

export type actualite = {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	document: string;
};

const Actualite = () => {
	return (
		<div className="actualite-container">
			<h2 className="actualite-title">ACTUALITES</h2>
			<div className="actualite-cards">
				{ActualitesData.map((actu: actualite) => (
					<div className="card">
						<div className="card__image"></div>
						<div className="card__content">
							<div className="card__title">{actu.title}</div>
							<div className="card__describe">{actu.description}</div>
							{actu.document ? (
								<div className="card__document">{actu.document}</div>
							) : (
								""
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Actualite;
