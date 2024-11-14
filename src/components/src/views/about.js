import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'
import {LinearTextGradient, RadialTextGradient} from "react-text-gradients-and-animations";

const sponsorImages = [
    {src: EUROBUILDING, name: "Euro Building"},
    {src: sp2, name: "S.C. Consamar Hidroizolatii S.R.L."}
];


import img0 from './Assets/IMG_7773.jpg';
import img1 from './Assets/IMG_7780.jpg';
import img2 from './Assets/IMG_7782.jpg';
import img3 from './Assets/IMG_7784.jpg';
import img4 from './Assets/IMG_7785.jpg';
import img5 from './Assets/IMG_7789.jpg';
import img6 from './Assets/IMG_7794.jpg';
import img7 from './Assets/IMG_7796.jpg';
import img8 from './Assets/IMG_7797.jpg';
import img9 from './Assets/IMG_7800.jpg';
import img10 from './Assets/IMG_7801.jpg';
import img11 from './Assets/IMG_7805.jpg';
import img12 from './Assets/IMG_7806.jpg';
import img13 from './Assets/IMG_7808.jpg';
import img14 from './Assets/IMG_7810.jpg';
import img15 from './Assets/IMG_7812.jpg';
import img16 from './Assets/IMG_7815.jpg';
import img17 from './Assets/IMG_7822.jpg';
import img18 from './Assets/IMG_7824.jpg';
import img19 from './Assets/IMG_7826.jpg';
import img20 from './Assets/IMG_7830.jpg';
import img21 from './Assets/IMG_7832.jpg';
import img22 from './Assets/IMG_7833.jpg';
import img23 from './Assets/IMG_7848.jpg';
import img24 from './Assets/IMG_7851.jpg';
import img25 from './Assets/IMG_7913.jpg';
import img26 from './Assets/IMG_7916.jpg';
import img27 from './Assets/IMG_7917.jpg';
import img28 from './Assets/IMG_7919.jpg';
import img29 from './Assets/IMG_7921.jpg';
import img30 from './Assets/IMG_7923.jpg';
import img31 from './Assets/IMG_7924.jpg';
import img32 from './Assets/IMG_7926.jpg';
import img33 from './Assets/IMG_7928.jpg';
import img34 from './Assets/IMG_7933.jpg';
import img35 from './Assets/IMG_9835.jpg';
import img36 from './Assets/IMG_9837.jpg';
import img37 from './Assets/IMG_9839.jpg';
import img38 from './Assets/IMG_9843.jpg';
import img39 from './Assets/IMG_9846.jpg';
import img40 from './Assets/IMG_9847.jpg';
import img41 from './Assets/IMG_9848.jpg';
import img42 from './Assets/WhatsApp Image 2024-11-14 at 7.20.59 PM.jpeg';
import img43 from './Assets/WhatsApp Image 2024-11-14 at 7.21.00 PM (1).jpeg';
import img44 from './Assets/WhatsApp Image 2024-11-14 at 7.21.00 PM (2).jpeg';
import img45 from './Assets/WhatsApp Image 2024-11-14 at 7.21.00 PM.jpeg';
import img46 from './Assets/WhatsApp Image 2024-11-14 at 7.21.01 PM (1).jpeg';
import img47 from './Assets/WhatsApp Image 2024-11-14 at 7.21.01 PM.jpeg';
import img48 from './Assets/WhatsApp Image 2024-11-14 at 7.21.02 PM (1).jpeg';
import img49 from './Assets/WhatsApp Image 2024-11-14 at 7.21.02 PM.jpeg';
import img50 from './Assets/WhatsApp Image 2024-11-14 at 7.21.03 PM (1).jpeg';
import img51 from './Assets/WhatsApp Image 2024-11-14 at 7.21.03 PM.jpeg';
import img52 from './Assets/WhatsApp Image 2024-11-14 at 7.21.04 PM.jpeg';
import img53 from './Assets/WhatsApp Image 2024-11-14 at 7.21.05 PM.jpeg';
import img54 from './Assets/WhatsApp Image 2024-11-14 at 7.21.06 PM (1).jpeg';
import img55 from './Assets/WhatsApp Image 2024-11-14 at 7.21.06 PM (2).jpeg';
import img56 from './Assets/WhatsApp Image 2024-11-14 at 7.21.06 PM.jpeg';
import img57 from './Assets/WhatsApp Image 2024-11-14 at 7.21.07 PM (1).jpeg';
import img58 from './Assets/WhatsApp Image 2024-11-14 at 7.21.07 PM.jpeg';
import img59 from './Assets/WhatsApp Image 2024-11-14 at 7.21.08 PM (1).jpeg';
import img60 from './Assets/WhatsApp Image 2024-11-14 at 7.21.08 PM (2).jpeg';
import img61 from './Assets/WhatsApp Image 2024-11-14 at 7.21.08 PM.jpeg';
import img62 from './Assets/WhatsApp Image 2024-11-14 at 7.21.09 PM.jpeg';
import img63 from './Assets/WhatsApp Image 2024-11-14 at 7.21.10 PM (1).jpeg';
import img64 from './Assets/WhatsApp Image 2024-11-14 at 7.21.10 PM.jpeg';
import img65 from './Assets/WhatsApp Image 2024-11-14 at 7.21.11 PM (1).jpeg';
import img66 from './Assets/WhatsApp Image 2024-11-14 at 7.21.11 PM (2).jpeg';
import img67 from './Assets/WhatsApp Image 2024-11-14 at 7.21.11 PM.jpeg';
import img68 from './Assets/WhatsApp Image 2024-11-14 at 7.21.12 PM (1).jpeg';
import img69 from './Assets/WhatsApp Image 2024-11-14 at 7.21.12 PM.jpeg';
import img70 from './Assets/WhatsApp Image 2024-11-14 at 7.21.13 PM (1).jpeg';
import img71 from './Assets/WhatsApp Image 2024-11-14 at 7.21.13 PM.jpeg';
import img72 from './Assets/WhatsApp Image 2024-11-14 at 7.21.48 PM (1).jpeg';
import img73 from './Assets/WhatsApp Image 2024-11-14 at 7.21.48 PM (2).jpeg';
import img74 from './Assets/WhatsApp Image 2024-11-14 at 7.21.48 PM.jpeg';
import img75 from './Assets/WhatsApp Image 2024-11-14 at 7.21.49 PM (1).jpeg';
import img76 from './Assets/WhatsApp Image 2024-11-14 at 7.21.49 PM.jpeg';
import img77 from './Assets/WhatsApp Image 2024-11-14 at 7.21.50 PM (1).jpeg';
import img78 from './Assets/WhatsApp Image 2024-11-14 at 7.21.50 PM.jpeg';
import img79 from './Assets/WhatsApp Image 2024-11-14 at 7.21.51 PM.jpeg';
import img80 from './Assets/WhatsApp Image 2024-11-14 at 7.21.52 PM.jpeg';
import img81 from './Assets/WhatsApp Image 2024-11-14 at 7.21.53 PM (1).jpeg';
import img82 from './Assets/WhatsApp Image 2024-11-14 at 7.21.53 PM (2).jpeg';
import img83 from './Assets/WhatsApp Image 2024-11-14 at 7.21.53 PM.jpeg';
import img84 from './Assets/WhatsApp Image 2024-11-14 at 7.21.54 PM (1).jpeg';
import img85 from './Assets/WhatsApp Image 2024-11-14 at 7.21.54 PM.jpeg';
import img86 from './Assets/WhatsApp Image 2024-11-14 at 7.21.55 PM (1).jpeg';
import img87 from './Assets/WhatsApp Image 2024-11-14 at 7.21.55 PM.jpeg';
import img88 from './Assets/WhatsApp Image 2024-11-14 at 7.21.56 PM.jpeg';


