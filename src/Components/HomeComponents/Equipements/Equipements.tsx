import "./Equipements.scss";
import { EquipementsData } from "../../../assets/EquipementsData";
import { useState } from "react";

interface Equipement {
  number: number;
  equipment: string;
  description: string;
}

const Equipements = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>();

  const onItemClick = (equipement: any) => {
    setSelectedEquipment(equipement);
    setShowModal(true);
  };

  return (
    <div className="equipements-container">
      <h2 className="equipements-title">NOS EQUIPEMENTS</h2>
      <div className="equipements-items">
        {EquipementsData.map((equipement, index) => (
          <div
            onClick={() => onItemClick(equipement)}
            key={index}
            className="equipement-item"
          >
            <div className="equipement-name">{equipement.number}</div>
            <div className="equipement-name">{equipement.equipment}</div>
          </div>
        ))}
      </div>
      {showModal ? (
        <div className="modal-equipement">
          <button onClick={() => setShowModal(false)} className="close-button">
            <h1>X</h1>
          </button>
          <h1>{selectedEquipment.equipment}</h1>
          <p>{selectedEquipment.description}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Equipements;
