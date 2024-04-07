import { Link } from "react-router-dom";
import "./Bienvenue.scss";

const Bienvenue = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">
        Sagesse <br></br> <small>&</small> Sourire
      </h1>
      <p>
        Bienvenue au cabinet dentaire de Chateaubriant. Ici on vous accueille
        avec le sourire. Experts des dents et de tout ce qui touche à la
        dentition. Nous excellons dans la sagesse et le sourire.
      </p>
      <div className="buttons">
        <Link to="/nousContacter">
          <button className="button-1 button-contact">Nous contacter</button>
        </Link>
        <Link to="/nousContacter">
          <button className="button-3 button-contact">Prendre RDV</button>
        </Link>
      </div>
    </div>
  );
};
export default Bienvenue;
