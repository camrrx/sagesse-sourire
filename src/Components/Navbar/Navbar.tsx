import "./Navbar.scss";
import { menuItems } from "../../assets/menuItems";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import logo from "../../assets/logo-sagesse.png";

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="navbar">
					<div className="logo-container">
						<img src={logo} className="logo" />
						<h1>Cabinet sagesse & sourire</h1>
					</div>
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
								</Menu>
							) : (
								<Link to={item.url} className="navbar-link">
									{item.title}
								</Link>
							)}
						</div>
					))}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
