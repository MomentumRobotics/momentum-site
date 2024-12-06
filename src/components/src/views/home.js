import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../navbar8'
import Hero16 from '../../hero16'
import Features24 from '../../features24'
import CTA26 from '../../cta26'
import Footer4 from '../../footer4'
import './home.css'
import {LinearTextGradient} from "react-text-gradients-and-animations";
import ScrollToTop from '../../scroll';

const Home = (props) => {
  return (
      <div className="home-container">
          <ScrollToTop/>
        <Helmet>
          <title>Home | Momentum Robotics</title>
          <meta property="og:title" content="Home | Momentum Robotics"/>
        </Helmet>
        <Navbar8
            link1={
              <Fragment>
                <span className="home-text10">Home</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="home-text11">About Us</span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="home-text12">Contac Us</span>
              </Fragment>
            }
            link3Url="#/about"
            link1Url="/momentum-site/"
            link31={
              <Fragment>
                <span className="home-text13">Contact Us</span>
              </Fragment>
            }
            link3Url1="#/contact"
        ></Navbar8>
        <Hero16
            heading1={
              <Fragment>
                <span className="home-text14">Echipa Momentum</span>

              </Fragment>
            }

            content1={
                <Fragment>
                    <span className="home-text16"><i><h2>Per aspera ad astra</h2></i></span>

                </Fragment>
            }
            content2={
                <Fragment>
                    <span className="home-text16"><i><h2>„pe căi anevoioase se ajunge la stele”</h2></i></span>
                </Fragment>
            }

        ></Hero16>
          <Features24

              feature1Title={
                  <Fragment>
                <span className="home-text18">Ce este <span className="black">F</span><span className="orange">TC</span> ?</span>
              </Fragment>
            }
            feature2Title={
              <Fragment>
                <span className="home-text19">Cine suntem noi?</span>
              </Fragment>
            }
            feature3Title={
              <Fragment>
                <span className="home-text20"><LinearTextGradient angle={90}
                                                                  colors={["#833ab4", "#fd1d1d", "#fcb045"]}> Our Socials </LinearTextGradient></span>
              </Fragment>
            }


            feature3Description={
              <Fragment>
                <span className="home-text23">Description for Feature 3</span>
              </Fragment>
            }
        ></Features24>

          <CTA26
          action1={
          <Fragment>
            <span className="home-text24">Înscrie-te acum</span>
          </Fragment>
        }
          heading1={
          <Fragment>
            <span className="home-text26">Alătură-te echipei noastre acum!</span>
          </Fragment>
        }
          rootClassName="cta26root-class-name"

          ></CTA26>







          <Footer4
              link1={
                <Fragment>
                  <span className="home-text41">Home</span>
                </Fragment>
              }
              link2={
                <Fragment>
                  <span className="home-text42">About Us</span>
                </Fragment>
              }
              link4={
                <Fragment>
                  <span className="home-text43">Contact Us</span>
                </Fragment>
              }
          ></Footer4>

        </div>
        )
        }

        export default Home
