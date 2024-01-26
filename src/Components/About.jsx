import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../SubComponents/Navbar";
import "../css/Aboutus.css"
import Footer from "../SubComponents/Footer";
const TeamMember = ({ name, role, description }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p className="role">{role}</p>
    <p>{description}</p>
  </div>
);

const About = () => {
  const teamMembers = [
    {
      name: 'vikram Bhosale',
      role: 'Founder & Lead Developer',
      description:
        'vikram is a passionate  React js developer with 3 years of experience in web development. He loves sharing his knowledge and helping others succeed.',
    },
    {
      name: 'Anjali Chavan',
      role: 'Web Developer',
      description:
        'Jane is a creative frontend developer with a keen eye for design. She enjoys building user-friendly and visually appealing interfaces.',
    },
    // Add more team members as needed
  ];

  const technologies = ['React js', 'React-redux', 'JavaScript', 'HTML', 'CSS','Bootstrap-5','Bitbucket','Gira', 'GitHub'];
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Development Class</h1>
      </header>
      <main>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We are a dedicated group of developers passionate about learning
            and sharing knowledge. Our mission is to create a supportive and
            collaborative environment for individuals interested in web
            development.
          </p>
          <p>
            Whether you are a beginner or an experienced developer, our
            community is here to help you grow and succeed in your journey.
          </p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="technologies">
          <h2>Technologies We Love</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
<Routes>
  <Route path="/" element={<Footer/>}/>
</Routes>
    </>
  );
};

export default About;
