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
     <h1 className="text-center  mb-5">CONTACT ME</h1>
      <div className="container contact mb-5 skills " id="contact">
        <div className="contact-wrapper ">
          {/* Form Section */}
          <form
            className="contact-form "
            action="https://example.com/submit"
            method="post"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>

          {/* Social Links Section */}
          <div
            className="contact-icon mb-5 mt-5"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <a
              href="mailto:mauryasuraj364@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="items"
            >
              <SiGmail className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-maurya-bb4130256/"
              target="_blank"
              rel="noopener noreferrer"
              className="items"
            >
              <CiLinkedin className="icons" />
            </a>
            <a
              href="https://github.com/suraj3641"
              target="_blank"
              rel="noopener noreferrer"
              className="items"
            >
              <FaGithubSquare className="icons" />
            </a>
            <a
              href="https://drive.google.com/file/u/1/d/1b5NsnzrNycXo21ldlm2Lf-5Dfp17kDWW/view?usp=drive_open"
              target="_blank"
              rel="noopener noreferrer"
              className="items"
            >
              <SiStandardresume className="icons" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .contact-form {
          flex: 1 1 45%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea,
        .contact-form button {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .contact-form button {
          background-color:rgb(41, 141, 247);
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .contact-form button:hover {
          background-color:rgb(237, 244, 97);
        }

        .contact-icon {
          flex: 1 1 45%;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
         justify-content: center;
        }

        .icons {
          font-size: 2rem;
          color:rgb(134, 183, 235);
          transition: transform 0.2s;
        }

        .icons:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .contact-form,
          .contact-icon {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
