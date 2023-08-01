import { Link } from "react-router-dom";
import "./Bienvenue.scss";

const Bienvenue = () => {
  return (
    <div className="welcome-container">
      <h1>BIENVENUE</h1>
      <p>
        La technologie disponible et les techniques de soins actuelles
        permettent à la profession dentaire de toujours mieux soigner et
        prévenir. Constamment à votre écoute, nous vous apporterons toute
        l’information nécessaire à vos prises de décisions et vous proposerons
        ainsi les solutions les plus adaptées à votre situation bucco-dentaire.
      </p>

      <Link to="/nousContacter">
        <button className="button-contact"> Nous contacter</button>
      </Link>
    </div>
  );
};
export default Bienvenue;
