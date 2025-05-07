import { useState, useRef, useEffect } from "react";
import { menuItems } from "../../../assets/menuItems";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Sidebar.scss";
import logo from "../../../assets/logo_sagesse.png";
import { useTheme } from "../../../ThemeContext";

const Sidebar = () => {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState<number | null>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		setActiveMenu(null);
	};

	const handleMenuClick = (index: number) => {
		setActiveMenu(activeMenu === index ? null : index);
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

		const handleClickOutside = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setActiveMenu(null);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<div className={`sidebar-closed ${scrolled ? "scrolled" : ""} ${theme}`}>
				<FaBars className="toggle-icon" onClick={toggleSidebar} />
				<img src={logo} className="logo" />
			</div>

			<div
				className={`sidebar ${isOpen ? "open" : ""} ${theme}`}
				ref={sidebarRef}>
				<div className="logo-container">
					<img src={logo} className="logo" />
					<h1 className="title-dentiste">Sagesse & sourire</h1>
				</div>
				<div className="menu-items">
					{menuItems.map((item, index) => (
						<div key={index} className="menu-item">
							{item.submenu ? (
								<div>
									<div
										className="menu-title"
										onClick={() => handleMenuClick(index)}>
										{item.title}
									</div>
									{activeMenu === index && (
										<div className="submenu-items">
											{item.submenu.map((subItem, subIndex) => (
												<Link
													key={subIndex}
													to={`${subItem.url}${
														subItem.hash ? `#${subItem.hash}` : ""
													}`}
													className="submenu-item"
													onClick={() => setIsOpen(false)}>
													{subItem.title}
												</Link>
											))}
										</div>
									)}
								</div>
							) : (
								<Link
									to={item.url}
									className="menu-title"
									onClick={() => setIsOpen(false)} // Fermer la sidebar lorsque l'utilisateur clique sur un menu sans sous-menu
								>
									{item.title}
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
