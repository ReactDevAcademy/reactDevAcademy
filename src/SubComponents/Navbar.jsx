import React from 'react'
import "../css/Navbar.css"
import phone_in_talk from "../assets/img/img/phone_in_talk (1).png"
import drafts from "../assets/img/img/drafts.png"
import facebook from "../assets/img/img/facebook.png"
import instagram from "../assets/img/img/instagram.png"
import youtube from "../assets/img/img/youtube.png"
import linkedin from "../assets/img/img/linkedin.png"


const Navbar = () => {
  return (
    <>
      {/* top navbar */}
      <div className="top_navbar_main">
        <div className="email_mobile_info_main">
          <div className="mobile_info">
            <span>
              <img
                src={phone_in_talk}
                alt="phone"
                className="img-fluid common_img"
              />
            </span>
            <span className="m_i_text">7397820829 - 8446739782</span>
          </div>
          <div className="mobile_info">
            <span>
              <img
                src={drafts}
                alt="email"
                className="img-fluid common_img"
              />
            </span>
            <span className="m_i_text">reactdevacademy@gmail.com</span>
          </div>
        </div>
        <div className="top_nav_socia_links">
          <img
            src={facebook}
            alt="facebook"
            className="img-fluid social_common_img"
          />
          <img
            src={instagram}
            alt="instagram"
            className="img-fluid social_common_img"
          />
          <img
            src={youtube}
            alt="youtube"
            className="img-fluid social_common_img"
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="img-fluid social_common_img"
          />
        </div>
      </div>
      {/* ! top navbar */}

      {/* Navbar Start */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom_navbar">
          <div className="container-fluid custom_container" style={{ margin: '0px 6px' }}>
            <a className="navbar-brand" href="#"><img src="./img/3 1.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll custome_nav_gap"
                style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Our Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Placement</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Career</a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn contact" type="submit">
                  <span className="phone_icon_border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <mask id="mask0_3_195" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0"
                        y="0" width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3_195)">
                        <path
                          d="M15 8.33338L13.7917 7.16672L15.125 5.83338H10.8333V4.16672H15.125L13.8333 2.87505L15 1.66672L18.3333 5.04172L15 8.33338ZM16.625 17.5C14.8889 17.5 13.1736 17.1216 11.4792 16.3646C9.78472 15.6077 8.24305 14.5348 6.85417 13.1459C5.46528 11.757 4.39236 10.2153 3.63542 8.52088C2.87847 6.82644 2.5 5.11116 2.5 3.37505C2.5 3.12505 2.58333 2.91672 2.75 2.75005C2.91667 2.58338 3.125 2.50005 3.375 2.50005H6.75C6.94444 2.50005 7.11806 2.56602 7.27083 2.69797C7.42361 2.82991 7.51389 2.98616 7.54167 3.16672L8.08333 6.08338C8.11111 6.30561 8.10417 6.49311 8.0625 6.64588C8.02083 6.79866 7.94444 6.93061 7.83333 7.04172L5.8125 9.08338C6.09028 9.59727 6.42014 10.0938 6.80208 10.573C7.18403 11.0521 7.60417 11.5139 8.0625 11.9584C8.49306 12.3889 8.94444 12.7882 9.41667 13.1563C9.88889 13.5244 10.3889 13.8612 10.9167 14.1667L12.875 12.2084C13 12.0834 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8473 13.9583 11.875L16.8333 12.4584C17.0278 12.5139 17.1875 12.6146 17.3125 12.7605C17.4375 12.9063 17.5 13.0695 17.5 13.2501V16.6251C17.5 16.8751 17.4167 17.0834 17.25 17.2501C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.50005L6.39583 6.12505L6.04167 4.16672H4.1875C4.25694 4.73616 4.35417 5.29866 4.47917 5.85422C4.60417 6.40977 4.78472 6.95838 5.02083 7.50005ZM12.4792 14.9584C13.0208 15.1945 13.5729 15.382 14.1354 15.5209C14.6979 15.6598 15.2639 15.7501 15.8333 15.7917V13.9584L13.875 13.5626L12.4792 14.9584Z"
                          fill="white" />
                      </g>
                    </svg>
                  </span> contact
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

    </>

  )
}

export default Navbar