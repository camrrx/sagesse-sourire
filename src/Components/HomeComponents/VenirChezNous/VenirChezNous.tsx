import "./VenirChezNous.scss";
import batDent from "../../../assets/batiment-dentist .png";
import iconeLocalisation from "../../../assets/icones/localisation_noir.png";
import {
	BsFillTelephoneFill,
	BsPinMapFill,
	BsCompassFill,
} from "react-icons/bs";
import { TbClockHour10 } from "react-icons/tb";

import { FaMapPin, FaArrowRight } from "react-icons/fa";
import MapComponent from "../../Maps/maps";
const VenirChezNous = () => {
	const busStop = [
		"Bus - Mairie",
		"Bus - Poste",
		"Bus - HLM Vitré",
		"Bus - Gare SNCF",
		"Bus - Trinité",
		"Bus - gare de Châteaubriant",
	];

	const handleOpenGoogleMaps = () => {
		const latitude = "47.7205933";
		const longitude = "-1.3757356";

		const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

		window.open(googleMapsURL, "_blank");
	};

	return (
		<div className="venircheznous-container light-theme">
			<div className="title-wrapper">
				<img src={iconeLocalisation} alt="" />
				<h2 className="venircheznous-title">Venir Chez Nous</h2>
			</div>

			<div className="flex-container">
				<div className="box-container">
					<div className="name">
						<img src={batDent} className="imgbat"></img>
						<h3>SAGESSE ET SOURIRE</h3>
					</div>

					<div className="phonenumber">
						<BsFillTelephoneFill className="icon" />
						<div>02.40.81.01.28</div>
					</div>

					<div className="adresse">
						<BsPinMapFill className="icon" />
						<div>
							16 Rue DU 11 NOVEMBRE <br />
							<span className="lighter-font">44110 CHATEAUBRIANT</span>
						</div>
					</div>

					<div className="date">
						<TbClockHour10 className="icon" />
						<div className="opening-time">
							<div>
								Lundi à Vendredi <br />
								<span className="lighter-font">8h30 - 12h / 14h - 19h</span>
							</div>
						</div>
					</div>
				</div>

				<div className="box-container">
					<div className="name">
						<BsCompassFill className="icon" />
						<h3>Transports les plus proches</h3>
					</div>
					<div className="busstop">
						{busStop.map(bus => (
							<div className="stop">
								<FaMapPin className="icon" />
								<span className="lighter-font">{bus}</span>
							</div>
						))}
					</div>

					<button
						className="button-contact button-1 button-syrendre"
						onClick={handleOpenGoogleMaps}>
						S'y rendre <FaArrowRight />
					</button>
				</div>
			</div>

			<MapComponent></MapComponent>
		</div>
	);
};

export default VenirChezNous;
