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
		<div className="card-container grey-theme">
			<img
				className="card-perso-image"
				src={`/photosEmployes/${persoInfos.photo}`}></img>
			<h2 className="card-perso-name">{persoInfos.name}</h2>

			<div className="card-perso-function-container">
				{persoInfos.functions.map((func, index) => (
					<div key={index} className="card-perso-function">
						{func}
					</div>
				))}
			</div>
		</div>
	);
};

export default CardsPerso;
