import "./Prothesistes.scss";
import dent from "../../../assets/dent_dentiste.png";
import technologie from "../../../assets/technologie.png";
import communication from "../../../assets/communication.png";
import materiaux from "../../../assets/materiaux.png";
import {
	handleScrollForSection,
	addScrollListener,
	removeScrollListener,
} from "../../../utils/scrollUtils";
import { useState, useEffect } from "react";
import { useTheme } from "../../../ThemeContext";

const Prothesistes = () => {
	const [showSection, setShowSection] = useState(false);

	const { theme } = useTheme();

	useEffect(() => {
		const handleScroll: EventListener = () => {
			handleScrollForSection("prothesistes", setShowSection);
		};

		addScrollListener(handleScroll);

		return () => {
			removeScrollListener(handleScroll);
		};
	}, []);
	return (
		<div className={`prothesistes-container ${theme}`}>
			<div className={`prothesistes-text ${showSection ? "show" : "show"}`}>
				<h1 className="title">LES PROTHESISTES</h1>
				<p className="description1">
					Nous travaillons avec un laboratoire de prothèses proche de notre
					cabinet dentaire.
				</p>
				<div className="prothesistes-cards">
					<div className="card-proth">
						<img className="icon" src={technologie} alt="" />
						<h1>Exigence</h1>
						<p>
							Ils partagent nos exigences et font appel aux avancées
							technologiques les plus récentes et les plus éprouvées.
						</p>
					</div>
					<div className="card-proth">
						<img className="icon" src={materiaux} alt="" />
						<h1>Compétence</h1>
						<p>
							Ils utilisent les compétences de professionnels reconnus et de
							matériaux certifiés pour la sécurité de nos patients. La
							traçabilité des prothèses réalisées est assurée par tous et
							disponible pour tous nos patients.
						</p>
					</div>
					<div className="card-proth">
						<img className="icon" src={communication} alt="" />
						<h1>Synérgie</h1>
						<p>
							Les travaux complexes sont réalisés en synergie, il est souvent
							utile que le prothésiste voit en bouche ce que l'on veut réaliser,
							et notre proximité rend cela possible.
						</p>
					</div>
				</div>
			</div>
			<div
				className={`prothesistes-dent grey-theme ${
					showSection ? "show" : "noshow"
				}`}>
				<img className="dent-img" src={dent}></img>
			</div>
		</div>
	);
};

export default Prothesistes;
