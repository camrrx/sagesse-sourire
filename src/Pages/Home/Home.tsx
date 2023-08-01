import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Bienvenue from "../../Components/Bienvenue/Bienvenue";
import Actualite from "../../Components/Actualite/Actualite";

const Home = () => {
  return (
    <div className="home-container light-theme">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bienvenue">
        <Bienvenue></Bienvenue>
      </div>
      <div className="actualite">
        <Actualite></Actualite>
      </div>
    </div>
  );
};

export default Home;
