import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../../navbar8'
import Hero8 from '../../../hero8'
import Stats2 from '../../../stats2'
import Logos1 from '../../../logos1'
import Features1 from '../../../features1'
import Team1 from '../../../team1'
import Footer4 from '../../../footer4'
import './about.css'
import misu from '../Misu.jpg'
import mihai from '../Mihai.jpg'
import bia from '../Bia.jpg'
import hagiul from '../Hagiul.jpg'

const About = (props) => {
  return (
      <div className="about-container">
        <Helmet>
          <title>About Us | Momentum Robotics</title>
          <meta property="og:title" content="About Us | Momentum Robotics"/>
        </Helmet>
        <Navbar8
            link1={
              <Fragment>
                <span className="about-text10">Home</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="about-text11">About Us</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="about-text12">Contact us</span>
              </Fragment>
            }
            link1Url="/momentum-site/"
            link3Url="#/about"
            link31={
              <Fragment>
                <span className="about-text13">Contact Us</span>
              </Fragment>
            }
            link3Url1="#/contact"
        ></Navbar8>
          
        <Footer4
            link1={
              <Fragment>
                <span className="about-text75">Home</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="about-text76">About Us</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="about-text77">Contact Us</span>
              </Fragment>
            }
        ></Footer4>
      </div>

  )

}

export default About
