import "./GestionDouleurs.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTheme } from "../../../ThemeContext";
import cabinetDessin from "../../../assets/cabinet-dessin.png";

const GestionDouleurs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <div className={`GestionDouleurs-container  ${theme}`}>
      <h2>Les soins dentaires</h2>
      <div className="GestionDouleurs-container">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="custom-tab-list">
            <Tab
              className={`custom-tab    ${selectedIndex === 0 ? "active" : ""}`}
            >
              Soins conservateurs
            </Tab>

            <Tab
              className={`custom-tab    ${selectedIndex === 1 ? "active" : ""}`}
            >
              MIH
            </Tab>
            <Tab
              className={`custom-tab    ${selectedIndex === 2 ? "active" : ""}`}
            >
              SAOS
            </Tab>
            <Tab
              className={`custom-tab    ${selectedIndex === 3 ? "active" : ""}`}
            >
              Hyposialie
            </Tab>
            <Tab
              className={`custom-tab    ${selectedIndex === 4 ? "active" : ""}`}
            >
              Bruxisme
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="custom-tab-panel column">
              <div className="cards">
                <img className="card" src={cabinetDessin}></img>
                <div className="card">
                  <h1>Les soins conservateurs</h1>
                  <h6>
                    Lors de la <strong>visite de prévention annuelle</strong>{" "}
                    votre dentiste établi selon vos préoccupations la nécessité
                    de réaliser un soin.
                    <br />
                    <br />
                    Les soins <strong>conservateurs</strong> englobent les
                    premières interventions proposées par le chirurgien-dentiste
                    qui visent à maintenir la bonne santé de votre bouche. Le{" "}
                    <strong>détartrage</strong> permet de maintenir une bonne
                    hygiène et de renforcer la santé des dents et de la gencive.
                    Chez les enfants et adolescents, le{" "}
                    <strong>scellement de sillons</strong> réduit l’apparition
                    de caries sur les dents. La carie est une infection touchant
                    la dent qui se caractérise par l’apparition d’une cavité à
                    sa surface, l’idéal est de la traiter le plus vite possible
                    après son apparition. Lorsque la carie s’est étendue de
                    façon trop importante vers le nerf, il peut être nécessaire
                    de retirer la pulpe de la dent. La{" "}
                    <strong>dévitalisation</strong> permet de maintenir la dent
                    en bouche en la restaurant par la suite. Malheureusement,
                    dans certains cas, l’atteinte de la dent est trop grave pour
                    qu’elle puisse être restaurée ; il faut alors{" "}
                    <strong>l’extraire</strong>.
                  </h6>{" "}
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <h6>
                    Des bilans bucco-dentaires sont proposés par la Sécurité
                    Sociale, vous les retrouverez sur votre espace d’assuré. Il
                    s’agit d’une visite de prévention a effectuer tous les 3ans.
                    Ce dispositif s’adresse aux jeunes de 3ans à 25ans mais
                    également aux femmes enceintes et aux séniors.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="card">
                  <h1>L’hypominéralisation des incisives et molaires (MIH)</h1>
                  <h6>
                    Souvent cette hypominéralisation est constatée chez le sujet
                    jeune, elle peut être plus ou moins sévère. Il s’agit d’un
                    défaut dans la structure de la couche protectrice de la dent
                    : l’émail. On remarque des taches blanchâtres ou
                    jaunes-marrons sur les dents. Les dents sont plus fragiles
                    et facilement sujettes aux sensibilités. Une hygiène
                    rigoureuse est capitale : brosse à dent à poils souples,
                    dentifrice adapté et rinçage à l’eau tiède. Il est important
                    de proscrire les aliments trop acides ou trop sucrés. Votre
                    dentiste vous accompagnera dans la gestion de cette
                    pathologie. Des visites de contrôle régulières permettront
                    d’adopter les traitements dans les meilleurs délais : soins
                    sur les lésions les plus marquées, application de vernis de
                    fluor sur les dents, scellements de sillons.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="card">
                  <h1>Le syndrome d’apnées obstructive du sommeil (SAOS)</h1>
                  <h6>
                    Ce syndrome touche entre 5 et 15% de la population. Si vous
                    souffrez de ronflements ; que vous peinez à regagner de
                    l’énergie même après une nuit de sommeil, que vous souffrez
                    d’hypertension ou de diabète ; il est possible que vous
                    soyez sujet à développer ce syndrome. Ce syndrome se
                    caractérise par des micro-réveils, remarqués ou non par le
                    dormeur. Une étude du sommeil détermine la nécessité de
                    réaliser une gouttière d’avancée mandibulaire (OAM). Ce
                    dispositif se place en bouche juste avant d’aller dormir, il
                    permet de positionner la mâchoire inférieure plus en avant
                    que la mâchoire supérieure et donc de limiter l’obstruction
                    du passage d’air : la ventilation est facilitée. Une période
                    de quelques semaines est nécessaire pour s’habituer au port
                    de la gouttière et plusieurs rendez-vous d’ajustements sont
                    à prévoir.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="card">
                  <h1>Hyposialie : le manque de salive</h1>
                  <h6>
                    La salive a un rôle capital dans notre bouche : elle
                    neutralise les acides. C’est la protectrice de nos dents !
                    Un manque de salive peut se repérer par une sensation de
                    langue pâteuse ou de difficultés à avaler peut s’avérer
                    néfaste pour notre santé orale et notre digestion.
                    L’hyposialie peut être provoquée par certains médicaments
                    tels que les antidépresseurs ou les antihistaminiques (entre
                    autres), ou par certains protocoles contre le cancer. On
                    peut aider à un retour a la normale en consommant des
                    chewing-gums sans sucres ou en utilisant des substituts
                    salivaires. N’hésitez pas à parler de vos symptômes à votre
                    dentiste ou à votre médecin.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="custom-tab-panel">
              <div>
                <div className="card">
                  <h1>Le bruxisme</h1>
                  <h6>
                    Le bruxisme mène à une usure prononcée des dents. Les causes
                    sont diverses : troubles du sommeil, stress, anxiété… Il est
                    possible de réaliser des gouttières de prévention qui limite
                    les frottements des dents les unes contre les autres et
                    ainsi, ralentit leur usure. Il est parfois nécessaire que la
                    prise en charge soit faite en équipe avec l’intervention
                    d’autres professionnels de santé, ORL, kinésithérapeute,
                    ostéopathe etc.
                  </h6>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default GestionDouleurs;
