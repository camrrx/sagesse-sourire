/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { EquipementsData } from "../../../assets/EquipementsData";
import "./Equipements.scss";

// interface Equipement {
//   number: number;
//   equipment: string;
//   description: string;
// }

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
            {equipement.number && (
              <div className="equipement-number-wrapper">
                <h3>{equipement.number}</h3>
              </div>
            )}
            <h3 className="equipement-name">{equipement.equipment}</h3>
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
