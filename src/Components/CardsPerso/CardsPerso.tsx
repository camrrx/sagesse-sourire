import "./CardsPerso.scss";

interface PersoInfo {
  name: string;
  title?: string;
  functions: string[];
  photo?: string;
}

interface CardsPersoProps {
  persoInfos: PersoInfo;
}
const CardsPerso = ({ persoInfos }: CardsPersoProps) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="card-perso-image"
          src={`/photosEmployes/${persoInfos.photo}`}
        ></img>
      </div>

      <h2 className="card-perso-name">{persoInfos.name}</h2>

      <div className="card-perso-function-container">
        {persoInfos.functions.map((func, index) => (
          <div key={index} className="label-1">
            {func}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPerso;
