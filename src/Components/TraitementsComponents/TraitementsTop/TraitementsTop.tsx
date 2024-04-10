import "./TraitementsTop.scss";
import dent from "../../../assets/dent.png";
import { useTheme } from "../../../ThemeContext";
import implantIcon from "../../../assets/icones/dental-implant.png";
import braceIcon from "../../../assets/icones/brace.png";
import dentIcon from "../../../assets/icones/dent.png";
import paroIcon from "../../../assets/icones/paro.png";
import soinIcon from "../../../assets/icones/soin.png";

const TraitementsTop = () => {
	const { theme } = useTheme();

	return (
		<div className={`TraitementsTop-container ${theme}`}>
			<div className="traitements">
				<a href="#implantsDentaires" className="traitement traitement-1">
					<img className="implant-icon" src={implantIcon} />
					<h2>Les implants dentaires</h2>
					<h3>
						L'implantologie offre une alternative moderne à la pose de bridges
						ou d'appareils dentaires (dentiers)
					</h3>
				</a>
				<a href="#orthodontie" className="traitement traitement-2">
					<img className="implant-icon" src={braceIcon} />

					<h2> L’Orthodontie</h2>
					<h3>
						L’orthodontie permet de rétablir un alignement des dents et ainsi
						d’obtenir un sourire harmonieux
					</h3>
				</a>
				<a href="#dentisterieEsthetique" className="traitement traitement-3">
					<img className="implant-icon" src={dentIcon} />

					<h2>La Dentisterie Esthétique</h2>
					<h3>
						L'esthétique et la beauté, font partie intégrante du domaine de la
						santé. Le visage est la partie la plus visible.
					</h3>
				</a>
				<a href="#parodontie" className="traitement traitement-4">
					<img className="implant-icon" src={paroIcon} />

					<h2>Parodontie et soins</h2>
					<h3>
						Faute de prévention, de soins efficaces, d’une bonne information,
						les dents et les gencives peuvent être atteintes de maladies dont
						les deux plus fréquentes sont : la maladie carieuse & les maladies
						parodontales
					</h3>
				</a>
				<a href="#gestionDouleur" className="traitement traitement-5">
					<img className="implant-icon" src={soinIcon} />

					<h2>Gestion de la douleur</h2>
					<h3>
						La gestion de la douleur et de l’anxiété des patients a toujours
						constitué l’un des plus grands défis de notre profession.
					</h3>
				</a>
				<div className="dent-container">
					{<img className="dent" src={dent}></img>}{" "}
				</div>
			</div>
		</div>
	);
};

export default TraitementsTop;
