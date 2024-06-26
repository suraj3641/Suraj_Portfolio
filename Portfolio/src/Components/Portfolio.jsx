/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */
import React from "react";
import image from "../images/design-desk.jpeg";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 */

const projectList = [
  {
    title: "Travel Quest Application  🎉",
    description:
      " This online platform for rental accommodations.||We have implemented full stack project using MVC framework.MERN is used in this application. ",
    url: "https://major-project-1a9o.onrender.com/listings",
  },
  {
    title: "Tech Form Clone",
    description:
      "A tech form is a structured document used to collect and organize technical information. It typically includes fields for specifications, requirements, and details about a technology or product. ",
    url: "https://github.com/suraj3641/Tech-Form",
  },
  {
    title: "Expense Tracker App",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/suraj3641/Expense_Tracker_App",
  },
  {
    title: "Simon Games",
    description:
      "This game is very usefull of mind. Using  Javasript ,html and css.",
    url: "https://github.com/suraj3641/Simon_Games",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
