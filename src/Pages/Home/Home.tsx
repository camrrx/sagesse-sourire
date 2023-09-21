import "./Home.scss";
import Bienvenue from "../../Components/HomeComponents/Bienvenue/Bienvenue";
import Actualite from "../../Components/HomeComponents/Actualite/Actualite";
import Presentation from "../../Components/HomeComponents/Presentation/Presentation";
import Equipements from "../../Components/HomeComponents/Equipements/Equipements";
import VenirChezNous from "../../Components/HomeComponents/VenirChezNous/VenirChezNous";
import lines from "../../assets/lines.png";
import Services from "../../Components/HomeComponents/Services/Services";
import dentist from "../../assets/dentist.png";
import { useTheme } from "../../ThemeContext";
import Footer from "../../Components/shared/Footer";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home-container ${theme}`}>
      <div className="bienvenue" id="bienvenue">
        <img className="lines" src={lines} alt="" />
        <img className="dentist" src={dentist} alt="" />
        <Bienvenue></Bienvenue>
      </div>
      <div className="services" id="services">
        <Services></Services>
      </div>
      <div className="presentation" id="presentation">
        <Presentation></Presentation>
      </div>
      <div className="actualite" id="actualites">
        <Actualite></Actualite>
      </div>
      <div className="equipements" id="equipements">
        <Equipements></Equipements>
      </div>
      <div className="venircheznous">
        <div id="venircheznous">
          <VenirChezNous></VenirChezNous>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
