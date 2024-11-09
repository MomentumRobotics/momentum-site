import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'
import {Link} from "react-router-dom";

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4" >
                        Alătură-te echipei noastre acum
                      </span>
                    </Fragment>
                  )}
                </span>

              </div>
              <div className="cta26-actions">
                <a href="https://forms.gle/H8rvNUNshXD1AvMUA" target="_blank" rel="noopener noreferrer">
                <button
                    type="button"
                    className="cta26-button thq-button-filled"

                >
                <span>
                    {props.action1 ?? (
                        <Fragment>
                          <span className="cta26-text5">Sign Up Now</span>
                        </Fragment>
                    )}
                  </span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
  rootClassName: '',
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA26
