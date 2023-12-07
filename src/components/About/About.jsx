import React from "react";
import logo from "../../images/logo.png";
import "../About/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-heading" >About Us</div>
      <img className="about-image" src={logo} alt={"Logo"} />
      <div className="about-description">
        <p className="about-para" align="justify">
          At our core, we are a team of 3 passionate final year B.Tech
          enthusiasts :{" "}
        </p>
        <p>
          <a
            className="about-para linkedin-btn"
            href="https://www.linkedin.com/in/vishalarora14"
            target="_blank"
            rel="noopener noreferrer"
          >
            1. Vishal Arora
          </a>
        </p>
        <p>
          <a
            className="about-para linkedin-btn"
            href="https://www.linkedin.com/in/vishakha-aggarwal-49b348206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2. Vishakha Aggarwal
          </a>
        </p>
        <p>
          <a
            className="about-para linkedin-btn"
            href="https://www.linkedin.com/in/sidvjsingh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            3. Siddhant Vijay Singh
          </a>
        </p>

        <p className="about-para" align="justify">
          We are committed to leveraging cutting-edge technology for impactful
          solutions. We are final year students pursuing B.Tech in C.S.E. from
          B.P.I.T Delhi. Among our proudest achievements is the development of a
          sophisticated machine learning model dedicated to detecting skin
          diseases through image analysis. Through relentless innovation and a
          deep-rooted commitment to improving healthcare accessibility, our
          model harnesses the power of artificial intelligence to assist in
          early and accurate identification of skin conditions. We believe in
          the fusion of technology and healthcare, striving to make a tangible
          difference in people's lives by offering a reliable and efficient tool
          in the realm of dermatological diagnosis.
        </p>
      </div>
    </div>
  );
};

export default About;
