import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "../SubComponents/Navbar";
import Footer from "../SubComponents/Footer"
import "../css/contact.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from "../assets/img/formimg1.jpg"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, for example, sending data to a server
    console.log('Form submitted:', formData);
  };

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const containerStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
    <Routes>
    <Route path="/" element={<Navbar />}/>
   </Routes>
   <div className="contact-us-container" >
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to contact us:</p>
      <div className="contact-info">
        <p>Email: reactdevacademy.com</p>
        <p>Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
        {/* Add more contact information as needed */}
      </div>
      <p>Or, you can reach out to us using the form below:</p>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
      <div className="additional-info">
        <p>Visit us at:</p>
        <div className="map-container">
          {/* Add your embedded map code here */}
          <iframe
            title="Location Map"
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...YOUR_LOCATION_COORDINATES!...!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1612278257404!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
      <div className="animated-elements">
        <p className="animated-text">Join our development class and unlock endless possibilities!</p>
        <button className="cta-button">Join Now</button>
      </div>
      <div className="newsletter">
        <p>Subscribe to our newsletter for updates and announcements:</p>
        <input type="email" placeholder="Your Email" />
        <button type="button">Subscribe</button>
      </div>
    </div>
    <Routes>
   <Route path="/" element={<Footer />}/>
   </Routes>
    </>
  )
}

export default Contact