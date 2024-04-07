import Accueil from "../../Components/CabinetComponents/Accueil/Accueil";
import Assistantes from "../../Components/CabinetComponents/Assistantes/Assistantes";
import Dentistes from "../../Components/CabinetComponents/Dentistes/Dentistes";
import Equipe from "../../Components/CabinetComponents/Equipe/Equipe";
import Prothesistes from "../../Components/CabinetComponents/Prothesistes/Prothesistes";
import { useTheme } from "../../ThemeContext";
import "./Cabinet.scss";
import cabinet from "../../assets/cabinet.webp"

const Cabinet = () => {
  const { theme } = useTheme();

  return (
    <div className={`lecabinet-container ${theme}`}>
      <div className="top" id="equipes">
        <Equipe />
		<img src={cabinet} alt="" />
      </div>
      <div className="accueil" id="accueil">
        <Accueil />
      </div>
      <div id="dentistes">
        <Dentistes />
      </div>
      <div id="assistantes">
        <Assistantes />
      </div>
      <div id="prothesistes">
        <Prothesistes />
      </div>
    </div>
  );
};

export default Cabinet;
