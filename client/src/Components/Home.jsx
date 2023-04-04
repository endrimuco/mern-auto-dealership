import React from "react";
import '../css/home.css';
import Gclass1 from '../images/gclass1.jpg';
import About from "./About";
import Contact from "./Contact";
import SponsorShip from "./SponsorShip";
import TypesInfo from "./TypesInfo";


const Home = () => {
  return (   
    <>

      <div class="gClassImg"
       style={{
        backgroundImage: 'url('+Gclass1+')',
        backgroundSize: "cover",
      }}
      >
        
<div className=" gapHome">
</div>

<div class="homeText">
  <div>
    
    <p class="fadingText">2Brothers <span>Auto</span> Dealership</p>
    
    <p class="typeWriter">Quality Over Quantity</p>
    
    
      </div>
    </div>
  </div>
   <About />
   <SponsorShip />
   <TypesInfo />
   <Contact />     
   </> 
  );
};

export default Home;



