import "./Footer.scss";
import phone from "../../assets/icones/telephone.png";
import localisation from "../../assets/icones/localisation.png";
import logo from "../../assets/logo_sagesse.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Sagesse & Sourire</h1>
        </div>
        <div className="telephone">
          <img className="icone-footer" src={phone} />
          <h1>02.40.81.01.28</h1>
        </div>
        <div className="adresse">
          <img className="icone-footer" src={localisation} alt="" />
          <h1>16, rue du 11 Novembre. 44110 CHATEAUBRIANT</h1>
        </div>
      </div>
      <div className="doctors">
        <h1>Dr Thierry Lelièvre</h1>
        <h1>|</h1>
        <h1>Dr Eric Merlet</h1>
        <h1>|</h1>
        <h1>Dr Laurent Avenard</h1>
        <h1>|</h1>
        <h1>Dr Karine Chotard</h1>
        <h1>|</h1>
        <h1>Dr Eve Lelièvre</h1>
      </div>
    </div>
  );
};

export default Footer;
