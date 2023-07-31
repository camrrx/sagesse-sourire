import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Bienvenue from "../../Components/Bienvenue/Bienvenue";

const Home = () => {
	return (
		<div className="home-container">
			<div className="navbar-svg-container">
				<svg
					className="wavy"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320">
					<path
						fill="#00cba9"
						fill-opacity="1"
						d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,80C560,96,640,160,720,208C800,256,880,288,960,288C1040,288,1120,256,1200,240C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
				</svg>
				<div className="navbar">
					<Navbar />
				</div>
			</div>
			<Bienvenue></Bienvenue>
		</div>
	);
};

export default Home;
