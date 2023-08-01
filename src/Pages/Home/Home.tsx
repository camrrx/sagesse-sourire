import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Bienvenue from "../../Components/Bienvenue/Bienvenue";
import topimg from "../../assets/topimg.png";
import Actualite from "../../Components/Actualite/Actualite";
import logo from "../../assets/logo-sagesse.png";

const Home = () => {
	return (
		<div className="home-container">
			<div className="navbar-container">
				<img src={topimg} className="img-overlay" />

				<div className="navbar">
					<img src={logo} className="logo" />
					<Navbar />
				</div>
				<div className="bienvenue">
					<Bienvenue></Bienvenue>
				</div>
			</div>

			<div className="actualite">
				<Actualite></Actualite>
			</div>
		</div>
	);
};

export default Home;
