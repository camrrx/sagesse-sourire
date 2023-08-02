import "./Presentation.scss";
import dentiste from "../../../assets/dentiste.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Presentation = () => {
	return (
		<div className="presentation-container">
			<div className="titre">
				<h4 className="presentation-texte">
					Au service de votre bien-être et de votre santé.
				</h4>
				<h2 className="presentation-titre">
					Nous sommes les garants d'une dentisterie moderne et actualisée.
				</h2>
			</div>
			<div className="presentation-sagesse">
				<div className="titre1">
					<h5>A chateaubriant depuis</h5>
					<h2>1903</h2>
				</div>
				<img src={dentiste} className="imgdentiste" />
				<div className="description1">
					<h5>
						Notre équipe médicale s’est regroupée autour de compétences
						professionnelles et humaines qui permettent une prise en charge et
						une qualité de soins de haut niveau, dans tous les domaines de la
						chirurgie dentaire. Cet exercice de groupe permet de mettre en
						commun les compétences et qualités de chacun au profit de tous.
					</h5>
					<h6>
						Toute notre équipe s’engage à informer les patients sur les
						avantages et les inconvénients éventuels des traitements réalisés et
						sur leurs coûts.
					</h6>
					<Link to="/equipe">
						<div className="button-equipe">
							L'équipe <FaArrowRight />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
