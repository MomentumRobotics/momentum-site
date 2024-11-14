import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../navbar8'
import Contact11 from '../../contact11'
import Logos3 from '../../logos3'
import Footer4 from '../../footer4'
import './contact.css'
import ScrollToTop from '../../scroll';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <ScrollToTop/>
      <Helmet>
        <title>Contact Us | Momentum Robotics</title>
        <meta
          property="og:title"
          content="Contact Us | Momentum Robotics"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">
              <span>Home</span>
              <br></br>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text13">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text14">Contac Us</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        link31={
          <Fragment>
            <span className="contact-text15">Contact Us</span>
          </Fragment>
        }
        link1Url="/momentum-site/"
        link3Url="#/about"
        link3Url1="#/contact"
      ></Navbar8>
      <Contact11
        content1={
          <Fragment>
            <span className="contact-text16">
              Have any questions or inquiries? Feel free to reach out to us.
            </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="contact-text17">momentumrobotics25@gmail.com</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text18">
              Become a Sponsor – Support the Future of Robotics</span>
           <span> Support Momentum Robotics as we compete in First Tech Challange and inspire the next generation of
            engineers.</span>
            <p>
Why Sponsor Us?
  </p>
            <p>-Showcase your brand at events.</p>
            <p>-Engage with the STEM community.</p>
            <p>-Support innovation in robotics.</p>

          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text19">+40 748 583 856  Bianca</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text20">Contact Us</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text21">
              Strada Radu S. Campiniu 4-6, Brăila 810003, România
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text22">
                Have a question you want answers from us?</span> <p>Give Us Call Us !</p>

          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text23">
              Where Will You find Us ?
            </span>
          </Fragment>
        }
      ></Contact11>

      <Footer4
        link1={
          <Fragment>
            <span className="contact-text25">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text26">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text27">Contact Us</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
