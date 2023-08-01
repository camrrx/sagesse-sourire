import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Bienvenue from "../../Components/Bienvenue/Bienvenue";
import Actualite from "../../Components/Actualite/Actualite";
import Presentation from "../../Components/Presentation/Presentation";

const Home = () => {
	return (
		<div className="home-container light-theme">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="bienvenue">
				<Bienvenue></Bienvenue>
			</div>
			<div className="presentation">
				<Presentation></Presentation>
			</div>
			<div className="separation"></div>
			<div className="actualite">
				<Actualite></Actualite>
			</div>
		</div>
	);
};

export default Home;
