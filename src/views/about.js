import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Worthwhile Quaint Dunlin</title>
        <meta property="og:title" content="About - Worthwhile Quaint Dunlin" />
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
        link1Url="#/"
        link3Url="#/about"
        link31={
          <Fragment>
            <span className="about-text13">Contact Us</span>
          </Fragment>
        }
        link3Url1="#/contact"
      ></Navbar8>
      <Hero8
        content1={
          <Fragment>
            <span className="about-text14">
              Explore our wide range of robotics products and services
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text15">Join Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text16">Welcome to Momentum Robotics</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text17">Shop Now</span>
          </Fragment>
        }
        rootClassName="hero8root-class-name"
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text18">Years in Business</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text19">5</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text20">100+</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text21">Happy Customers</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text22">Support Team</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text23">
              Choose from a wide range of over 100 products.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text24">Our Stats</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text25">
              Our dedicated support team is available round the clock to assist
              you.
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text26">Products Available</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text27">
              Join over 1000 satisfied customers who have experienced our
              services.
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text28">
              We have been providing robotics solutions for 5 years.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text29">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        mainAction={
          <Fragment>
            <span className="about-text30">Explore Products</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text31">24/7 Customer Support</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text32">Advanced Security Measures</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text33">
              Our robotics products come equipped with state-of-the-art security
              features to ensure your peace of mind.
            </span>
          </Fragment>
        }
        slogan={
          <Fragment>
            <span className="about-text34">
              Experience Innovation in Robotics
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text35">Convenient Ordering Process</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text36">
              Easily explore, select, and order your favorite robotics products
              through our user-friendly interface.
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text37">
              Discover the top features that set Momentum Robotics apart from
              the rest.
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text38">Join Now for Exclusive Offers</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text39">
              Get assistance anytime you need it with our round-the-clock
              customer support team.
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text40">Key Features</span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member5Content={
          <Fragment>
            <span className="about-text41">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text42">
              Bob is a tech guru who ensures our products are at the forefront
              of innovation.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text43">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text44">Our Amazing Team</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text45">Lead Engineer</span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text46">
              David keeps our products secure with his extensive cybersecurity
              background.
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text47">CTO</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text48">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text51">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text52">Full name</span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text53">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text54">Job title</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text55">We’re hiring!</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text56">Bob Johnson</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text57">Job title</span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text58">
              Eva brings expertise in robotics engineering to create
              cutting-edge solutions.
            </span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text59">Open positions</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text60">Full name</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text61">Full name</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text62">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text65">Head of Security</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text66">CEO &amp; Co-Founder</span>
          </Fragment>
        }
        member1={
          <Fragment>
            <span className="about-text67">Alice Smith</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text68">David Lee</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text69">Job title</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text70">Eva Brown</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text71">
              Alice is a visionary leader with a passion for robotics and
              technology.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text72">
              Meet the talented individuals behind our innovative robotics
              company.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text73">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text74">Job title</span>
          </Fragment>
        }
      ></Team1>
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
