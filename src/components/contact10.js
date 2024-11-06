import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text20">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Have questions or need support? Reach out to us through the
                    following channels.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text21">Headquarters</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    123 Main Street, City, Country
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text19">Support Center</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text18">
                    456 Support Street, City, Country
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'Headquarters Location',
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1Description: undefined,
  location2Description: undefined,
  location2ImageAlt: 'Support Center Location',
  location2: undefined,
  heading1: undefined,
  location1: undefined,
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location1: PropTypes.element,
}

export default Contact10
