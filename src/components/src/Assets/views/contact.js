import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../../navbar8'
import Contact11 from '../../../contact11'
import Logos3 from '../../../logos3'
import Footer4 from '../../../footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
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
            <span className="contact-text17">contact@roboticscompany.com</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text18">
              For immediate assistance, give us a call.
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text19">+123-456-7890</span>
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
              123 Robotics Street, Cityville, Country
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text22">
              Our customer support team is available 24/7 to assist you.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text23">
              Join our community to stay updated on the latest news and offers.
            </span>
          </Fragment>
        }
      ></Contact11>
      <Logos3
        heading1={
          <Fragment>
            <span className="contact-text24">Our Logos</span>
          </Fragment>
        }
      ></Logos3>
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
