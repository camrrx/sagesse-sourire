import "./Equipe.scss";
import { Link } from "react-router-dom";

const Equipe = () => {
  return (
    <div className={`notrecabinet-container`}>
      <h1 className="title">Le Cabinet</h1>
      <p>
        Notre cabinet soigne des patients de la région depuis 1903 Notre équipe
        médicale s’est regroupée autour de compétences professionnelles et
        humaines qui permettent une prise en charge et une qualité de soins de
        haut niveau, dans tous les domaines de la chirurgie dentaire.
        <br></br>
        <br></br>Cet exercice de groupe permet de mettre en commun les
        compétences et qualités de chacun au profit de tous. Toute notre équipe
        s’engage à informer les patients sur les avantages et les inconvénients
        éventuels des traitements réalisés et sur leurs coûts.
      </p>

      <Link to="/sagesse-sourire/bienvenue#venircheznous">
        <button className="button-3 button-contact"> Venir chez nous</button>
      </Link>
    </div>
  );
};

export default Equipe;
