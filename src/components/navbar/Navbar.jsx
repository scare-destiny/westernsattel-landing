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
        <a href="#possibility">Geschichte</a>
      </p>
      <p>
        <a href="#features">Team</a>
      </p>
      <p>
        <a href="#blog">Referenzen</a>
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
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
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
