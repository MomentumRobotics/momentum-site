import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import pic1 from './src/components/src/Assets/a (1).jpg'
import pic2 from './src/components/src/Assets/a (2).jpg'
import pic3 from './src/components/src/Assets/a (3).jpg'
import pic4 from './src/components/src/Assets/a (4).jpg'
import pic5 from './src/components/src/Assets/a (5).jpg'
import pic6 from './src/components/src/Assets/a (6).jpg'

import './hero16.css'

const Hero16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero16-max-width thq-section-max-width">
        <div className="hero16-column thq-section-padding">
          <h1 className="thq-heading-1 hero16-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero16-text5">Default value</span>
              </Fragment>
            )}
          </h1>
          <p className="thq-body-large hero16-text2">
            {props.content1 ?? (
              <Fragment>
                <span className="hero16-text7">Default value</span>
              </Fragment>
            )}
          </p>
          <div className="hero16-actions">
            <button className="thq-button-filled hero16-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero16-text6">Default value</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero16-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero16-text8">Default value</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero16-content">
          <div className="hero16-column-container1 thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero16-column-container2 thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero16-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero16.defaultProps = {
  heading1: undefined,
  action1: undefined,
  image3Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  content1: undefined,
  image2Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
}

Hero16.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Hero16
