import "./GestionDouleurs.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTheme } from "../../../ThemeContext";

const GestionDouleurs = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { theme } = useTheme();

	return (
		<div className={`GestionDouleurs-container  ${theme}`}>
			<h2>La Gestion Douleurs</h2>
			<div className="GestionDouleurs-container">
				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="custom-tab-list">
						<Tab
							className={`custom-tab ${selectedIndex === 0 ? "active" : ""}`}>
							Sédation et anesthésie
						</Tab>

						<Tab
							className={`custom-tab ${selectedIndex === 1 ? "active" : ""}`}>
							MEOPA
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 2 ? "active" : ""}`}>
							L'anesthésie ostéocentrale
						</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h6 className="card">
									La gestion de la douleur et de l’anxiété des patients a
									toujours constitué l’un des plus grands défis de notre
									profession. Nous vous présentons ici une technique de sédation
									consciente : l’utilisation du MEOPA, pour luter contre
									l’anxiété liée aux soins. Et une technique d’anesthésie
									mécanique innovante pour pallier à la douleur
								</h6>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h6 className="card">
									Le MÉOPA (Mélange Equimolaire d’Oxygène et de Protoxyde
									d’Azote) est un gaz incolore, inodore et sans saveur, qui agit
									par inhalation. Il est destiné à faciliter les soins dentaires
									chez les patients anxieux ou phobiques, petits ou grands ou
									encore chez les personnes handicapées. Le MÉOPA permet ainsi
									la prise en charge de la douleur engendrée par des soins
									d’intensité légère à modérée et de courte durée, sans
									toutefois dispenser de l’utilisation des autres méthodes
									analgésiques. Le MÉOPA agit rapidement, est facile
									d’administration et sa durée d’action est brève après l’arrêt
									de l’inhalation, il est donc un agent analgésique de choix
									avec peu d’effets indésirables. Employé depuis plusieurs
									années en milieu hospitalier, son utilisation a été élargie
									aux cabinets dentaires privés depuis 2010.
								</h6>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h6 className="card">
									En appliquant une anesthésie ostéocentrale (anesthésie de l’os
									spongieux près de l’apex), l’anesthésie fonctionne
									immédiatement sans laisser de sensation d’engourdissement des
									lèvres, des joues et de la langue. D’autres avantages sont à
									noter : une efficacité élevée même avec des molaires atteintes
									d’une pulpite et l’absence de douleur durant la procédure.
									L’anesthésie ostéocentrale mécanique consiste en 3 étapes:
								</h6>

								<div className="cards">
									<div className="card">
										<h1>1</h1>
										<h6>
											Pour que l’anesthésie soit indolore, il est nécessaire
											dans un premier temps d’anesthésier la muqueuse au niveau
											de la papille interdentaire. L’injection est gérée
											électroniquement.
										</h6>
									</div>
									<div className="card">
										<h1>2</h1>
										<h6>
											L’entrée dans l’os trabéculaire se fait par perforation
											rotative progressive, pour atteindre l’espace interapical.
											L’os trabéculaire (spongieux) n’étant pas sensible, la
											pénétration en ostéocentrale est totalement indolore pour
											le patient.
										</h6>
									</div>
									<div className="card">
										<h1>3</h1>
										<h6>
											Une fois l’aiguille enfoncée au trois quarts de sa
											longueur, nous sommes proche du bout de la racine et
											pouvons déclencher l’injection électroniquement. Lorsque
											l’injection est terminée, nous retirons l’aiguille sans
											rotation. L’anesthésie est faite et le soin peut
											commencer.
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

export default GestionDouleurs;
