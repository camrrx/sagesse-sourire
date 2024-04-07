import "./Presentation.scss";
import dentiste from "../../../assets/dentiste.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  handleScrollForSection,
  addScrollListener,
  removeScrollListener,
} from "../../../utils/scrollUtils";
import dentistIcon from "../../../assets/icones/dentist.png";
import loupe from "../../../assets/icones/loupe.png";
import brosse from "../../../assets/icones/brosse.png";
import cardImg from "../../../assets/icones/dentCard.png";

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
              <img src={loupe} alt="" />
            </div>
            <div className="icone-wrapper">
              <img src={brosse} alt="" />
            </div>
            <div className="icone-wrapper">
              <img src={cardImg} alt="" />
            </div>
          </div>
          <h4 className="presentation-texte">
            Au service de votre bien-être et de votre santé.
          </h4>
          <h2 className="presentation-titre">
            Nous sommes les garants <br></br> d'une dentisterie moderne et
            actualisée.
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
            className={`description1 ${showPresentation ? "show" : "noshow"}`}
          >
            <img src={dentistIcon} alt="" />
            <h5>
              Notre équipe médicale s’est regroupée autour de compétences
              professionnelles et humaines qui permettent une prise en charge et
              une qualité de soins de haut niveau, dans tous les domaines de la
              chirurgie dentaire. Cet exercice de groupe permet de mettre en
              commun les compétences et qualités de chacun au profit de tous.
            </h5>
            <h6>
              Toute notre équipe s’engage à informer les patients sur les
              avantages et les inconvénients éventuels des traitements réalisés
              et sur leurs coûts.
            </h6>
            <Link
              className="button-2 button-contact button-equipe"
              to="/sagesse-sourire/leCabinet#equipes"
            >
              L'équipe
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
