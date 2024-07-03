import React from 'react'
import KDLogo from '../assets/KD-left-transparent-png.png'
import upArrow from '../assets/Up arrow.svg'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row footer__row">
                <a href="#" className="footer__anchor">
                    <figure className="footer__logo--wrapper">
                        <img className="footer__logo--img" src={KDLogo} alt=""/>
                    </figure>
                    <span className="top">Back to top
                        <img className="upArrow" src={upArrow} alt="arrow"/>
                    </span>
                </a>
                <div className="footer__social--list">
                    <a href="https://github.com/Kev1nM3N" target="_blank" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Github
                    </a>
                    <a href="#" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        LinkedIn
                    </a>
                    <a href="#" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Contact
                    </a>
                    <a href="javascript:void(0)" className="
                    footer__social--link
                    link__hover-effect
                    ">
                        Resume
                    </a>
                </div>
                <div className="footer__copyright">Copyright &#169; 2023 KD Design</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer