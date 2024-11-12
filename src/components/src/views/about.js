import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

const sponsorImages = [
    {src: EUROBUILDING, name: "Euro Building"},
    {src: sp2, name: "S.C. Consamar Hidroizolatii S.R.L."}


    // Add more images as needed
];
import sp2 from '../Assets/sp2.JPG'
import Navbar8 from '../../navbar8'
import Hero8 from '../../hero8'
import Stats2 from '../../stats2'
import Logos1 from '../../logos1'
import Features1 from '../../features1'
import Team1 from '../../team1'
import SponsorCarousel from "../../SponsorCarousel";
import Footer4 from '../../footer4'
import './about.css'
import misu from '../Assets/Misu.jpg'
import mihai from '../Assets/Mihai.jpg'
import bia from '../Assets/Bia.jpg'
import hagiul from '../Assets/Hagiul.jpg'
import Darian from '../Assets/Darian.jpg'
import Maria from  '../Assets/Maria.jpg'
import ScrollToTop from '../../scroll';
import ftc from '../Assets/FTC logo.png'
import Mentor from '../Assets/Mentor.jpg'
import darius from '../Assets/Darius.jpg'
import EUROBUILDING from '../Assets/EURO-BUILDING.jpg'
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
              <span className="Our_Team"><LinearTextGradient angle={45}
                                                             colors={["#ffd820", "#69af22"]}>Sponsors</LinearTextGradient></span>
          </div>
          <div className="sponsors"><span className="paragraph">Suntem extrem de recunoscători</span> sponsorilor noștri, a căror susținere generoasă ne
              alimentează pasiunea și dedicarea. Parteneriatul lor ne ajută să ne depășim limitele, să inovăm și să tindem
              spre excelență în tot ceea ce facem. Mai jos, veți găsi companiile și organizațiile extraordinare care sunt
              alături de noi, ajutându-ne să ne atingem obiectivele. Vă mulțumim că aveți încredere în noi!
          </div>
          <SponsorCarousel images={sponsorImages} />
          <div className="thq-divider-horizontal"></div>
          <div className="Our_Team">
              <span className="Our_Team"><LinearTextGradient angle={45}
                                                             colors={["#000C40 5%", "#607D8B"]}>Our Team</LinearTextGradient></span>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#780206", "#601161"]}>Main Leader</LinearTextGradient></span>
          </div>
          <div className="picture-and-name1">
              <div className="image-container">
                  <img className="image1" src={bia} alt="Bianca"/>
                  <span className="hide1">Jercan Bianca</span>
                  <span className="hide2">Lider Principal</span> {/* Department Text */}
              </div>

          </div>

          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#185a9d", "#43cea2"]}>Departament</LinearTextGradient></span>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#185a9d", "#43cea2"]}>Leaders</LinearTextGradient></span>
          </div>

          <div className="picture-and-name1">

              <div className="image-container">
                  <img className="image1" src={misu} alt="Misu"/>
                  <span className="hide1">Vîlcu Mihai Rareș</span> {/* Name Text */}
                  <span className="hide2">Lider Programare</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={mihai} alt="Mihai"/>
                  <span className="hide1">Ursache Mihai Andrei</span> {/* Name Text */}
                  <span className="hide2">Lider Web Design</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={hagiul} alt="Hagiul"/>
                  <span className="hide1">Hagiu Andrei Răzvan</span> {/* Name Text */}
                  <span className="hide2">Lider Constructie</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={Maria} alt="Bianca"/>
                  <span className="hide1">Gherghina Maria Carmen</span> {/* Name Text */}
                  <span className="hide2">Lider Marketing</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={Darian} alt="Bianca"/>
                  <span className="hide1">Munteanu Darian</span> {/* Name Text */}
                  <span className="hide2">Lider Jurnal</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">Dragomir Cotigă Rareș</span> {/* Name Text */}
                  <span className="hide2">Lider Design</span> {/* Department Text */}
              </div>
              <div className="image-container">
                  <img className="image1" src={ftc} alt="Bianca"/>
                  <span className="hide1">Gavrila Ionuț Damian</span> {/* Name Text */}
                  <span className="hide2">Lider 3D Design</span> {/* Department Text */}
              </div>
          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#1D2671", "#C33764"]}>Mentors</LinearTextGradient></span>
          </div>
          <div className="picture-and-name1">

              <div className="image-container">
                  <img className="image1" src={Mentor} alt="Mentor_1"/>
                  <span className="hide1">Nume Mentor</span> {/* Name Text */}
              </div>


          </div>
          <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#20e448", "#216da3", "#2f21a3"]}>Members</LinearTextGradient></span>
          </div>
          <div className="picture-and-name1">

              <div className="image-container">
                  <img className="image1" src={darius} alt="membru"/>
                  <span className="hide1">Nume membru</span> {/* Name Text */}
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
