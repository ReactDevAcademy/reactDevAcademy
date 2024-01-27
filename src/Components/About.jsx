// Import necessary dependencies
import React from 'react';
import '../css/Aboutus.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../SubComponents/Navbar';
import Footer from '../SubComponents/Footer';
import img1 from "../assets/img/classTemp.jpg"
// AboutUs component
const AboutUs = () => {
  return (
<>
<NavbarComp/>
<div className="container-fluid mt-5 about-container">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="mb-4">Our Academy</h2>
        <p className="lead">
          At React Dev Academy, we are passionate about empowering individuals to master React.js and excel in the dynamic field of web development.
        </p>

        <div className="mb-4">
          <h3>Mission, Vision, Values</h3>
          <p>
            <strong>Mission:</strong> Our mission is to be the leading provider of high-quality education in React.js, equipping our students with the knowledge, skills, and confidence to thrive in the competitive world of web development.
          </p>
          <p>
            <strong>Vision:</strong> We envision a future where every individual, regardless of background, has the opportunity to become a proficient React.js developer and contribute meaningfully to the tech industry's evolution.
          </p>
          <p>
            <strong>Values:</strong> We are committed to embracing innovation, prioritizing student success. Guided by these values, we aim to provide a transformative and exceptional learning experience for aspiring web developers.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={img1} alt="" className='classtemp' height={"300px"} width={"550px"} />
      </div>
    </div>

    {/* Separate row for "Why Choose ReactDev Academy?" */}
    <div className="row mt-5">
      <div className="col-lg-12">
        <div className="mb-4">
          <h3>Why Choose ReactDev Academy?</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Hands-On Learning:</strong> Engage in hands-on projects, coding exercises, and real-world applications to solidify your understanding of React.js concepts.</li>
            <li className="list-group-item"><strong>Industry Level Skill:</strong> Acquire the skills and knowledge demanded by employers in the ever-evolving tech industry. Our courses are designed to make you job-ready and confident in applying React.js in real-world scenarios.</li>
            <li className="list-group-item"><strong>Expert Faculty:</strong> Learn from industry professionals and React.js experts who bring real-world experience to the classroom. Our instructors are dedicated to your success and passionate about sharing their knowledge.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* New row for "Join Us for Future Journey" and enhanced contact section */}
    <div className="row">
      <div className="col-lg-12">
        <div className="mb-4">
          <h3 style={{textAlign:"center"}}>Join Us for Future Journey</h3>
          <p>
            Whether you're a beginner looking to start your coding journey or an experienced developer aiming to upskill in React.js, ReactDev Academy is your partner in success. Join us and embark on a transformative learning experience.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</>
  );
}

export default AboutUs;
