import "./Navbar.scss";
import { menuItems } from "../../assets/menuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul className="navbar">
				{menuItems.map((item, index) => (
					<li key={index} className="navbar-item">
						<Link to={item.url} className="navbar-link">
							{item.title}
						</Link>
						{item.submenu && (
							<ul className="submenu">
								{item.submenu.map((subItem, subIndex) => (
									<li key={subIndex} className="submenu-item">
										<Link to={subItem.url} className="submenu-link">
											{subItem.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
