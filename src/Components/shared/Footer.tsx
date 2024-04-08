import "./Footer.scss";
import phone from "../../assets/icones/telephone.png"
import localisation from "../../assets/icones/localisation.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <h1>Sagesse & Sourire</h1>
        <div className="telephone">
          <img className="icone-footer" src={phone}/>            
          <h1>02.40.81.01.28</h1>
        </div> 
        <div className="adresse">
          <img className="icone-footer" src={localisation} alt="" />
          <h1>16, rue du 11 Novembre. 44110 CHATEAUBRIANT</h1>
        </div>
      </div>
      <div className="doctors">
        
      </div>
    </div>
  );
};

export default Footer;
