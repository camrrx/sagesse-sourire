import "./Esthetique.scss";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import onlays from "../../../assets/onlays.jpeg";
import facette from "../../../assets/facette.jpeg";
import blanchiment from "../../../assets/blanchiment.jpeg";
import prothese from "../../../assets/prothese.jpeg";
import prothesesMobile from "../../../assets/prothesesmobile.jpeg";
const Esthetique = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="Orthodontie-container grey-theme">
			<h2>La dentisterie esthétique</h2>
			<div className="orthodontie-container">
				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="custom-tab-list">
						<Tab
							className={`custom-tab   ${selectedIndex === 0 ? "active" : ""}`}>
							Les soins cosmétiques
						</Tab>

						<Tab
							className={`custom-tab   ${selectedIndex === 1 ? "active" : ""}`}>
							Le blanchiement dentaire
						</Tab>
						<Tab
							className={`custom-tab   ${selectedIndex === 2 ? "active" : ""}`}>
							Les prothèses dentaies
						</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<div className="card">
									<div className="cosmetique-title">
										<h2>La dentisterie a évoluée et les soins aussi.</h2>
										<h3>Tous nos onlays et facettes sont confectionnés par</h3>
										<h4>Laboratoire Surel de Moisdon la Rivière</h4>
									</div>
								</div>

								<div className="cards">
									<div className="card">
										<h2>Les onlays</h2>
										<img className="cosmetique-img" src={onlays}></img>
										<h6>
											Notre équipe pratique une dentisterie sans mercure : les
											"plombages" d’autrefois étaient composés d’un amalgame
											d’argent (poudre d’argent et d’étain mélangée avec du
											mercure) qu’on insère dans les cavités des dents cariées.
											Aujourd’hui, avec l’avancement des techniques et des
											matériaux, on peut utiliser des matériaux composites ou
											céramique. Ils sont collés pour donner une restauration
											étanche de la même couleur que la dent.
										</h6>
									</div>
									<div className="card">
										<h2>Les facettes</h2>
										<img className="cosmetique-img" src={facette}></img>
										<h6>
											Les dents sont parfois en bonne santé mais leur forme
											et/ou leur couleur ne sont pas satifaisantes. Il est
											possible pour ces cas de recouvrir la face externe de ces
											dents par des facettes en porcelaines.
										</h6>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div className="cards">
								<img className="card" src={blanchiment}></img>

								<h6 className="card">
									Le blanchiment dentaire est un procédé qui éclaircit l’émail
									et de la dentine en utilisant une solution spécifique : le
									péroxyde d’oxygène. Le principe est de casser les pigments
									responsables de couleurs disgracieuses tels que la coloration
									due à la fumée, au café, au vin ou à la prise de certains
									antibiotiques. De nouvelles méthodes permettent en 2 séances
									d’obtenir un résultat immédiat. Il existe également une
									technique applicable à la maison. Votre chirurgien-dentiste
									réalise l’empreinte de vos dents et fait faire une gouttière
									en plastique. Il vous remettra ensuite un gel contenant le
									principe actif blanchisseur. Votre chirurgien-dentiste vous
									expliquera tous les détails de la technique. L’avantage
									principal réside dans la possibilité d’utiliser ces gouttières
									ultérieurement pour redonner un coup d’éclat à vos dents.
								</h6>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<div className="card">
									<h2>La dentisterie a évoluée et les soins aussi.</h2>
									<h3>Toutes nos prothèses sont confectionnées par</h3>
									<h4>Laboratoire Surel de Moisdon la Rivière</h4>
								</div>

								<div className="cards">
									<div className="card">
										<h2>Les prothèses mobiles</h2>
										<img className="cosmetique-img" src={prothesesMobile}></img>
										<h6>
											Plus connu sous le nom de Dentiers, ils sont la hantise
											des patients En résine ou en métal "Stellite" , les
											dentiers permettent de remplacer de manière rapide et
											économique les dents absentes Le dentier "complet" permet
											de remplacer une arcade complète, généralement en résine
											il peut être renforcer par une plaque de métal, pour
											l’arcade du haut la tenue est en générale correcte, il
											n’en va pas toujours de même pour le bas et
											malheureusement la résorption osseuse ne n’arrêtant pas,
											en veillissant ces prothèses deviennent instables. Des
											implants peuvent alors aider pour une meilleur tenue Dans
											le pire des cas ce sont eux que l’on trouvent dans des
											verres à eau sur les tables de nuit
										</h6>
									</div>
									<div className="card">
										<h2>Les prothèses fixes</h2>
										<img className="cosmetique-img" src={prothese}></img>
										<h6>
											Les Prothèses fixes , couronnes ou bridges ne peuvent pas
											s’enlever les classiques couronnes métalliques sont
											souvent remplacées par des couronnes céramo métalliques
											pratiquement invisibles. Maintenant nous pouvons proposer
											des couronnes sans armarture métallique,qui laissentencore
											mieux passer la lumière.
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

export default Esthetique;
