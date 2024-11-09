import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";
import './features24.css'
import instagramlogo from "./src/Assets/Instagramlogo.png"
import facebooklogo from "./src/Assets/facebooklogo.png"

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <div className="FTC"> <span className="sizetxt"> <RadialTextGradient shape={"circle"} position={"left"} colors={["#000000 0.1%","#fb9902" ,"#fb9902"]}>First Tech Challenge </RadialTextGradient></span>(FTC) este o competiție de robotică pentru
              tineri, unde echipe de elevi construiesc și programează roboți.
              Scopul este să-i învețe pe tineri despre <RadialTextGradient shape={"circle"} position={"center"} colors={["#D4145A" ,"#FBB03B"]}>  știință, tehnologie,
              inginerie și matematică </RadialTextGradient>(STEM),
              precum și
              abilități de lucru în
              echipă și rezolvare de probleme. Robotii construiți trebuie să
              îndeplinească sarcini specifice într-un joc anual diferit.</div>
          )}
          {activeTab === 1 && (
              <span className="Way"> <RadialTextGradient shape={"circle"} position={"top"}
                                                         colors={["#396fb1", "#000000"]}><span className="sizetxt">Echipa Momentum</span></RadialTextGradient>  este un proiect lansat de echipa cunoscută
              și calificată la nivel național <RadialTextGradient
                    colors={["#ff0000", "#000000"]}> Velocity</RadialTextGradient> în cadrul <span className="gold">Colegiului Național “Nicolae Iorga”</span>.
              Echipa Momentum este modalitatea <span className="gold">Colegiului “Nicolae Iorga”</span>  de a-și pune amprenta
              în cadrul acestei comunități și de a crește o generație creativă,
              cu cunoștințe atât la nivel tehnic cât și cele de natură socială. </span>
          )}
          {activeTab === 2 && (
             <div>
                <div>
                  <a href="https://www.instagram.com/momentum.robotics" target="_blank" rel="noopener noreferrer" className="instagram_1">
                    <span>
                     <img className="instagram" src={instagramlogo}></img>
                     <span className="instagram_1"><LinearTextGradient angle={90} colors={["#833ab4", "#fd1d1d", "#fcb045"]}> Follow Us </LinearTextGradient></span>
                    </span>
                 </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=61565332126966" target="_blank" rel="noopener noreferrer" className="facebook_1">
                   <span>
                     <img className="facebook" src={facebooklogo}></img>
                     <span className="facebook_1">Follow Us </span>
                    </span>
                  </a>
                </div>
               </div>)
          }
        </div>
        <div className="features24-tabs-menu">
          <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
            <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text5">Feature 1 Title</span>
                  </Fragment>
                )}
              </h2>

            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text2">Cine suntem noi ?</span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text1">Feature 3 Title</span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
  feature3Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1Mnx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImgAlt: 'Image for Feature 1',
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature3ImgAlt: 'Image for Feature 3',
  feature2ImgAlt: 'Image for Feature 2',
}

Features24.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Features24
