import React from 'react';
import '../css/about.css';
import FooterSlide from './FooterSlide';
import AutoLogo from '../images/autologo.png';
import Content from '../ButtonFunctions/ReadMBtn.js';
import SlideHome from './SlideHome';
import "../css/SlideHome.css";

const About = () => {
  return (
    <>
    <div id="aboutPageId" class="AboutPage">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="TitlePage">
                     <h2 className="AboutTitle"> About </h2>
                     <span className="AboutSpan">2Brothers Auto Dealership</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row flexcss">
               <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 m-auto">
                  <div class="aboutBox">
                     <h3 className="AboutTitleCreation">Best Auto Dealership </h3>
                     
                     <p className="AboutDescription">
                     
                     <Content />
              
                     </p>
                
                  </div>
               </div>
               <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 m-4 AboutSlide">
                 <SlideHome/>
               </div>
            </div>
         </div>
      </div>
    </>
  )
};

export default About;
