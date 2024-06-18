
import React from "react";

import image from "../images/motion-background-img.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  " Tech savvy,Fourth-year b.tech student with a keen interest in full stack Web development. Strong understanding of programming . Strong collaborator with a rapid learning curve and a passion for innovation. Interprets Instruction well and work collaboratively To support team objectives. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "User experience",
  "Inclusive design",
  "Focus Problem solving",
  "React developer",
  "web design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Professionally, I'm a MERN stack developer, but not bound to only a specific technology.  My specialties are quickly learning new skills, problem-solving, teamwork. So far I have JavaScript, HTML, CSS, and Git/GitHub under my belt. I am trying to get mastery in React, NextJS , Node.JS, MongoDB, and Express. JS. I'm still enthusiastically grabbing new concepts in my journey.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
