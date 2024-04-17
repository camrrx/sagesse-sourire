import "./Honoraire.scss";

import { useTheme } from "../../ThemeContext";
import Footer from "../../Components/shared/Footer";
import { useEffect, useState } from "react";
import dentist from "../../assets/dentist.png";
import { HonoraireTab } from "../../Components/HonoraireComponents/HonoraireTab";

const Honoraire = () => {
	const { theme } = useTheme();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const handleResize = (e: any) => {
			setIsMobile(e.matches);
		};
		handleResize(mediaQuery);
		mediaQuery.addListener(handleResize);
		return () => {
			mediaQuery.removeListener(handleResize);
		};
	}, []);
	return (
		<div className={`honoraire-container ${theme}`}>
			{isMobile ? (
				""
			) : (
				<div className="banniere">
					<img src={dentist} alt="" />
				</div>
			)}

			<div className="honoraire-container__bg">
				<div className="honoraire-container__description">
					<h1 className="honoraire-container__description__titre">
						les Honoraires
					</h1>
					<h6 className="honoraire-container__description__texte">
						Votre chirurgien-dentiste applique les tarifs de remboursement de
						l’assurance maladie. Ces tarifs ne peuvent être dépassés, sauf en
						cas d’exigence exceptionnelle de votre part, s’agissant de l’horaire
						ou du lieu de la consultation. Pour ces actes dits « conventionnés
						», la Caisse de Sécurité Sociale vous remboursera 70% du tarif de
						convention. Si vous avez souscrit une mutuelle, celle-ci viendra
						compléter les 30% restants.Nous tenons également à informer notre
						aimable patientèle que notre cabinet dentaire ne pratique pas le
						tiers payant.
					</h6>
					<br />
					<h4>
						Nous tenons également à informer notre aimable patientèle que notre
						cabinet dentaire ne pratique pas le tiers payant.
					</h4>
				</div>
			</div>
			<HonoraireTab />
			<Footer></Footer>
		</div>
	);
};

export default Honoraire;
