import React from 'react'
import Reactdevimg from '../assets/img/img/reactdev 1.jpg';
import Touch from "../assets/img/img/touch_app.png"
import call_received from "../assets/img/img/call_received.png"
const Slider = () => {
  return (
    <>
  {/* slider */}
  <section className="slider_section">
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Reactdevimg}
            className="d-block img-fluid w-100 banner"
            alt="banner"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Reactdevimg}
            className="d-block img-fluid w-100 banner"
            alt="banner"
          />
        </div>
      </div>
     
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
      <div className="slider_button_group">
        <button className="slider_btn_first">
          <span>
            <img
              src={Touch}
              alt="touch"
              className="img-fluid slider_btn_ico"
            />
          </span>
          <span>get in touch</span>
        </button>
        <button className="slider_btn_second">
          <span>read more</span>
          <span>
            <img
              src={call_received}
              alt="touch"
              className="img-fluid slider_btn_ico"
            />
          </span>
        </button>
      </div>
    </div>
  </section>
  {/* slider */}
</>

  )
}

export default Slider