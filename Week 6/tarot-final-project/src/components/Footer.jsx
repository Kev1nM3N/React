import React from 'react'
import KDLogo from '../assets/KD-left-transparent-png.png'
import upArrow from '../assets/Up arrow.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row footer__row">
                <Link href="#" className="footer__anchor">
                    <figure className="footer__logo--wrapper">
                        <img className="footer__logo--img" src={KDLogo} alt=""/>
                    </figure>
                    <span className="top">Back to top
                        <img className="upArrow" src={upArrow} alt="arrow"/>
                    </span>
                </Link>
                <div className="footer__social--list">
                    <Link to="https://github.com/Kev1nM3N" target="_blank" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Github
                    </Link>
                    <Link to="#" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        LinkedIn
                    </Link>
                    <Link to="#" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Contact
                    </Link>
                    <Link to={null} className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Resume
                    </Link>
                </div>
                <div className="footer__copyright">Copyright &#169; 2023 KD Design</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer