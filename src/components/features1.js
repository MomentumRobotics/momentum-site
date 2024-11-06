import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text17">
                    Experience Innovation in Robotics
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text23">Key Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text20">
                  Discover the top features that set Momentum Robotics apart
                  from the rest.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text15">
                        Advanced Security Measures
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text16">
                        Our robotics products come equipped with
                        state-of-the-art security features to ensure your peace
                        of mind.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text14">
                        24/7 Customer Support
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text22">
                        Get assistance anytime you need it with our
                        round-the-clock customer support team.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text18">
                        Convenient Ordering Process
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Easily explore, select, and order your favorite robotics
                        products through our user-friendly interface.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text13">Explore Products</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text21">
                    Join Now for Exclusive Offers
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1721152531828-dc7d998bf0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2ImageAlt: '24/7 Customer Support Image',
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1675795943845-f47f58dc28f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Convenient Ordering Process Image',
  feature1ImageAlt: 'Advanced Security Measures Image',
  sectionDescription: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1664033247283-93c8582c5090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features1
