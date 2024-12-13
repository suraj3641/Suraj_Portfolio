import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiStandardresume } from "react-icons/si";




const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile || My name is SURAJ MAURYA",
        "I'm a Full Stack Developer , but not bound to only a specific technology also explore about Machine Learning.",
        "",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home skills mb-5" id="home">
      <div className="right  ">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="left " data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
           <div
                    className="contact-icon-home "
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
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
                  </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;
