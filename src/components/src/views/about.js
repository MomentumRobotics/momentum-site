import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../navbar8'
import Hero8 from '../../hero8'
import Stats2 from '../../stats2'
import Logos1 from '../../logos1'
import Features1 from '../../features1'
import Team1 from '../../team1'
import Footer4 from '../../footer4'
import './about.css'
import misu from '../Assets/Misu.jpg'
import mihai from '../Assets/Mihai.jpg'
import bia from '../Assets/Bia.jpg'
import hagiul from '../Assets/Hagiul.jpg'
import Darian from '../Assets/Darian.jpg'
import ScrollToTop from '../../scroll';
import ftc from '../Assets/FTC logo.png'
import {LinearTextGradient, RadialTextGradient} from "react-text-gradients-and-animations";
const About = (props) => {
  return (
      <div className="about-container">
          <ScrollToTop/>
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

          <div className="Our_Team">
              <span className="Our_Team"><LinearTextGradient angle={45} colors={["#000C40 5%","#607D8B"]}>Our Team</LinearTextGradient></span>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45} colors={["#780206","#601161"]}>Main Leader</LinearTextGradient></span>
          </div>
          <div className="picture-and-name1">
              <div className="image-container">
                  <img className="image1" src={bia} alt="Bianca"/>
                  <span className="hide1">Jercan Bianca</span>
                  <span className="hide2">Lider Principal</span> {/* Department Text */}
              </div>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45} colors={["#185a9d","#43cea2"]}>Departament</LinearTextGradient></span>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45} colors={["#185a9d","#43cea2"]}>Leaders</LinearTextGradient></span>
          </div>
          <div className="picture-and-name1">
              <div className="image-container">
                  <img className="image1" src={hagiul} alt="Hagiul"/>
                  <span className="hide1">Haigu Andrei</span> {/* Name Text */}
                  <span className="hide2">Co-Lider Constructie</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={misu} alt="Misu"/>
                  <span className="hide1">Mihai</span> {/* Name Text */}
                  <span className="hide2">Lider Programare  Co-Lider Constructie</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={mihai} alt="Mihai"/>
                  <span className="hide1">Ursache Mihai Andrei</span> {/* Name Text */}
                  <span className="hide2">Lider Web Design</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">To Be Comunicated</span> {/* Name Text */}
                  <span className="hide2">Marketing</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={Darian} alt="Bianca"/>
                  <span className="hide1">Darian</span> {/* Name Text */}
                  <span className="hide2">Jurnal</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">To Be Comunicated</span> {/* Name Text */}
                  <span className="hide2">Proiectare</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">To Be Comunicated</span> {/* Name Text */}
                  <span className="hide2">Design</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">To Be Comunicated</span> {/* Name Text */}
                  <span className="hide2">3D Design</span> {/* Department Text */}
              </div>
          </div>
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
