import "./Orthodontie.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import bracketMetal from "../../../assets/bracketmetal.jpeg";
import bracketCeramique from "../../../assets/bracketceramique.jpeg";
import orthoLinguale from "../../../assets/ortholinguale.jpeg";
import invisalign from "../../../assets/invisalign.jpeg";
import { useTheme } from "../../../ThemeContext";

const Orthodontie = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { theme } = useTheme();

	return (
		<div className={`Orthodontie-container ${theme}`}>
			<h2>L'Orthodontie</h2>
			<div className="orthodontie-container">
				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="custom-tab-list">
						<Tab
							className={`custom-tab ${selectedIndex === 0 ? "active" : ""}`}>
							L'orthodontie traditionnelle
						</Tab>

						<Tab
							className={`custom-tab ${selectedIndex === 1 ? "active" : ""}`}>
							L'orthodontie Linguale
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 2 ? "active" : ""}`}>
							Invisalign
						</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h2>Il existe deux types de brackets :</h2>
								<div className="bracket-container">
									<div className="card">
										<h4>Bracket métallique</h4>
										<img className="ortho-img" src={bracketMetal}></img>
									</div>
									<div className="card">
										<h4>Bracket céramique</h4>
										<img className="ortho-img" src={bracketCeramique}></img>
									</div>
								</div>
								<h6 className="card">
									Si on observe, un chevauchement dentaire ou une mauvaise
									relation des maxillaires, il est conseillé de consulter un
									dentiste pour savoir si un traitement orthodontique est
									nécessaire. Afin de poser le diagnostic exact du problème, un
									examen orthodontique complet doit être effectué par
									l’orthodontiste. Cet examen doit inclure la prise d'empreintes
									des dents du haut et du bas, de photographies des dents et du
									visage, et de radiographies des mâchoires incluant les dents
									et de la tête au complet. <br /> En moyenne, un traitement
									orthodontique complet peut durer de 1 à 3 ans. Les patients
									doivent porter après la fin du traitement un mainteneur
									d’espace pendant au moins 6 mois. Suite aux ajustements fait
									durant le traitement d'orthodontie, un inconfort ou une
									douleur peut être sentie au niveau des dents et de la bouche.
									Si une douleur persiste il faut en parler à l'orthodontiste.
									Le processus mécanique est le même à n'importe quel âge. Pour
									votre cas, notre équipe s’engage à vous informer sur les
									avantages et les inconvénients éventuels des traitements à
									réalisés et sur leurs coûts.
								</h6>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div className="cards">
								<h6 className="card">
									L'orthodontie invisible a débuté il y a environ 20 ans, en
									plaçant des brackets sur les faces internes des dents . Elle
									se caractérise par l'existence de brackets spécifiques et la
									nécessité d'une phase préalable de laboratoire très précise en
									fonction des malpositions dentaires propres à chaque patient.
									<br />
									Elle s'adresse à ceux qui refusent un appareil disgracieux,
									ils peuvent avec cette technique entreprendre un traitement
									efficace qui leur rendra le sourire sans perturber leur vie
									professionnelle et sociale
									<br />
									Pour votre cas, notre équipe s’engage à vous informer sur les
									avantages et les inconvénients éventuels des traitements à
									réaliser et sur leurs coûts.
								</h6>
								<div className="card">
									<img className="ortho-img" src={orthoLinguale}></img>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div className="cards">
								<h6 className="card">
									Beaucoup d’adultes qui n’ont pas profité de traitements
									d’orthodontie quand ils étaient jeunes utilisent cette méthode
									pour redresser leurs dents. La technique Invisalign® fait
									appel à des porte-empreintes clairs et amovibles appelés
									appareils d’alignement.
									<br />
									Le traitement Invisalign® dure habituellement environ un an
									mais chaque cas est unique et sa durée dépend à la fois de
									l’importance de la correction à effectuer et de la fréquence
									d’utilisation des appareils d’alignement. Idéalement, ces
									appareils devraient être portés en tout temps à l’exception
									des repas et du temps consacré au nettoyage des dents.
								</h6>
								<div className="card">
									<img className="ortho-img" src={invisalign}></img>
								</div>
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default Orthodontie;
