import React, { useState } from "react";
import '../css/about.css';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 180) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? <button className="ReadMoreBtnAbt">Read More</button> : <button className="ShowLessBtnAbt">Show Less</button> }
      </span>
    </p>
  );
};
  
const Content = () => {
  return (
    <div className="container">
        <ReadMore>
        When it comes to finding the perfect sedan, suv, truck from Albania 
        or beyond, there is no better new and used dealership 
        than right here at 2Brothers Auto Dealership
        Endri and Kristian the owners of dealership has become known for quality 
        vehicles at affordable prices across Europe for over 10 years, 
        so when you visit us you know you can count on a legacy of quality 
        that is unmatched.
        </ReadMore>
    </div>
  );
};
  
export default Content;