import "./Navbar.scss";
import { menuItems } from "../../../assets/menuItems";
import { Menu } from "@headlessui/react";
import logo from "../../../assets/logo-sagesse-blanc.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../ThemeContext";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const [showRDV, setRDV] = useState(false);

	const takeRDV = () => {
		setRDV(true);
	};

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const scrollY = window.scrollY;

			if (scrollY >= windowHeight / 8) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`${theme}`}>
			<Dialog open={showRDV} onClose={() => setRDV(false)}>
				<Dialog.Panel className={`dialog-overlay ${theme}`}>
					<div className="dialog-box">
						<Dialog.Title className="dialog-title">
							Prendre rendez-vous
						</Dialog.Title>
						<Dialog.Description className="dialog-description">
							<p>Le cabinet reçoit exclusivement sur rendez-vous. </p> <br />
							<p>
								Pour prendre rendez-vous, vous pouvez nous contacter au
								<strong> 02.40.81.01.28.</strong>
							</p>
							<br />
							<p>
								Le caractère urgent de votre situation sera évalué et nous nous
								efforcerons d’y répondre le plus rapidement possible.
								<br /> L’accueil téléphonique est ouvert le matin, du lundi au
								samedi, de 8h à 11h30 et l’après-midi, du lundi au vendredi, de
								14h à 18h30.
							</p>
							<br />
							<p>
								Avant votre rendez-vous veuillez remplir le questionnaire pré
								rendez-vous et nous le remettre à votre arrivée au cabinet
								dentaire.
							</p>
						</Dialog.Description>

						<button
							className="button-1 button-contact"
							onClick={() => setRDV(false)}>
							OK
						</button>
					</div>
				</Dialog.Panel>
			</Dialog>
			<div className={`navbar ${theme}`}>
				<nav>
					<div className={`navbar ${scrolled ? "scrolled" : ""}`}>
						<div className="logo-container">
							<div className="logo">
								<img src={logo} />
							</div>
							<div className="title-dentiste">
								<h1>Cabinet</h1>
								<p>Sagesse & Sourire</p>
							</div>
						</div>
						<div className="navbar-container">
							{menuItems.map((item, index) => (
								<div key={index} className="navbar-item">
									{item.submenu ? (
										<Menu>
											<Menu.Button className="navbar-link">
												{item.title}
											</Menu.Button>
											<Menu.Items className="submenu">
												{item.submenu.map((subItem, subIndex) => (
													<Menu.Item key={subIndex}>
														{({ active }) => (
															<a
																key={subIndex}
																href={subItem.url}
																className={`submenu-link ${
																	active ? "active" : ""
																}`}>
																{subItem.title}
															</a>
														)}
													</Menu.Item>
												))}
											</Menu.Items>
										</Menu>
									) : (
										<Link to={item.url} className="navbar-link">
											{item.title}
										</Link>
									)}
								</div>
							))}
						</div>
						<div className="right-container">
							<Menu>
								<button onClick={takeRDV} className="button-contact button-3">
									Prendre RDV
								</button>
								{/* <Menu.Button>
              </Menu.Button> */}
								<Menu.Items className="colorpicker">
									<h1>Themes</h1>
									<button onClick={() => toggleTheme("grey-theme")}>
										Gris/vert
									</button>
									<button onClick={() => toggleTheme("blue-theme")}>
										Bleu
									</button>
									<button onClick={() => toggleTheme("dark-theme")}>
										sombre
									</button>
								</Menu.Items>
							</Menu>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
