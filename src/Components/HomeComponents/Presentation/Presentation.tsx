import "./Presentation.scss";
import dentiste from "../../../assets/dentiste.png";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
	handleScrollForSection,
	addScrollListener,
	removeScrollListener,
} from "../../../utils/scrollUtils";
import dentistIcon from "../../../assets/icones/dentist.png";
import eve from "../../../assets/photosEmployes/eve.png";
import laurent from "../../../assets/photosEmployes/laurent.png";
import eric from "../../../assets/photosEmployes/eric.png";
import thierry from "../../../assets/photosEmployes/thierry.png";
import karine from "../../../assets/photosEmployes/karine.png";

const Presentation = () => {
	const [showPresentation, setShowPresentation] = useState(false);

	useEffect(() => {
		const handleScroll: EventListener = () => {
			handleScrollForSection("presentation", setShowPresentation);
		};

		addScrollListener(handleScroll);

		return () => {
			removeScrollListener(handleScroll);
		};
	}, []);

	return (
		<div className="presentation-container ">
			<div className="presentation-wrapper">
				<div className={`titre ${showPresentation ? "show" : "noshow"}`}>
					<div className="icones-wrapper">
						<div className="icone-wrapper">
							<img src={eve} alt="" />
						</div>
						<div className="icone-wrapper">
							<img src={laurent} alt="" />
						</div>
						<div className="icone-wrapper">
							<img src={eric} alt="" />
						</div>
						<div className="icone-wrapper">
							<img src={thierry} alt="" />
						</div>
						<div className="icone-wrapper">
							<img src={karine} alt="" />
						</div>
					</div>
					<h4 className="presentation-texte">
						Au service de votre bien-être et de votre santé.
					</h4>
					<h2 className="presentation-titre">
						Nous attachons une attention particulière à votre sourire.
					</h2>
				</div>
				<div className="presentation-sagesse">
					<div className={`titre1 ${showPresentation ? "show" : "noshow"}`}>
						<h5>À chateaubriant depuis</h5>
						<h2>1903</h2>
					</div>
					<img
						src={dentiste}
						className={`imgdentiste ${showPresentation ? "show" : "noshow"}`}
					/>
					<div
						className={`description1 ${showPresentation ? "show" : "noshow"}`}>
						<img src={dentistIcon} alt="" />
						<h5>
							Notre équipe médicale s’est regroupée autour de compétences
							professionnelles et humaines qui permettent une prise en charge et
							une qualité de soins.
						</h5>
						<h6>
							L’exercice de groupe permet de mettre en commun les compétences et
							qualités de chacun au profit de tous.
						</h6>
						<a href="cabinet">
							<button className="button-2 button-contact button-equipe">
								L'équipe <FaArrowRight />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
