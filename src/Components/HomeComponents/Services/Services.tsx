// import { ServiceCards } from "../../../assets/ServiceCards";
import "./Services.scss";
import soins from "../../../assets/cards/soins.png";
import ortho from "../../../assets/cards/ortho.png";
import implant from "../../../assets/cards/implant.png";
import paro from "../../../assets/cards/paro.png";
import logo from "../../../assets/logo-sagesse-noir.png";
import iconChair from "../../../assets/icones/cabinetimg.png"

const Services = () => {
  return (
    <>
      <div className="sticker">
        <img src={iconChair} alt="" />
      </div>
      <div className="services-container">
        <div className="main-wrapper">
          <div className="title">
            <h2>Nos services</h2>
            <h1>Une Clinique Complète</h1>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={soins} alt="" />
              </div>
              <h1>Soins dentaires</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                qui eius assumenda sunt labore? Neque sit perferendis.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={ortho} alt="" />
              </div>
              <h1>Orthodontie</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                qui eius assumenda sunt labore? Neque sit perferendis.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={implant} alt="" />
              </div>
              <h1>Implantologie</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                qui eius assumenda sunt labore? Neque sit perferendis.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={paro} alt="" />
              </div>
              <h1>Parodontie</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                qui eius assumenda sunt labore? Neque sit perferendis.
              </p>
            </div>
          </div>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <img src={logo} alt="" />
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default Services;
