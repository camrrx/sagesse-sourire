import "./Navbar.scss";
import { menuItems } from "../../assets/menuItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@headlessui/react";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<div>
			<button className="navbar-toggle" onClick={toggleNavbar}>
				Navbar
			</button>
			<nav>
				<ul className="navbar">
					{menuItems.map((item, index) => (
						<li key={index} className="navbar-item">
							<Menu>
								<Menu.Button className="navbar-link">{item.title}</Menu.Button>
								{item.submenu && (
									<Menu.Items className="submenu">
										{item.submenu.map((subItem, subIndex) => (
											<Menu.Item key={subIndex}>
												{({ active }) => (
													<Link
														to={subItem.url}
														className={`submenu-link ${
															active ? "active" : ""
														}`}>
														{subItem.title}
													</Link>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								)}
							</Menu>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
