// import Accueil from "../../Components/CabinetComponents/Accueil/Accueil";
import Dentistes from "../../Components/CabinetComponents/Dentistes/Dentistes";
import Equipe from "../../Components/CabinetComponents/Equipe/Equipe";
import Prothesistes from "../../Components/CabinetComponents/Prothesistes/Prothesistes";
import Footer from "../../Components/shared/Footer";
import { useTheme } from "../../ThemeContext";
import equipeComplete from "../../assets/equipeComplet.png";
import "./Cabinet.scss";

const Cabinet = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`lecabinet-container ${theme}`}>
        <div className="top" id="equipes">
          <Equipe />
          <img src={equipeComplete} alt="" />
        </div>
        {/* <div className="accueil" id="accueil">
        <Accueil />
      </div> */}
        <div id="dentistes">
          <Dentistes />
        </div>
        {/* <div id="assistantes">
        <Assistantes />
      </div> */}
        <div id="prothesistes">
          <Prothesistes />
        </div>
      </div>
      <div className={theme}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Cabinet;
