import React from 'react'
import '../css/footerSlide.css'
import { MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const FooterSlide = () => {
  return (
	<>
	
<footer className="FooterB text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
      {/* Twitter */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/6kTsB5BpXiq6lyh" role="button"><i className="fab fa-twitter" /></a>
      {/* Whatsapp */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/355698836074" role="button"><i className="fab fa-whatsapp" /></a>
      {/* Instagram */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/endrimuco_/" role="button"><i className="fab fa-instagram" /></a>

    </section>

    <section className>
      <form action>

        <div className="row d-flex justify-content-center">
        
          </div>
          
      </form>
    </section>

    <section className>
      <div className="row">
        
        <div>
        
        <div className="footerTextDes">

          <h4>Dealership Description:</h4>
      <p>
      When it comes to finding the perfect sedan, suv, 
      truck, bus vehicle from Albania or beyond, 
      there is no better new and used dealership 
      than right here at 2Brothers Auto Dealership.
      </p>
    </div>

            <MDBCol className='footerInfos'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pogradec, Albania.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                endrimuco19@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +355 69 883 6074
              </p>
            </MDBCol>

        </div>
      </div>
    </section>
  </div>
  <div className="text-center CopyRightTextBg" >
    <p className='CopyRightText p-3 m-0'>© 2023 Copyright: 2Brothers Auto Dealership</p>
  </div>
</footer>
</>
  )
};

export default FooterSlide;