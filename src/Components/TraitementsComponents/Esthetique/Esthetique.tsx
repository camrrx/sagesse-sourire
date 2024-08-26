import "./Esthetique.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
// import onlays from "../../../assets/onlays.jpeg";
import facette from "../../../assets/facette.jpeg";
// import blanchiment from "../../../assets/blanchiment.jpeg";
import esthetic from "../../../assets/estheticdrawing.png";
import prothese from "../../../assets/prothese.jpeg";
import prothesesMobile from "../../../assets/prothesesmobile.jpeg";
const Esthetique = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="column align-center gap-3 grey-theme">
      <h2>L'esthétique dentaire</h2>
      <div className="orthodontie-container">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="custom-tab-list">
            <Tab
              className={`custom-tab   ${selectedIndex === 0 ? "active" : ""}`}
            >
              Définition
            </Tab>

            <Tab
              className={`custom-tab   ${selectedIndex === 1 ? "active" : ""}`}
            >
              Facettes
            </Tab>
            <Tab
              className={`custom-tab   ${selectedIndex === 2 ? "active" : ""}`}
            >
              Inlays et Onlays
            </Tab>
            <Tab
              className={`custom-tab   ${selectedIndex === 3 ? "active" : ""}`}
            >
              Éclaircissement dentaire
            </Tab>
            <Tab
              className={`custom-tab   ${selectedIndex === 4 ? "active" : ""}`}
            >
              Prothèses
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="cards">
                  <img className="card" src={esthetic}></img>
                  <div className="card">
                    <h6>
                      La douleur n’est pas notre seul champ d’action, vos
                      attentes esthétiques font partie intégrante de nos
                      préoccupations !
                      <br />
                      <br />
                      La teinte, l’usure, la forme de vos dents : autant
                      d’aspects pour lesquels vous pouvez nous solliciter.
                      L’embellissement de votre sourire fait partie de notre
                      vocation.
                      <br />
                      <br />
                      La dentisterie adhésive nous permet de restaurer et
                      d’améliorer l’esthétique grâce à des procédés de collages.
                      Son intérêt est qu’elle permet d’être le moins invasif
                      possible, on peut conserver un maximum de tissu dentaire
                      tout en renforçant le rendu esthétique et naturel.
                      <br />
                      <br />
                      Cette technique peut être utilisée sur les dents
                      antérieures avec de facettes et sur les dents postérieures
                      avec les inlays et onlays.
                    </h6>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div className="cards">
                <img className="card" src={facette}></img>
                <h6 className="card">
                  Les facettes sont de fines lamelles de céramique qui
                  permettent de corriger, de façon durable, la teinte, la forme
                  ou des malpositions légères. Un examen bucco-dentaire
                  minutieux est nécessaire avant d’envisager la pose de
                  facettes. Celles-ci se posent sur des dents saines entourées
                  d’une gencive saine : l’entretien quotidien n’est pas à
                  négliger ! Si les dents sont trop délabrées votre dentiste
                  vous orientera vers d’autres traitements. Le praticien
                  procèdera à une étude de votre visage, de l’esthétique
                  naturelle de vos dents, et vous pourrez discuter avec lui de
                  vos attentes avec lui. Ensuite, il pourra éventuellement vous
                  proposer un modèle numérique du projet prothétique. Des
                  facettes provisoires pourront être fabriquées afin de valider
                  l’esthétique (mock-up : maquette de prévisualisation). Une
                  fois le projet validé, les facettes définitives sont
                  confectionnées par le laboratoire de prothèse et poser par
                  votre chirugien-dentiste.
                </h6>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="card">
                  <h2>La dentisterie a évoluée et les soins aussi.</h2>
                  <h3>Toutes nos prothèses sont confectionnées par</h3>
                  <h4>Laboratoire Surel de Moisdon la Rivière</h4>
                </div>

                <div className="cards">
                  <div className="card">
                    <h2>Les prothèses mobiles</h2>
                    <img className="cosmetique-img" src={prothesesMobile}></img>
                    <h6>
                      Plus connu sous le nom de Dentiers, ils sont la hantise
                      des patients En résine ou en métal "Stellite" , les
                      dentiers permettent de remplacer de manière rapide et
                      économique les dents absentes Le dentier "complet" permet
                      de remplacer une arcade complète, généralement en résine
                      il peut être renforcer par une plaque de métal, pour
                      l’arcade du haut la tenue est en générale correcte, il
                      n’en va pas toujours de même pour le bas et
                      malheureusement la résorption osseuse ne n’arrêtant pas,
                      en veillissant ces prothèses deviennent instables. Des
                      implants peuvent alors aider pour une meilleur tenue Dans
                      le pire des cas ce sont eux que l’on trouvent dans des
                      verres à eau sur les tables de nuit
                    </h6>
                  </div>
                  <div className="card">
                    <h2>Les prothèses fixes</h2>
                    <img className="cosmetique-img" src={prothese}></img>
                    <h6>
                      Les Prothèses fixes , couronnes ou bridges ne peuvent pas
                      s’enlever les classiques couronnes métalliques sont
                      souvent remplacées par des couronnes céramo métalliques
                      pratiquement invisibles. Maintenant nous pouvons proposer
                      des couronnes sans armarture métallique,qui laissentencore
                      mieux passer la lumière.
                    </h6>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Esthetique;
