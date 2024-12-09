import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiStandardresume } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="text-center">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a> */}
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
           <a
            href="mailto:mauryasuraj364@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/suraj-maurya-bb4130256/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/suraj3641" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://drive.google.com/file/u/1/d/1b5NsnzrNycXo21ldlm2Lf-5Dfp17kDWW/view?usp=drive_open" target="_blank" className="items">
            <SiStandardresume className="icons" />
          </a>
         
         
        </div>
      </div>
    </>
  );
};

export default Contact;
