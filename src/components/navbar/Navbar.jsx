import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.webp";
import './navbar.css'


const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Startseite</a>
      </p>
      <p>
        <a href="#über-uns">Über uns</a>
      </p>
      <p>
        <a href="#geschichte">Geschichte</a>
      </p>
      <p>
        <a href="#referenzen">Referenzen</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="westernsattel__navbar">
      <div className="westernsattel__navbar-links">
        <div className="westernsattel__navbar-links_logo">
          <img src={logo} alt="test" />
        </div>
        <div className="westernsattel__navbar-links_container">
         <Menu/>
        </div>
      </div>
      <div className="westernsattel__navbar-sign">
        <button type="button">Preisliste laden</button>
      </div>
      <div className="westernsattel__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#031b34"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#031b34"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="westernsattel__navbar-menu_container scale-up-center">
            <div className="westernsattel__navbar-menu_container-links">
            <Menu/>
            </div>
            <div className="westernsattel__navbar-menu_container-links-sign">
              <button type="button">Preisliste laden</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



export default Navbar;
