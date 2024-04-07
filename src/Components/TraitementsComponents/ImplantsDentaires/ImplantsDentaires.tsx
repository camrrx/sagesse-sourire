import "./ImplantsDentaires.scss";
import implant from "../../../assets/implant-schema.png";
import implantUnitaire from "../../../assets/implantnitaire.jpeg";
import secteurEdente from "../../../assets/secteuredente.jpeg";
import edentationComplete from "../../../assets/edentationcomplete.jpeg";
import greffeOsseuse from "../../../assets/greffeOsseuse.jpeg";
import videoDef from "../../../assets/video/bridge.mp4";
import video1Implant from "../../../assets/video/1implant.mp4";
import videoiu from "../../../assets/video/iu.mp4";
import videoisecteur from "../../../assets/video/isecteur.mp4";
import videoitotal from "../../../assets/video/itotal.mp4";
import videoiposidental from "../../../assets/video/ipositdental.mp4";
import videoisinus from "../../../assets/video/isinus.mp4";
import videosl from "../../../assets/video/sl.mp4";
import videointra from "../../../assets/video/intra.mp4";
import videoig from "../../../assets/video/ig.mp4";
import implantIcon from "../../../assets/cards/implant.png";
import { BsFillCalendarDateFill, BsFillCameraVideoFill } from "react-icons/bs";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTheme } from "../../../ThemeContext";
import ReactPlayer from "react-player";

