import React from "react";
import KDLogo from '../assets/KD-left-transparent-png.png'
import profilePic from '../assets/Kevin AI.jpeg'
import closeMenu2 from '../assets/close.svg'
import hamburgerMenu from '../assets/hamburger menu.svg'
import { Link } from "react-router-dom";

function Nav() {
  function openMenu (){
    document.body.classList += (` menu__open`)
}

function closeMenu (){
    document.body.classList.remove(`menu__open`)
}

  return (
    <nav>
      <div className="left-side">
        <img
          className="headerLogo"
          src={KDLogo}
          alt=""
        />
      </div>

      <figure>
        <img id="personal-img" src={profilePic} alt="" />
      </figure>

      <div className="right-side">
        <ul className="AboutInfo">
          <a className="link__hover-effect" href="javascript:void(0)">
            <li>About</li>
          </a>
          <a className="link__hover-effect" href="javascript:void(0)">
            <li>Blog</li>
          </a>
          <a className="link__hover-effect" href="javascript:void(0)">
            <li>Contact</li>
          </a>
        </ul>

        <a className="btn__menu--link" href="javascript:void(0)">
          <img
            onClick={openMenu}
            src={hamburgerMenu}
            alt="hammenu"
            className="btn__menu"
          />
        </a>

        <div className="menu__backdrop">
          <button onClick={closeMenu} className="btn__menu btn__menu--close">
            <img
              src={closeMenu2}
              alt=""
              className="btn__menu"
            />
          </button>
          <ul className="menu__links">
            <li>
              <Link to="/" onClick={closeMenu} className="nav__link">
                About
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="nav__link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="nav__link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="nav__link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="nav__link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
