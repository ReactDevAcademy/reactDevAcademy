import React from "react";
import "../css/Aboutus.css";
import Navbar from "../SubComponents/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about_sec">
        <div className="container-fluid why_choose_container ps-0 pe-0">
          {/* about title */}
          <div className="row why_choose_row">
            <div className="col-lg-12 mt-3 mb-3">
              <div className="why_choose_title_sec_2">
                <div className="why_choose_left d-flex justify-content-center align-items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={29}
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <circle
                        cx={14}
                        cy="14.5265"
                        r="9.97383"
                        transform="rotate(-52 14 14.5265)"
                        fill="url(#paint0_linear_1_239)"
                      />
                      <path
                        d="M14 7.99997L15.5716 12.8369H20.6574L16.5429 15.8262L18.1145 20.6631L14 17.6737L9.8855 20.6631L11.4571 15.8262L7.3426 12.8369H12.4284L14 7.99997Z"
                        fill="#000001"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_239"
                          x1={14}
                          y1="4.5527"
                          x2={14}
                          y2="24.5004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8B12BF" />
                          <stop offset={1} stopColor="#EE71CF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <h6 className="w_c_t text-black">about us</h6>
                </div>
                <p className="w_c_t_para mt-2 mb-2">
                  At <span className="about_title_span">React Dev Academy</span>,
                  we are passionate about empowering individuals to master React.{" "}
                  <br />
                  js and excel in the dynamic field of web development. Here's a
                  glimpse into who we are and what sets us a part.
                </p>
              </div>
            </div>
          </div>
          {/* our mission vision */}
          <div className="row our_vision_mision_row ">
            <header className="row about_header">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="title_left_sec">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={29}
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <circle
                        cx={14}
                        cy="14.5265"
                        r="9.97383"
                        transform="rotate(-52 14 14.5265)"
                        fill="url(#paint0_linear_1_239)"
                      />
                      <path
                        d="M14 7.99997L15.5716 12.8369H20.6574L16.5429 15.8262L18.1145 20.6631L14 17.6737L9.8855 20.6631L11.4571 15.8262L7.3426 12.8369H12.4284L14 7.99997Z"
                        fill="#000001"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_239"
                          x1={14}
                          y1="4.5527"
                          x2={14}
                          y2="24.5004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8B12BF" />
                          <stop offset={1} stopColor="#EE71CF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <h6 className="our_mision_vision_title">
                    Our Mission, vision, Value
                  </h6>
                </div>
              </div>
              <div className="col-lg-1">
                <img
                  src={require("../assets/img/img/call_received.png")}
                  alt="arrow"
                  className="img-fluid"
                />
              </div>
            </header>
            {/* cards */}
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-10 d-flex aboutbox">
                  <div className="col-lg-3">
                    <div className="about_card">
                      <img
                        src={require("../assets/img/img/mission-img-1.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="about_card_body">
                        <div className="ab_title_g">
                          <h4 className="about_card_t mb-0">Mission</h4>
                          <img
                            src={require("../assets/img/img/call_received.png")}
                            alt="arrow"
                            className="img-fluid "
                          />
                        </div>
                        <p className="about_card_para">
                          Our mission is to be the leading provider of high-quality
                          education in React.js, equipping our students with the
                          knowledge, skills, and confidence to thrive in the
                          competitive world of web development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="about_card">
                      <img
                        src={require("../assets/img/img/mission-img-2.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="about_card_body">
                        <div className="ab_title_g">
                          <h4 className="about_card_t mb-0">Vision</h4>
                          <img
                            src={require("../assets/img/img/call_received.png")}
                            alt="arrow"
                            className="img-fluid "
                          />
                        </div>
                        <p className="about_card_para">
                          Our mission is to be the leading provider of high-quality
                          education in React.js, equipping our students with the
                          knowledge, skills, and confidence to thrive in the
                          competitive world of web development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="about_card">
                      <img
                        src={require("../assets/img/img/mission-img-3.png")}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="about_card_body">
                        <div className="ab_title_g">
                          <h4 className="about_card_t mb-0">Value</h4>
                          <img
                            src={require("../assets/img/img/call_received.png")}
                            alt="arrow"
                            className="img-fluid "
                          />
                        </div>
                        <p className="about_card_para">
                          Our mission is to be the leading provider of high-quality
                          education in React.js, equipping our students with the
                          knowledge, skills, and confidence to thrive in the
                          competitive world of web development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hr */}
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <hr className="hr_about" />
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="container custom_container">
              <header className="row about_header header_rw">
                <div className="col-lg-12">
                  <div className="title_left_sec text-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={29}
                        viewBox="0 0 28 29"
                        fill="none"
                      >
                        <circle
                          cx={14}
                          cy="14.5265"
                          r="9.97383"
                          transform="rotate(-52 14 14.5265)"
                          fill="url(#paint0_linear_1_239)"
                        />
                        <path
                          d="M14 7.99997L15.5716 12.8369H20.6574L16.5429 15.8262L18.1145 20.6631L14 17.6737L9.8855 20.6631L11.4571 15.8262L7.3426 12.8369H12.4284L14 7.99997Z"
                          fill="#000001"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_239"
                            x1={14}
                            y1="4.5527"
                            x2={14}
                            y2="24.5004"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8B12BF" />
                            <stop offset={1} stopColor="#EE71CF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <h6 className="our_mision_vision_title">
                      Why Choose ReactDev Academy?
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6  pe-1">
                  <div className="img_why">
                    <img src={require("../assets/img/img/w_c_left.png")} className="img-fluid w-100" alt="" style={{ height: '354px' }} />
                    <div className="img_text">
                      <h6 className="title_about">Hands on Learning</h6>
                      <p className="why_description">We believe in learning by doing. Engage in hands-on projects, coding exercises, and real-world applications to solidify your understanding of React.js concepts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 custom_padding_left" style={{ paddingBottom: "3px" }}>
                  <div className="img_why">
                    <img src={require("../assets/img/img/meet.png")} className="img-fluid w-100" alt="" />
                    <div className="img_text">
                      <h6 className="title_about">Industry Level Skill</h6>
                      <p className="why_description">Acquire the skills and knowledge demanded by employers in the ever-evolving tech industry. Our courses are designed to make you job-ready and confident in applying React.js in real-world scenarios.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pe-1 " style={{ paddingBottom: "3px" }}>
                  <div className="img_why">
                    <img src={require("../assets/img/img/ap_tech.png")} className="img-fluid w-100" alt="" />
                    <div className="img_text">
                      <h6 className="title_about">Expert Faculty</h6>
                      <p className="why_description">Learn from industry professionals and React.js experts who bring real-world experience to the classroom. Our instructors are dedicated to your success and passionate about sharing their knowledge.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 custom_padding_left">
                  <div className="img_why">
                    <img src={require("../assets/img/img/call.png")} className="img-fluid w-100" alt="" />
                    <div className="img_text">
                      <h6 className="title_about">Join us For Future Journey</h6>
                      <p className="why_description">We believe in learning by doing. Engage in hands-on projects, coding exercises, and real-world applications to solidify your understanding of React.js concepts.</p>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
