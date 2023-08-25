// import { ServiceCards } from "../../../assets/ServiceCards";
import "./Services.scss";
import soins from "../../../assets/cards/soins.png";
import ortho from "../../../assets/cards/ortho.png";
import implant from "../../../assets/cards/implant.png";
import paro from "../../../assets/cards/paro.png";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="main-wrapper">
          <div className="title">
            <h2>nos services</h2>
            <h1>UNE CLINIQUE COMPLÈTE</h1>
          </div>
          <div className="cards">
            {/* {ServiceCards.map((card) => (
              <div className="card">
                <div className="icon">
                    <img src={card.id} alt="" />
                </div>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            ))} */}
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
      </div>
    </>
  );
};

export default Services;