export const images = [
    { src: img0, alt: 'Image 1' },
    { src: img1, alt: 'Image 2' },
    { src: img2, alt: 'Image 3' },
    { src: img3, alt: 'Image 4' },
    { src: img4, alt: 'Image 5' },
    { src: img5, alt: 'Image 6' },
    { src: img6, alt: 'Image 7' },
    { src: img7, alt: 'Image 8' },
    { src: img8, alt: 'Image 9' },
    { src: img9, alt: 'Image 10' },
    { src: img10, alt: 'Image 11' },
    { src: img11, alt: 'Image 12' },
    { src: img12, alt: 'Image 13' },
    { src: img13, alt: 'Image 14' },
    { src: img14, alt: 'Image 15' },
    { src: img15, alt: 'Image 16' },
    { src: img16, alt: 'Image 17' },
    { src: img17, alt: 'Image 18' },
    { src: img18, alt: 'Image 19' },
    { src: img19, alt: 'Image 20' },
    { src: img20, alt: 'Image 21' },
    { src: img21, alt: 'Image 22' },
    { src: img22, alt: 'Image 23' },
    { src: img23, alt: 'Image 24' },
    { src: img24, alt: 'Image 25' },
    { src: img25, alt: 'Image 26' },
    { src: img26, alt: 'Image 27' },
    { src: img27, alt: 'Image 28' },
    { src: img28, alt: 'Image 29' },
    { src: img29, alt: 'Image 30' },
    { src: img30, alt: 'Image 31' },
    { src: img31, alt: 'Image 32' },
    { src: img32, alt: 'Image 33' },
    { src: img33, alt: 'Image 34' },
    { src: img34, alt: 'Image 35' },
    { src: img35, alt: 'Image 36' },
    { src: img36, alt: 'Image 37' },
    { src: img37, alt: 'Image 38' },
    { src: img38, alt: 'Image 39' },
    { src: img39, alt: 'Image 40' },
    { src: img40, alt: 'Image 41' },
    { src: img41, alt: 'Image 42' },
    { src: img42, alt: 'Image 43' },
    { src: img43, alt: 'Image 44' },
    { src: img44, alt: 'Image 45' },
    { src: img45, alt: 'Image 46' },
    { src: img46, alt: 'Image 47' },
    { src: img47, alt: 'Image 48' },
    { src: img48, alt: 'Image 49' },
    { src: img49, alt: 'Image 50' },
    { src: img50, alt: 'Image 51' },
    { src: img51, alt: 'Image 52' },
    { src: img52, alt: 'Image 53' },
    { src: img53, alt: 'Image 54' },
    { src: img54, alt: 'Image 55' },
    { src: img55, alt: 'Image 56' },
    { src: img56, alt: 'Image 57' },
    { src: img57, alt: 'Image 58' },
    { src: img58, alt: 'Image 59' },
    { src: img59, alt: 'Image 60' },
    { src: img60, alt: 'Image 61' },
    { src: img61, alt: 'Image 62' },
    { src: img62, alt: 'Image 63' },
    { src: img63, alt: 'Image 64' },
    { src: img64, alt: 'Image 65' },
    { src: img65, alt: 'Image 66' },
    { src: img66, alt: 'Image 67' },
    { src: img67, alt: 'Image 68' },
    { src: img68, alt: 'Image 69' },
    { src: img69, alt: 'Image 70' },
    { src: img70, alt: 'Image 71' },
    { src: img71, alt: 'Image 72' },
    { src: img72, alt: 'Image 73' },
    { src: img73, alt: 'Image 74' },
    { src: img74, alt: 'Image 75' },
    { src: img75, alt: 'Image 76' },
    { src: img76, alt: 'Image 77' },
    { src: img77, alt: 'Image 78' },
    { src: img78, alt: 'Image 79' },
    { src: img79, alt: 'Image 80' },
    { src: img80, alt: 'Image 81' },
    { src: img81, alt: 'Image 82' },
    { src: img82, alt: 'Image 83' },
    { src: img83, alt: 'Image 84' },
    { src: img84, alt: 'Image 85' },
    { src: img85, alt: 'Image 86' },
    { src: img86, alt: 'Image 87' },
    { src: img87, alt: 'Image 88' },
    { src: img88, alt: 'Image 89' }
];


