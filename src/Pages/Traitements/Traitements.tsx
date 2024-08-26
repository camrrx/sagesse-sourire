import Esthetique from "../../Components/TraitementsComponents/Esthetique/Esthetique";
import GestionDouleurs from "../../Components/TraitementsComponents/GestionDouleurs/GestionDouleurs";
import ImplantsDentaires from "../../Components/TraitementsComponents/ImplantsDentaires/ImplantsDentaires";
import TraitementsTop from "../../Components/TraitementsComponents/TraitementsTop/TraitementsTop";
import Footer from "../../Components/shared/Footer";
import { useTheme } from "../../ThemeContext";
import "./Traitements.scss";

const Traitements = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`traitements-container ${theme}`}>
        <div id="traitement">
          <TraitementsTop></TraitementsTop>
        </div>

        <div id="implantsDentaires">
          <ImplantsDentaires></ImplantsDentaires>
        </div>
        <div id="soinsDentaires">
          <GestionDouleurs></GestionDouleurs>
        </div>
        {/* <div id="orthodontie">
          <Orthodontie></Orthodontie>
        </div> */}
        <div id="dentisterieEsthetique">
          <Esthetique></Esthetique>
        </div>
        {/* <div id="parodontie">
          <Parodontie></Parodontie>
        </div> */}
      </div>
      <div className={theme}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Traitements;
