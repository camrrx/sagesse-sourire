import "./CardsPerso.scss";
interface PersoInfo {
	name: string;
	functions: string[];
}

interface CardsPersoProps {
	persoInfos: PersoInfo;
}
const CardsPerso = ({ persoInfos }: CardsPersoProps) => {
	return (
		<div className="card-container">
			<div className="card-perso-pict"></div>
			<div className="card-bg"></div>
			<div className="card-perso-info">
				<div className="card-perso-name">{persoInfos.name}</div>
				<div className="card-perso-function-container">
					{persoInfos.functions.map((func, index) => (
						<div key={index} className="card-perso-function">
							{func}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardsPerso;
