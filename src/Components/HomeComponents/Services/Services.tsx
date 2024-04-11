// import { ServiceCards } from "../../../assets/ServiceCards";
import "./Services.scss";
import soins from "../../../assets/cards/soins.png";
import ortho from "../../../assets/cards/ortho.png";
import implant from "../../../assets/cards/implant.png";
import paro from "../../../assets/cards/paro.png";
import logo from "../../../assets/logo_sagesse-noir.png";
import iconChair from "../../../assets/icones/cabinetimg.png";
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<>
			<div className="sticker">
				<img src={iconChair} alt="" />
			</div>
			<div className="services-container">
				<div className="main-wrapper">
					<div className="title">
						<h2>Les traitements</h2>
						<h1>Une Clinique Complète</h1>
					</div>
					<div className="cards-service">
						<Link to={"/sagesse-sourire/traitements#parodontie"}>
							<div className="card-service">
								<div className="icon">
									<img src={soins} alt="" />
								</div>
								<h1>Soins dentaires</h1>
								<p>
									Soins conservateurs ou spécifiques à chaque dent sa solution!
								</p>
							</div>
						</Link>
						<Link to={"/sagesse-sourire/traitements#orthodontie"}>
							<div className="card-service">
								<div className="icon">
									<img src={ortho} alt="" />
								</div>
								<h1>Orthodontie</h1>
								<p>
									L’orthodontie ou comment travailler l’architecture de votre
									sourire!
								</p>
							</div>
						</Link>
						<Link to={"/sagesse-sourire/traitements#implantsDentaires"}>
							<div className="card-service">
								<div className="icon">
									<img src={implant} alt="" />
								</div>
								<h1>Implantologie</h1>
								<p>Remplacer durablement une dent perdue!</p>
							</div>
						</Link>
						<Link to={"/sagesse-sourire/traitements#dentisterieEsthetique"}>
							<div className="card-service">
								<div className="icon">
									<img src={paro} alt="" />
								</div>
								<h1>Esthétique</h1>
								<p>J’ose retrouver le sourire!</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="line-container">
					<div className="line"></div>
					<img src={logo} alt="" />
					<div className="line"></div>
				</div>
			</div>
		</>
	);
};

export default Services;
