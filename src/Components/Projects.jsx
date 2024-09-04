import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="main-div">
        <h2 className="title">Projects</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="card w-90 m-auto">
                <div className="card-body">
                  <h5 className="card-title">Multistep Form</h5>
                  <p className="card-text">
                    The Multi-Step Form is a user-friendly interface designed to
                    simplify complex data entry processes by breaking them down
                    into sequential steps. Each step focuses on a specific
                    aspect of the information being collected, such as basic
                    personal details, address details and so on. Front-end
                    development using HTML, CSS, and basic JavaScript, with
                    React.js for dynamic interactions.
                  </p>
                  <Link
                    to={
                      "https://github.com/ShivaniHagone/multistep-form"
                    }
                    className=" menu nav_btn"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 ">
              <div className="card w-90 m-auto">
                <div className="card-body">
                  <h5 className="card-title">CRUD Operation</h5>
                  <p className="card-text text-sm-left">
                    Developed a user-friendly interface which supports adding
                    new entries, viewing existing records, editing details, and
                    removing items. The backend is built with robust APIs to
                    handle data operations securely, while the frontend ensures
                    a seamless user experience. This project demonstrates
                    proficiency in full-stack development and effective data
                    management practices.
                  </p>
                 <Link
                    to={
                      "https://github.com/ShivaniHagone/Full-stack-CRUD-Application-Frontend"
                    }
                    className=" menu nav_btn"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="card w-90 m-auto">
                <div className="card-body">
                  <h5 className="card-title">EventLitz</h5>
                  <p className="card-text">
                    EventLitez is a simple event listing website focused on
                    front-end development using HTML, CSS, and basic JavaScript,
                    with React.js for dynamic interactions. The platform allows
                    users to browse, search, and filter events by categories,
                    dates, or locations. Designed with a clean, responsive
                    layout, EventLitez ensures a smooth user experience across
                    devices.
                  </p>
                  <Link
                    to={
                      " "
                    }
                    className=" menu nav_btn"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
