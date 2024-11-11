import React, { useState, Fragment } from 'react'
import logo from './src/Assets/logo.png'
import ftc from './src/Assets/FTC logo.png'
import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar8-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">

        <img
            src={logo}
            className="navbar8-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <a
                href={props.link1Url}
                className="navbar8-link11 thq-link thq-body-small"
            >
              {props.link1 ?? (
                  <Fragment>
                  <span className="navbar8-text1">
                    <span>Home</span>
                    <br></br>
                  </span>
                  </Fragment>
              )}
            </a>
            <a
                href={props.link3Url}
                //target="_blank"
                rel="noreferrer noopener"
                className="navbar8-link31 thq-body-small thq-link"
            >
              {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text4">About Us</span>
                  </Fragment>
              )}
            </a>
            <a
                href={props.link3Url1}
                //target="_blank"
                rel="noreferrer noopener"
                className="navbar8-link32 thq-body-small thq-link"
            >
              {props.link31 ?? (
                  <Fragment>
                    <span className="navbar8-text6">About Us</span>
                  </Fragment>
              )}
            </a>
          </nav>

          <a href="https://www.firstinspires.org/robotics/ftc"> <img src={ftc} className="navbar8-image2"/>
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
        <svg viewBox="0 0 1024 1024" className="navbar8-icon1">
            <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">

              <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon3">
                  <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a
                  href={props.link1Url}
                  className="navbar8-link12 thq-body-small thq-link"
              >
                {props.link1 ?? (
                    <Fragment>
                    <span className="navbar8-text1">
                      <span>Home</span>
                      <br></br>
                    </span>
                    </Fragment>
                )}
              </a>
              <a
                  href={props.link3Url}
                  className="navbar8-link33 thq-body-small thq-link"
              >
                {props.link3 ?? (
                    <Fragment>
                      <span className="navbar8-text4">About Us</span>
                    </Fragment>
                )}
              </a>
              <span className="thq-body-small thq-link">
                {props.link4 ?? (
                    <Fragment>
                      <span className="navbar8-text5">Contac Us</span>
                    </Fragment>
                )}
              </span>
            </nav>
          </div>
        </div>
      </header>
      {link5DropdownVisible && (
          <div
              onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container2"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  logoAlt: 'Momentum Robotics',
  link1: undefined,
  link3: undefined,
  link4: undefined,
  link3Url: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  rootClassName: '',
  link31: undefined,
  link3Url1: 'https://www.teleporthq.io',
}

Navbar8.propTypes = {
  logoAlt: PropTypes.string,
  link1: PropTypes.element,
  link3: PropTypes.element,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  link3Url: PropTypes.string,
  link1Url: PropTypes.string,
  rootClassName: PropTypes.string,
  link31: PropTypes.element,
  link3Url1: PropTypes.string,
}

export default Navbar8