const ImplantsDentaires = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { theme } = useTheme();

	return (
		<div className={`ImplantsDentaires-container  ${theme}`}>
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
						<Tab.Panel className="custom-tab-panel" id="definition">
							<div>
								<div className="cards">
									<div className="card">
										<div className="icon-container ">
											<img src={implantIcon}></img>
										</div>
										<h1>Un implant, à quoi ça ressemble?</h1>
										<h6>
											L’implant est une vis en titane (matériau biocompatible)
											qui s’intègre dans l’os et constitue une racine
											artificielle. L’implant présente un filetage qui lui
											permet d’accueillir la vis de couverture durant
											l’ostéointégration, puis le pilier prothétique. La
											couronne implantaire ne peut pas être directement scellée
											sur l’implant il faut une pièce intermédiaire: le pilier
											implantaire (faux moignon). La prothèse implantaire se
											réalise au bout de 3 à 6 mois après la pose de l’implant.
											Il faudra dégager l’implant de la gencive afin de réaliser
											l’empreinte nécessaire à la confection: c’est la technique
											en 2 temps. Si la situation avait été jugée très
											favorable, une technique avec pose d’une bague de
											cicatrisation apparente permet ne pas ouvrir la gencive
											pour les empreintes prothétique: c’est la technique en 1
											temps.
										</h6>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<img className="implant-img" src={implant} />
									</div>
									<div className="card">
										<div className="icon-container ">
											<img src={implantIcon}></img>
										</div>
										<h1>Les implants c'est quoi?</h1>
										<h6>
											Lorsque nous perdons une dent c’est tout le fonctionnement
											de notre bouche et de notre digestion qui risque d’être
											mis en péril. L’implantologie offre une alternative à la
											pose de bridges ou d’appareils dentaires (dentiers) et
											permet de stopper la fonte osseuse engendrée par la perte
											de dent.
										</h6>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCalendarDateFill className="icon" />
										</div>
										<h1>Pour qui?</h1>
										<h6>
											L’implant est une racine artificielle qui vise à remplacer
											une ou plusieurs dents absentes. Il permet la réalisation
											d’une prothèse sur un ancrage stable et durable (jusqu’à
											plusieurs dizaines d’années) sans engager les dents
											adjacentes. Il vise à rétablir une fonction adéquate, un
											confort satisfaisant et une esthétique compatible avec
											toute fonction sociable.
										</h6>
										<h6>
											L’implant peut être envisagé chez presque tous patients
											majeurs, à condition que la qualité et le volume de l’os
											soient suffisants. L’évaluation de ces critères se fait
											grâce à un Cone Beam. Si le volume osseux se révèle
											insuffisant, le recours à une greffe est évoqué.
										</h6>
										<h6>
											Il existe quelques contre-indications à la pose
											d’implants. Un questionnaire médical et une première
											consultation avec le chirurgien-dentiste permettent de
											faire le point sur votre état de santé générale dans le
											but d’éviter tous risques. Parmi les contre-indications
											nous retrouvons le tabagisme, le diabète, la mauvaise
											hygiène mais aussi la prise de certains anticoagulants…
										</h6>
										<h6>
											Une hygiène rigoureuse est indispensable. La pérennité des
											implants dépendra beaucoup de l’entretien que vous leur
											consacrerez.
										</h6>
									</div>
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>Les implants en vidéo</h1>

										<div className="implant-video">
											<ReactPlayer
												url={videoDef}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="implantUnitaire">
							<div>
								<div className="cards">
									<div className="card">
										<div className="icon-container ">
											<img src={implantIcon}></img>
										</div>
										<h1>Une seule dent absente : une catastrophe</h1>
										<h6>
											C’est le cas le plus fréquent. Une seule dent absente est
											une catastrophe, car cela déstabilise toute la bouche.
											Lorsqu’elle est visible, il n’y a pas de vieillissement
											plus dégradant. Les individus sont touchés dans leur
											capacité psycho relationnelle sociale, et surtout intime.
										</h6>
									</div>
									<div className="card">
										<img className="implant-img" src={implantUnitaire}></img>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>L'implant unitaire en vidéo</h1>

										<div className="implant-video">
											<ReactPlayer
												url={video1Implant}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
									<h6 className="card">
										Lors de la perte complète d’une dent (couronne + racine), la
										fonte de l’os commence sans jamais s’arrêter. Seuls les
										implants dentaires peuvent stopper cette évolution, ce qui
										n’est absolument pas le cas avec un appareil dentaire ou un
										bridge. La pose d’un implant est un acte réalisé à notre
										cabinet, sous anesthésie locale, dans une salle préparée.
									</h6>

									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>

										<div className="implant-video">
											<ReactPlayer
												url={videoiu}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="secteurEdente">
							<div>
								<div className="cards">
									<div className="card">
										<h6>
											Ce sont des cas assez fréquents, une dent est partie puis
											une autre et tout un coté ne sert plus, le choix se résume
											alors entre la pose d'un appareil amovible ou des
											implants.
										</h6>
										<h6>
											Si ce cas correspond au votre, le film décrit assez bien
											ce qui se passe.
										</h6>
									</div>
									<div className="card">
										<img className="implant-img" src={secteurEdente}></img>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>Le secteur edenté en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videoisecteur}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
									<div className="card">
										<h6>
											Pour ces cas, nous réalisons toujours des investigations
											radiologiques poussées. Souvent un guide radiologique est
											réalisé avant le scanner, puis nous modélisons avec
											précision votre dentition en trois dimensions pour définir
											la place des implants.
										</h6>
										<h6>
											La pose des implants est un acte réalisé à en une fois
											dans notre cabinet, sous anesthésie locale, dans une salle
											préparée. Pour les patients très anxieux nous pouvons
											réaliser la pose à la clinique de chateaubriant. Le
											supplément de cout sera à votre charge.
										</h6>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="edentationComplete">
							<div>
								<div className="cards">
									<div className="card">
										<img className="implant-img" src={edentationComplete}></img>
									</div>
									<div className="card">
										<h6>
											C’est un cas complexe, car les prothèses mobiles complètes
											ne sont pas toujours bien supportées par les patients.
										</h6>
										<h6>
											Pour chaque cas un guide radiologique et un scanner sont
											réalisés, puis nous modélisons avec précision votre
											dentition en trois dimensions pour définir la place des
											implants.
										</h6>
									</div>
								</div>

								<div className="cards">
									<div className="card">
										<h6>
											En raison de l’édentation souvent ancienne, nous sommes
											face à une grande résorption osseuse, il n’est pas
											toujours possible de recréer une dentition fixe
										</h6>
										<h6>
											Lorsque ce n’est pas possible, l’on pose des implants pour
											stabiliser la prothèse amovible.
										</h6>
									</div>
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>L'édentation complète en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videoitotal}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="rehabilitationComplete">
							<div>
								<div className="cards">
									<h6 className="card">
										l’imagerie tridimensionelle et les progrès de l'informatique
										permettent maintenant des chirurgies en une seule seance. La
										vidéo montre une intervention réalisée à notre cabinet, sous
										anesthésie locale, dans une salle préparée.
									</h6>
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>L'édentation complète en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videoiposidental}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="sinusLift">
							<div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>Sinus lift en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videoisinus}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
									<div className="card">
										<h6>
											Le sinus maxillaire est une cavité naturelle qui se situe,
											la plupart du temps, immédiatement au-dessus de la zone
											des prémolaires et molaires du haut. Lorsque ces dents
											sont perdues et non remplacées, l’os se résorbe. Il
											devient alors parfois impossible de poser des implants à
											cet endroit tant l’épaisseur osseuse est insuffisante.
											L’intervention appelée "sinus-lift" consiste à redonner à
											l’os une épaisseur suffisante pour permettre la pose des
											implants et ainsi pouvoir remplacer les dents absentes par
											une solution FIXE. Nous avons à notre disposition 2
											techniques pour les réaliser
										</h6>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<h2>LE SINUS LIFT LATERAL</h2>
										<h6>
											Lorsque l’épaisseur d’os est vraiment faible inférieur 4mm
											nous pratiquons au fauteuil, avec la collaboration des ORL
											de châteaubriant pour mieux visualiser l’intérieur du
											sinus et plus facilement décoller la membrane Dans la
											grande majorité des cas nous mettons les implants dans la
											même séance, le temps d’ostéointégration est de 6 mois.
										</h6>
									</div>
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>Sinus lift latéral en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videosl}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>L'intralift en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videointra}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
									<div className="card">
										<h2>L’INTRALIFT</h2>
										<h6>
											Cette nouvelle technique permise grâce à l’utilisation des
											piézotomes permet d’être moins invasif, nous utilisons ce
											procédé lorsque l’épaisseur d’os est supérieure à 6mm, le
											temps d’ostéointégration est de 6 mois nous posons les
											implants dans la même séance
										</h6>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="custom-tab-panel" id="greffeOsseuse">
							<div>
								<div className="cards">
									<h6 className="card">
										Si, l’absence de dent, à provoqué une résorbption importante
										de l’os, nous procédons au comblement par greffe osseuse
										préalablement à la pose des implants. Selon les cas, une
										période de 3 à 9 mois est nécéssaire avant de pouvoir poser
										les implants.
									</h6>
									<div className="card">
										<img className="implant-img" src={greffeOsseuse}></img>
									</div>
								</div>
								<div className="cards">
									<div className="card">
										<div className="icon-container">
											<BsFillCameraVideoFill className="icon" />
										</div>
										<h1>Greffe osseuse en vidéo</h1>
										<div className="implant-video">
											<ReactPlayer
												url={videoig}
												controls={true}
												width="100%"
												height="100%"
											/>
										</div>
									</div>
									<h6 className="card">
										Cette intervention est un acte réalisé à notre cabinet, sous
										anesthésie locale, dans une salle préparée.Les cas
										nécéssitant un prélevement osseux important seront adressés
										à notre correspondant spécialiste qui réalisera l’acte en
										clinique
									</h6>
								</div>
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

export default ImplantsDentaires;
