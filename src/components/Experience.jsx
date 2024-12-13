import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex skills " id="experience">
        <h1 className="text-center">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="row ex-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="col-12 col-md-4 mb-4 ">
                <div className="left">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 mb-4">
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>{data.organisation}</h4>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[2]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[3]}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
