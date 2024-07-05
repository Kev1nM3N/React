import React, { useState } from "react";
import KDLogo from '../assets/KD-left-transparent-png.png'
import profilePic from '../assets/Kevin AI.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  function openMenu (){
    document.body.classList += (` menu__open`)
}

function closeMenu (){
    document.body.classList.remove(`menu__open`)
}

let [modalOpen, setModalOpen] = useState(false);
function toggleModal (){
    if (modalOpen){
        setModalOpen(false)
        return document.body.classList.remove(`modal--open`);
    }
    setModalOpen(true)
    document.body.classList += ` modal--open`;
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

      <figure>
        <img id="personal-img" src={profilePic} alt="" />
      </figure>

      <div className="right-side">
        <ul className="AboutInfo">
          <Link to="/">
            <li className="link__hover-effect">Home</li>
          </Link>
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
              <Link to={null} className="nav__link">
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
      <div className="modal">
        <div className="modal__half modal__about">
            <h3 className="modal__title modal__title--about">Kevin Mendez</h3>
            <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer 👨‍💻</h4>
            <p className="modal__para">
                I'm a 26 year-old American <span className="red red__default">Software Engineer</span> with a strong passion for developing websites with
                great <span className="red red__default">user experiences.</span>
                <br/>
                I currently work on extremely difficult engineering problems and learn from a team consisting of some of the most
                <span className="red red__default"> talented</span> and <span className="red red__default">experienced</span> software engineers everyday.
            </p>
            <div className="modal__languages">
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://icons.veryicon.com/png/o/application/skills-section/html5-12.png" alt=""/>
                    <span className="language__name">HTML</span>
                </figure>
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/css3-9-1175237.png" alt=""/>
                    <span className="language__name">CSS</span>
                </figure>
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://ik.imagekit.io/garbagevalue/garbage/tags/JavaScript_ugn5DK93-.png" alt=""/>
                    <span className="language__name">JavaScript</span>
                </figure>
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://www.svgrepo.com/show/452092/react.svg" alt=""/>
                    <span className="language__name">React</span>
                </figure>
            </div>
        </div>
        <div className="modal__half modal__contact">
                <FontAwesomeIcon className="fas fa-times modal__exit click" style={{cursor: 'pointer'}} icon={faXmark} onClick={toggleModal}/>
                <h3 className="modal__title modal__title--contact">Let's Chat! 👨🏻‍💼</h3>
                <h4 className="modal__sub-title modal__sub-title--contact">I'm Currently Open To New Opportunities</h4>
                <form onSubmit={null} id="contact__form">
                    <div className="form__item">
                        <label className="form__item--label">Name</label>
                        <input type="text" name="user_name" className="input"></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Email</label>
                        <input type="email" name="user_email" className="input"></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Message</label>
                        <textarea style={{height: "130px"}} type="text" name="user_message" className="input inputTextArea"></textarea>
                    </div>
                    <button className="form__submit">Send</button>
                </form>
                <div className="modal__overlay modal__overlay--loading">
                    <i className="fas fa-spinner"></i>
                </div>
                <div className="modal__overlay modal__overlay--success">
                    Thanks! Looking forward to speaking with you soon!
                </div>
            </div>
    </div>
    </nav>
  );
}

export default Nav;
