import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Bienvenue from "../../Components/Bienvenue/Bienvenue";
import topimg from "../../assets/topimg.png";
import Actualite from "../../Components/Actualite/Actualite";
import { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo-sagesse.png";

const Home = () => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [imageHeight, setImageHeight] = useState<number>(0);

	useEffect(() => {
		if (imageRef.current) {
			setImageHeight(imageRef.current.height);
			console.log(imageRef);
		}
	}, []);

	return (
		<div className="home-container">
			<div className="navbar-container">
				<img ref={imageRef} src={topimg} className="img-overlay" />

				<div className="navbar">
					<img src={logo} className="logo" />
					<Navbar />
				</div>
				<div className="bienvenue">
					<Bienvenue></Bienvenue>
				</div>
			</div>

			<div style={{ marginTop: `${imageHeight / 2}px` }} className="actualite">
				<Actualite></Actualite>
			</div>
		</div>
	);
};

export default Home;
