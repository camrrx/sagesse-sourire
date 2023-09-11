import "./ImplantsDentaires.scss";
import implant from "../../../assets/implants.jpeg";
import implantUnitaire from "../../../assets/implantnitaire.jpeg";
import secteurEdente from "../../../assets/secteuredente.jpeg";
import edentationComplete from "../../../assets/edentationcomplete.jpeg";
import rehabilitationDentaire from "../../../assets/rehabilitationDentaire.jpeg";
import greffeOsseuse from "../../../assets/greffeOsseuse.jpeg";
import sinuslift from "../../../assets/sinuslift.jpeg";
import { Tab } from "@headlessui/react";
import { useState } from "react";

const ImplantsDentaires = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="ImplantsDentaires-container grey-theme">
			<h2>Les implants dentaires</h2>
			<div className="implant-container">
				<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
					<Tab.List className="custom-tab-list">
						<Tab
							className={`custom-tab ${selectedIndex === 0 ? "active" : ""}`}>
							Définition
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 1 ? "active" : ""}`}>
							L'implant unitaire
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 2 ? "active" : ""}`}>
							Le secteur édenté
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 3 ? "active" : ""}`}>
							L'édentation complète
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 4 ? "active" : ""}`}>
							Réhabilitation dentaire
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 5 ? "active" : ""}`}>
							Sinus Lift
						</Tab>
						<Tab
							className={`custom-tab ${selectedIndex === 6 ? "active" : ""}`}>
							Greffe osseuse
						</Tab>
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h3>
									Les implants intra-osseux intrabuccaux ont été développés à
									partir des années 70 à partir des travaux du Professeur
									Brånemark en Suède. Les implants se sont rapidement développés
									dans les pays industrialisés et apparaissent actuellement
									comme une solution thérapeutique de plus en plus reconnue et
									employée.
								</h3>
								<h6>
									Les implants sont des dispositifs destinés à créer, au
									maxillaire ou à la mandibule des ancrages stables, résistant,
									efficaces, non iatrogènes, durables, sur lesquels s’adapte une
									prothèse amovible ou fixée en vue de redonner au patient
									partiellement ou complètement édenté, une fonction adéquate,
									un confort satisfaisant et une esthétique compatible avec
									toute fonction sociale
								</h6>
								<h2>Protocoles du cabinet</h2>
								<h5>
									L’implantologie dentaire permet le remplacement d’une ou
									plusieurs dents manquantes par des implants. Mais chaque cas
									est différent, nous vous expliquerons les différentes étapes
									pour la pose d’implants dentaires, dans votre cas.
								</h5>
								<h6>
									Pour les explications et la décision préliminaire, un
									rendez-vous suffit.
								</h6>
								<h5>
									Lors du second rendez-vous, en fonction de l’importance et du
									type de traitement, le dentiste procède aux examens d'usage et
									planifie le traitement.
								</h5>
								<h6>
									Pour les cas complexes, nous réalisons des investigations
									radiologiques poussées. Grâce au scanner, nous modélisons avec
									précision votre dentition en trois dimensions pour définir la
									place des implants. La maîtrise de ces technologies de pointe
									garantit notre taux de réussite très élevé
								</h6>
								<h5>
									Ces cas nécéssitent un troisième rendez vous afin de finaliser
									le plan de traitement
								</h5>
								<h6>
									Vos implants seront posées en une séance sous anesthésie
									locale,et la gencive sera suturée. Pour certains cas complexes
									un des ORL de chateaubriant, pratiquera une partie de
									l'intervention A ce stade, la phase de cicatrisation débute et
									elle se déroule généralement sur une période de 2 à 6 mois.Si
									cette cicatrisation se déroule normalement, les implants sont
									bien intégrés dans les machoires.
								</h6>
								<h5>On pourra alors fixer de nouvelles couronnes dessus.</h5>
							</div>
							<div>
								<img className="implant-img" src={implant}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									C’est le cas le plus fréquent. Une seule dent absente est une
									catastrophe, car cela déstabilise toute la bouche. Lorsqu’elle
									est visible, il n’y a pas de vieillissement plus dégradant.
									Les individus sont touchés dans leur capacité psycho
									relationnelle sociale, et surtout intime.
								</h5>
								<h6>
									Lors de la perte complète d’une dent (couronne + racine), la
									fonte de l’os commence sans jamais s’arrêter. Seuls les
									implants dentaires peuvent stopper cette évolution, ce qui
									n’est absolument pas le cas avec un appareil dentaire ou un
									bridge. La pose d’un implant est un acte réalisé à notre
									cabinet, sous anesthésie locale, dans une salle préparée.
								</h6>
							</div>

							<div>
								<img className="implant-img" src={implantUnitaire}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									Ce sont des cas assez fréquents, une dent est partie puis une
									autre et tout un coté ne sert plus, le choix se résume alors
									entre la pose d'un appareil amovible ou des implants.
								</h5>
								<h6>
									Si ce cas correspond au votre, le film décrit assez bien ce
									qui se passe.
								</h6>
								<h5>
									Pour ces cas, nous réalisons toujours des investigations
									radiologiques poussées. Souvent un guide radiologique est
									réalisé avant le scanner, puis nous modélisons avec précision
									votre dentition en trois dimensions pour définir la place des
									implants.
								</h5>
								<h6>
									La pose des implants est un acte réalisé à en une fois dans
									notre cabinet, sous anesthésie locale, dans une salle
									préparée. Pour les patients très anxieux nous pouvons réaliser
									la pose à la clinique de chateaubriant. Le supplément de cout
									sera à votre charge.
								</h6>
							</div>

							<div>
								<img className="implant-img" src={secteurEdente}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									C’est un cas complexe, car les prothèses mobiles complètes ne
									sont pas toujours bien supportées par les patients.
								</h5>
								<h6>
									Pour chaque cas un guide radiologique et un scanner sont
									réalisés, puis nous modélisons avec précision votre dentition
									en trois dimensions pour définir la place des implants.
								</h6>
								<h5>
									En raison de l’édentation souvent ancienne, nous sommes face à
									une grande résorption osseuse, il n’est pas toujours possible
									de recréer une dentition fixe
								</h5>
								<h6>
									Lorsque ce n’est pas possible, l’on pose des implants pour
									stabiliser la prothèse amovible(voir les liens ci-dessous)
								</h6>
							</div>

							<div>
								<img className="implant-img" src={edentationComplete}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									l’imagerie tridimensionelle et les progrès de l'informatique
									permettent maintenant des chirurgies en une seule seance.
								</h5>
								<h6>
									La vidéo montre une intervention réalisée à notre cabinet,
									sous anesthésie locale, dans une salle préparée.
								</h6>
							</div>

							<div>
								<img className="implant-img" src={rehabilitationDentaire}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									Le sinus maxillaire est une cavité naturelle qui se situe, la
									plupart du temps, immédiatement au-dessus de la zone des
									prémolaires et molaires du haut. Lorsque ces dents sont
									perdues et non remplacées, l’os se résorbe. Il devient alors
									parfois impossible de poser des implants à cet endroit tant
									l’épaisseur osseuse est insuffisante. L’intervention appelée
									"sinus-lift" consiste à redonner à l’os une épaisseur
									suffisante pour permettre la pose des implants et ainsi
									pouvoir remplacer les dents absentes par une solution FIXE.
									Nous avons à notre disposition 2 techniques pour les réaliser
								</h5>
								<h2>LE SINUS LIFT LATERAL</h2>
								<h6>
									Lorsque l’épaisseur d’os est vraiment faible inférieur 4mm
									nous pratiquons au fauteuil, avec la collaboration des ORL de
									châteaubriant pour mieux visualiser l’intérieur du sinus et
									plus facilement décoller la membrane Dans la grande majorité
									des cas nous mettons les implants dans la même séance, le
									temps d’ostéointégration est de 6 mois.
								</h6>
								<h2>L’INTRALIFT</h2>
								<h6>
									Cette nouvelle technique permise grâce à l’utilisation des
									piézotomes permet d’être moins invasif, nous utilisons ce
									procédé lorsque l’épaisseur d’os est supérieure à 6mm, le
									temps d’ostéointégration est de 6 mois nous posons les
									implants dans la même séance
								</h6>
							</div>

							<div>
								<img className="implant-img" src={sinuslift}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel">
							<div>
								<h5>
									Si, l’absence de dent, à provoqué une résorbption importante
									de l’os, nous procédons au comblement par greffe osseuse
									préalablement à la pose des implants.
								</h5>
								<h6>
									Selon les cas, une période de 3 à 9 mois est nécéssaire avant
									de pouvoir poser les implants.
								</h6>
								<h5>
									Cette intervention est un acte réalisé à notre cabinet, sous
									anesthésie locale, dans une salle préparée.
								</h5>
								<h6>
									Les cas nécéssitant un prélevement osseux important seront
									adressés à notre correspondant spécialiste qui réalisera
									l’acte en clinique
								</h6>
							</div>

							<div>
								<img className="implant-img" src={greffeOsseuse}></img>
								<div className="implant-video"> insérer video</div>
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default ImplantsDentaires;
