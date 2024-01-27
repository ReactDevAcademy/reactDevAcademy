import React from 'react'
import '../css/Footer.css';
import Logo from "../assets/img/logoreact.png"
const Footer = () => {
  return (
    <>
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
  <div className="row my-5 justify-content-center">
    <div className="col text-center">
      <div className="card border-0">
        <div className="card-body">
          <div className="card-title">
            <h3 className="mb-4">Ready to Unleash the Power of React.js?</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col">
              <p className="small color-text">
              Embark on an exciting journey to unravel the potential of React.js! 
              Discover how your development team can effortlessly express creativity 
              through code, creating engaging and impactful user interfaces.
               Our guidance will make learning React.js a seamless and thrilling experience, 
               saying goodbye to complex IT processes. Get ready to dive into the world of React.js
                mastery – an adventure in which your skills and creativity will thrive!"
              </p>{" "}
              <button type="button" className="btn btn-primary border-0 my-4">
                <b>Get in Touch</b>
              </button>
              <br />{" "}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
      <div className="col-12">
        <div className="row row-2">
          <div className="col-sm-3 text-md-center">
            <h5>
              <span>
                {" "}
                <i className="fa fa-firefox text-light" aria-hidden="true" />
              </span>
              <img src={Logo} alt="" />
            </h5>
          </div>
          <div className="col-sm-3  my-sm-0 mt-5">
            <ul className="list-unstyled">
              <li className="mt-0">Platform</li>
              <li>Support Center</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-sm-3  my-sm-0 mt-5">
            <ul className="list-unstyled">
              <li className="mt-0">Success Stories</li>
              <li>Use Cases</li>
              <li>Student Services</li>
            </ul>
          </div>
          <div className="col-sm-3  my-sm-0 mt-5">
            <ul className="list-unstyled">
              <li className="mt-0">About Us</li>
              <li>Join Our Team</li>
              <li>
              Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
      <div className="col-12">
        <div className="row my-4 row-1 no-gutters">
          <div className="col-sm-3 col-auto text-center">
            <small>Ⓒ React Dev Academy</small>
          </div>
          <div className="col-md-3 col-auto " />
          <div className="col-md-3 col-auto" />
          <div className="col  my-auto text-md-left  text-right ">
            {" "}
            <small>
              {" "}
              reactdevacademy.com{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Footer