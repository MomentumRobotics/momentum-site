import React, {Fragment} from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'
import Navbar8 from "../../navbar8";

const NotFound = (props) => {
  return (
    <div className="not-found-container1">
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
        <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container2">
        <h1 className="not-found-text2">404</h1>
      </div>
      <div className="not-found-container3">
        <h2 className="not-found-text3">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
