import "./Navbar.scss";
import { menuItems } from "../../../assets/menuItems";
import { Menu } from "@headlessui/react";
import logo from "../../../assets/logo-sagesse.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

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
		<div className="navbar light-theme">
			<nav>
				<div className={`navbar ${scrolled ? "scrolled" : ""}`}>
					<div className="logo-container">
						<img src={logo} className="logo" />
						<h1 className="title-dentiste">Cabinet sagesse & sourire</h1>
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
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
