import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="main-div">
        <div class="container">
          <h2 className="title">Skills</h2>
          <div className="skillbar expert" data-skill="HTML"></div>
          <div className="skillbar expert" data-skill="CSS"></div>
          <div className="skillbar intermediate" data-skill="Bootstrap 5"></div>
          <div className="skillbar advanced" data-skill="JavaScript"></div>
          <div className="skillbar advanced" data-skill="ReactJS"></div>
          <div className="skillbar advanced" data-skill="SQL"></div>
          <div className="skillbar intermediate" data-skill="MongoDB"></div>
          <div className="skillbar intermediate" data-skill="Java"></div>
          <div className="skillbar intermediate" data-skill="Springboot"></div>
          <div className="skillbar basic" data-skill="GitHub"></div>
        </div>
      </div>
    </>
  );
}

export default Skills;
