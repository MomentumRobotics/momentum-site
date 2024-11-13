import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery81.css'

const Gallery81 = (props) => {
  return (
    <div className="gallery81-gallery3 thq-section-padding">
      <div className="gallery81-max-width thq-section-max-width">
        <div className="gallery81-section-title">
          <h2 className="gallery81-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery81-text3">
                  Explore Our Robotics Products
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery81-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery81-text4">
                  Discover our wide range of cutting-edge robotics products
                  designed to meet your needs.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery81-container">
          <div className="gallery81-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery81-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">

              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery81-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery81.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1618498732743-b9907abfdf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1531413496675-fb7f363c2c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Robotics Product 1',
  image2Alt: 'Robotics Product 2',
  content1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1586374579358-9d19d632b6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Robotics Product 3',
  image3Src1:
    'https://images.unsplash.com/photo-1531413496675-fb7f363c2c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt1: 'Robotics Product 3',
  image3Src2:
    'https://images.unsplash.com/photo-1531413496675-fb7f363c2c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt2: 'Robotics Product 3',
  image3Src3:
    'https://images.unsplash.com/photo-1531413496675-fb7f363c2c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTUzOTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt3: 'Robotics Product 3',
}

Gallery81.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.element,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src1: PropTypes.string,
  image3Alt1: PropTypes.string,
  image3Src2: PropTypes.string,
  image3Alt2: PropTypes.string,
  image3Src3: PropTypes.string,
  image3Alt3: PropTypes.string,
}

export default Gallery81
