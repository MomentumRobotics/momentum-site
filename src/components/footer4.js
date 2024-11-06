import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <Link to="/" className="footer4-navlink1 thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text4">Home</span>
                </Fragment>
              )}
            </Link>
            <Link to="/about" className="footer4-navlink2 thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text2">About Us</span>
                </Fragment>
              )}
            </Link>
            <Link to="/contact" className="footer4-navlink3 thq-body-small">
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text3">Contact Us</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 Momentum Robotics</span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  link4: undefined,
  link1: undefined,
}

Footer4.propTypes = {
  link2: PropTypes.element,
  link4: PropTypes.element,
  link1: PropTypes.element,
}

export default Footer4
