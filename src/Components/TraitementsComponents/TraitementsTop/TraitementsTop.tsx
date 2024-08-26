import "./TraitementsTop.scss";
import dent from "../../../assets/dent-color.png";
import { useTheme } from "../../../ThemeContext";
import implantIcon from "../../../assets/icones/dental-implant.png";
import dentIcon from "../../../assets/icones/dent.png";

const TraitementsTop = () => {
  const { theme } = useTheme();

  return (
    <div className={`TraitementsTop-container ${theme}`}>
      <div className="traitements">
        <div className="column gap-1 w-50 margin-l-3">
          <a
            href="/#/traitements#implantsDentaires"
            className="traitement traitement-1"
          >
            <img className="implant-icon" src={implantIcon} />
            <h2>Implantologie</h2>
            <h3>
              L'implantologie offre une alternative moderne à la pose de bridges
              ou d'appareils dentaires (dentiers)
            </h3>
          </a>
          <a
            href="/#/traitements#soinsDentaires"
            className="traitement traitement-1"
          >
            <img className="implant-icon" src={implantIcon} />
            <h2>Soins dentaires</h2>
            <h3>
              Les soins conservateurs englobent les premières interventions
              proposées par le chirurgien-dentiste qui visent à maintenir la
              bonne santé de votre bouche.
            </h3>
            <h3></h3>
          </a>
          {/* <a
					href="/#/traitements#orthodontie"
					className="traitement traitement-2">
					<img className="implant-icon" src={braceIcon} />

					<h2> L’Orthodontie</h2>
					<h3>
						L’orthodontie permet de rétablir un alignement des dents et ainsi
						d’obtenir un sourire harmonieux
					</h3>
				</a> */}
          <a
            href="/#/traitements#dentisterieEsthetique"
            className="traitement traitement-3"
          >
            <img className="implant-icon" src={dentIcon} />

            <h2>Esthétique</h2>
            <h3>
              L'esthétique et la beauté, font partie intégrante du domaine de la
              santé. Le visage est la partie la plus visible.
            </h3>
          </a>
          {/* <a href="/#/traitements#parodontie" className="traitement traitement-4">
					<img className="implant-icon" src={paroIcon} />

					<h2>Parodontie et soins</h2>
					<h3>
						Faute de prévention, de soins efficaces, d’une bonne information,
						les dents et les gencives peuvent être atteintes de maladies dont
						les deux plus fréquentes sont : la maladie carieuse & les maladies
						parodontales
					</h3>
				</a> */}
          {/* <a
					href="/#/traitements#gestionDouleur"
					className="traitement traitement-5">
					<img className="implant-icon" src={soinIcon} />

					<h2>Gestion de la douleur</h2>
					<h3>
						La gestion de la douleur et de l’anxiété des patients a toujours
						constitué l’un des plus grands défis de notre profession.
					</h3>
				</a> */}
        </div>
        <div className="dent-container">
          {<img className="dent" src={dent}></img>}{" "}
        </div>
      </div>
    </div>
  );
};

export default TraitementsTop;
