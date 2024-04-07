import "./Dentistes.scss";
import { employes_dentistes } from "../../../assets/employes";
import DentistesSlider from "./dentistesSlider";
import {
  handleScrollForSection,
  addScrollListener,
  removeScrollListener,
} from "../../../utils/scrollUtils";
import { useState, useEffect } from "react";
import { useTheme } from "../../../ThemeContext";

const Dentistes = () => {
  const [showSection, setShowSection] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll: EventListener = () => {
      handleScrollForSection("dentistes", setShowSection);
    };

    addScrollListener(handleScroll);

    return () => {
      removeScrollListener(handleScroll);
    };
  }, []);

  return (
    <div className={`dentistes-container ${theme} ${showSection ? "show" : "show"}`}>
      <div className="title">
        <div className="ligne"></div>
        <h1 className="dentistes-title">LES DENTISTES</h1>
        <div className="ligne"></div>
      </div>
      {/* <h5 className="dentistes-description">
        Tous les dentistes du cabinet travail en équipe et s’impliquent dans la
        mise en oeuvre des traitements globaux que nous proposons à nos
        patients.
      </h5>
      <h6 className="dentistes-description">
        Si vous devez prendre Rendez-vous, soyez compréhensif, il n’est pas
        facile de trouver une place. Il est aussi très important de décommander,
        si vous ne pouvez pas venir.
      </h6> */}
      <div className="dentistes-perso-container">
        <DentistesSlider dentistes={employes_dentistes} />
      </div>
    </div>
  );
};

export default Dentistes;
