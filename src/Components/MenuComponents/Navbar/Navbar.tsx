import "./Navbar.scss";
import { menuItems } from "../../../assets/menuItems";
import { Menu } from "@headlessui/react";
import logo from "../../../assets/logo_sagesse.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../ThemeContext";
import PrendreRDV from "../../shared/PrendreRDV/PrendreRDV";
import FAQ from "../../shared/FAQ/FAQ";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [showRDV, setRDV] = useState(false);
  const [showFAQ, setFAQ] = useState(false);

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
      <PrendreRDV showRDV={showRDV} setRDV={setRDV} />
      <FAQ showFAQ={showFAQ} setFAQ={setFAQ} />
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
                      {({ open, close }) => (
                        <div className="menu-container">
                          <Menu.Button
                            className="navbar-link"
                            //onMouseEnter={(
                            //	event: React.MouseEvent<HTMLButtonElement>
                            //	) => (open ? "" : event.currentTarget.click())}
                          >
                            {item.title}
                          </Menu.Button>

                          {open && (
                            <Menu.Items
                              className="submenu"
                              onMouseLeave={() => close()}
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <Menu.Item key={subIndex}>
                                  {({ active }) => (
                                    <a
                                      key={subIndex}
                                      href={
                                        subItem.url +
                                        (subItem.hash ? "#" + subItem.hash : "")
                                      }
                                      className={`submenu-link ${
                                        active ? "active" : ""
                                      }`}
                                    >
                                      {subItem.title}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          )}
                        </div>
                      )}
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
                <button
                  onClick={() => setFAQ(true)}
                  className="button-contact button-4"
                >
                  FAQ
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
