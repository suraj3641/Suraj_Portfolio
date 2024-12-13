import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3 skills" id="projects">
        <h1 className="text-center mb-3 ">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-start  ">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-3 col-12 col-sm-6 col-md-3 col-lg-4 col-xl-3 mx-3 "
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "100%", // Adjust width to 100% to be responsive
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "auto", // Ensure the image scales correctly
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-3">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.source} className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
          <h3 className="text-center mt-2 mb-5 skills ">For more Projects, Please visit my GitHub Profile</h3>
        </div>
      </div>
    </>
  );
};

export default Projects;