import sp2 from '../Assets/sp2.JPG'
import Navbar8 from '../../navbar8'
import SponsorCarousel from "../../SponsorCarousel";
import Footer4 from '../../footer4'
import './about.css'

import Doroftei from '../Assets/IMG_7905.jpg'
import matei from '../Assets/IMG_9865.jpg'
import Lavinia from '../Assets/IMG_9854.jpg'
import Magda from '../Assets/Magda.jpg'
import sisu from '../Assets/sisu.jpg'
import Ionut from '../Assets/Ionut.jpg'
import Rares from '../Assets/Rares.jpg'
import misu from '../Assets/Misu.jpg'
import mihai from '../Assets/Mihai.jpg'
import bia from '../Assets/Bia.jpg'
import hagiul from '../Assets/Hagiul.jpg'
import Darian from '../Assets/Darian.jpg'
import Maria from  '../Assets/Maria.jpg'
import darius from '../Assets/Darius.jpg'

import ScrollToTop from '../../scroll';

import ftc from '../Assets/FTC logo.png'
import EUROBUILDING from '../Assets/EURO-BUILDING.jpg'
import Gallery8 from "../../gallery8";




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
            <div className="sponsors"><span className="paragraph">Suntem extrem de recunoscători</span> sponsorilor
                noștri, a căror susținere generoasă ne
                alimentează pasiunea și dedicarea. Parteneriatul lor ne ajută să ne depășim limitele, să inovăm și să
                tindem
                spre excelență în tot ceea ce facem. Mai jos, veți găsi companiile și organizațiile extraordinare care
                sunt
                alături de noi, ajutându-ne să ne atingem obiectivele. Vă mulțumim că aveți încredere în noi!
            </div>
            <SponsorCarousel images={sponsorImages}/>
            <div className="thq-divider-horizontal"></div>
            <div className="prevent-select"><Gallery8/></div>
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
            <div className="thq-divider-horizontal"><span className="thq-divider-horizontal"></span></div>
            <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#185a9d", "#43cea2"]}>Departament</LinearTextGradient></span>
            </div>
            <div className="Leaders1">
              <span className="Leaders1"><LinearTextGradient angle={45}
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
                    <img className="image1" src={Darian} alt="Darian"/>
                    <span className="hide1">Munteanu Darian</span> {/* Name Text */}
                    <span className="hide2">Lider Jurnal</span> {/* Department Text */}
                </div>
                <div className="image-container">
                    <img className="image1" src={Rares} alt="Rares"/>
                    <span className="hide1">Dragomir Cotigă Rareș</span> {/* Name Text */}
                    <span className="hide2">Lider Design</span> {/* Department Text */}
                </div>
                <div className="image-container">
                    <img className="image1" src={Ionut} alt="Ionut"/>
                    <span className="hide1">Gavrila Ionuț Damian</span> {/* Name Text */}
                    <span className="hide2">Lider 3D Design</span> {/* Department Text */}
                </div>
                <div className="image-container">
                    <img className="image1" src={Magda} alt="Magda"/>
                    <span className="hide1">Andrei Maria Magdalena </span> {/* Name Text */}
                    <span className="hide2">Lider Jurnal Non-Tehnic</span>
                </div>
                <div className="image-container">
                    <img className="image1" src={Maria} alt="Maria"/>
                    <span className="hide1">Gherghina Maria Carmen</span> {/* Name Text */}
                    <span className="hide2">Lider Marketing</span>
                </div>

            </div>
            <div className="thq-divider-horizontal"><span className="thq-divider-horizontal"></span></div>

            <div className="Leaders">
              <span className="Leaders"><LinearTextGradient angle={45}
                                                            colors={["#20e448", "#216da3", "#2f21a3"]}>Members</LinearTextGradient></span>
            </div>
            <div className="picture-and-name1">

                <div className="image-container">
                    <img className="image1" src={darius} alt="Darius"/>
                    <span className="hide1">Coteț Darius-Iulian</span> {/* Name Text */}
                    <span className="hide2">Adjunct 3D Design</span>
                </div>
                <div className="image-container">
                    <img className="image1" src={sisu} alt="Sisu"/>
                    <span className="hide1">Sișu Bogdan Gabriel</span> {/* Name Text */}
                    <span className="hide2">Membru Construcție</span>
                </div>

                <div className="image-container">
                    <img className="image1" src={matei} alt="Matei"/>
                    <span className="hide1">Grama Matei Ionuț</span> {/* Name Text */}
                    <span className="hide2">Membru Marketing</span>
                </div>
                <div className="image-container">
                    <img className="image1" src={ftc} alt="Darius D"/>
                    <span className="hide1">Drius D</span> {/* Name Text */}
                </div>

                <div className="image-container">
                    <img className="image1" src={Doroftei} alt="Doroftei"/>
                    <span className="hide1">Doroftei David-Ioan</span> {/* Name Text */}
                    <span className="hide2">Adjunct Programare</span>
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


