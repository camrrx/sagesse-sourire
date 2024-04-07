import "./Parodontie.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import soins from "../../../assets/dent-soin.jpeg";
import { useTheme } from "../../../ThemeContext";

const Parodontie = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { theme } = useTheme();

	return (
		<div className={`Orthodontie-container  ${theme}`}>
			<h2>La parodontie et les soins</h2>
			<div className="orthodontie-container">
				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="custom-tab-list">
						<Tab
							className={`custom-tab button-1 ${selectedIndex === 0 ? "active" : ""}`}>
							Les soins
						</Tab>

						<Tab
							className={`custom-tab button-1 ${selectedIndex === 1 ? "active" : ""}`}>
							Le traitement des gencives
						</Tab>
						<Tab
							className={`custom-tab button-1 ${selectedIndex === 2 ? "active" : ""}`}>
							Les traitements divers
						</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h6 className="card">
									La dentisterie conservatrice correspond aux techniques de
									soins des affections de l’émail, de la dentine et de la pulpe
									des dents. Les traitements pratiqués consistent à enlver ce
									qui est abimé, puis à restaurer à l’aide d'un matériau la
									dent.
								</h6>
								<div className="cards">
									<img className="card" src={soins}></img>
									<div>
										<h5>On distingue deux grandes catégories d'actes :</h5>

										<div className="card">
											<h2>LA DENTISTERIE RESTAURATRICE</h2>
											<h6>
												Le traitement sert à enlever les zones tissulaires
												abimées "carie", et à obturer la cavité avec différents
												matériaux pour favoriser la cicatrisation des tissus
												sains, afin d'éviter la récidive. Les matériaux utilisés
												sont l'amalgamme "plombage" , les composites ou les
												onlays.
											</h6>
										</div>
										<div className="card">
											<h2>L' ENDODONTIE</h2>
											<h6>
												C'est le traitement des pathologies de la pulpe. La
												pulpe est située au milieu de la couronne dentaire.
												Lorsqu’elle est atteinte par la carie, elle ne peut pas
												être conservée vivante dans la plupart des cas
											</h6>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div className="-container">
								<h5 className="card">
									Les maladies parodontales sont des infections bactériennes
									(microbiennes) qui affectent et détruisent les tissus qui
									entourent et supportent les dents (la gencive, les fibres
									d'attachement et l’os qui supporte les dents). Il est
									important de faire des contrôles reguliers. Notre équipe vous
									conseillera et si cela est nécessaire vous établira un devis
									pour votre traitement et votre maintenance
								</h5>
								<div className="cards">
									<div className="card">
										<h2>LE DETARTRAGE</h2>
										<h6>
											Cela débute par l’apprentissage d'une hygiène
											bucco-dentaire rigoureuse. Le traitement consiste à
											éliminer les causes (tartre et plaque) pour assainir le
											terrain
										</h6>
									</div>
									<div className="card">
										<h2>LES TRAITEMENTS CHIRURGICAUX</h2>
										<h6>
											Le traitement chirurgical parodontal est adapté à la
											quantité de tissus détruits. Il peut être limité à la
											gencive, ou à la gencive et à l'os alvéolaire pour
											supprimer les poches osseuses, éliminer les bactéries dans
											les lésions profondes, redonner à la gencive une forme
											fonctionnelle. Ces traitements ne sont pas pris en charge
											par la sécurité sociale, nous vous établirons un devis
											préalable en fonction de votre cas.
										</h6>
									</div>
								</div>

								<div className="card">
									<h2>LE CONTROLE</h2>
									<h6>
										Pour les patients ayant souffert d'une maladie parodontale,
										celle-ci peut reprendre son évolution si les conditions de
										nettoyage ne sont pas rigoureusement respectées.
									</h6>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div className="-container">
								<h5 className="card">
									Il est important de faire des contrôles reguliers. Notre
									équipe vous conseillera et si cela est nécessaire vous
									établira un devis pour votre traitement.
								</h5>
								<div className="cards">
									{" "}
									<div className="card">
										<h2>LE BRUXISME</h2>
										<h6>
											Le bruxisme est souvent dû à une occlusion anormale ou à
											une souffrance psychologique, stress Le bruxisme ou
											grincement des dents correspond à une augmentation
											importante des périodes de contact des dents entre elles
											en dehors de la mastication et de déglutition. Le bruxisme
											peut être effectué le jour et la nuit pendant le sommeil.
											Les mouvements sont inconsciemment, ce qui entra�ne des
											frottements dentaires importants. Le traitement consiste à
											permettre au patient de ne plus serrer par réflexe, par la
											pose d'une gouttière protectrice.
										</h6>
									</div>
									<div className="card">
										<h2>L'HALITOSE</h2>
										<h6>
											La mauvaise haleine est le résultat d'une prolifération
											bactérienne et d’une dégradation tissulaire (tissus de
											l'organisme ou des aliments). Les facteurs qui favorisent
											la mauvaise haleine ; Prévenir la mauvaise haleine ;
											Traitements.
										</h6>
									</div>
								</div>

								<div className="card">
									<h2>LE RONFLEMENT</h2>
									<h6>
										Cause du ronflement ; Traitement du ronflement par orthèse
										d’avancée mandibulaire type ORM ( Optimisation de la Retenue
										Mandibulaire ). Description de l’orthèse d’avancée
										mandibulaire ; Elements à prendre en compte avant
										réalisation ; Risques associés au ronflement
									</h6>
								</div>
							</div>
							<div></div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default Parodontie;
