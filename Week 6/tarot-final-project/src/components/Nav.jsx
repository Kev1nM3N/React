import React from "react";
import KDLogo from '../assets/KD-left-transparent-png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
//Use Modal backdrop as a component

function Nav({ toggleModal }) {
  function openMenu (){
    document.body.classList += (` menu__open`)
}

function closeMenu (){
    document.body.classList.remove(`menu__open`)
}

const location = useLocation();

const navStyle = {
  backgroundColor: location.pathname === "/main" ? "#fff8e7" : "initial"
};

  return (
    <nav style={navStyle}>
      <div className="left-side">
        <img
          className="headerLogo"
          src={KDLogo}
          alt=""
        />
      </div>

      <div className="right-side">
        <ul className="AboutInfo">
          {location.pathname !== "/" && (
            <Link to="/">
              <li className="link__hover-effect">Home</li>
            </Link>
          )}
          <Link to={null}>
            <li onClick={toggleModal} className="link__hover-effect">Contact</li>
          </Link>
          <Link to="/main">
            <li className="link__hover-effect">Browse Cards</li>
          </Link>
          <Link to={null}>
            <li className="link__hover-effect">Login</li>
          </Link>
          <Link to={null}>
            <button className="registerButton">Register</button>
          </Link>
        </ul>

        <Link className="btn__menu--link" to={null}>
          <FontAwesomeIcon 
            onClick={openMenu}
            icon={faBars}
            alt="hamburgerMenu"
            className="btn__menu"
            style={{fontSize: "20px"}}
          />
        </Link>

        <div className="menu__backdrop">
          <FontAwesomeIcon 
            icon={faXmark}
            className="btn__menu btn__menu--close click"
            onClick={closeMenu}
            style={{cursor: "pointer", fontSize: '25px'}}
          />
          <ul className="menu__links">
            <li>
              <Link to="/" onClick={closeMenu} className="nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link to={null} onClick={toggleModal} className="nav__link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={null} className="nav__link">
                Browse Cards
              </Link>
            </li>
            <li>
              <Link to={null} className="nav__link">
                Log in
              </Link>
            </li>
            <li>
              <Link to={null} className="nav__link">
                <button className="registerButton">Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Adding the modal here */}
      <Modal toggleModal={toggleModal}/>
    </nav>
  );
}

export default Nav;
