import React from "react";
import download from "../assets/download.jpeg";
import img from "../assets/image.jpg";
import cv from "../assets/Shivani Hagone.pdf";
import "./About.css";

function About() {
  const handleDownload = () => {
    console.log("downloaded...");
  };

  return (
    <div className="main-div">
      <div className="container">
        <div>
          <div className="col-12 col-md-6 offset-md-3 block1">
            <div className="box"></div>
            <div className="shape1"></div>
            <img src={img} alt="my-img"></img>

          </div>
          <div className="col-12 col-md-6 block2 offset-md-3">
            <div className="content">
                <p className="heading">
                  Hi, I'm <span className="name">Shivani Hagone</span>
                </p>
             
              <p className="heading2">Fullstack Developer</p>
              <p className="para">
                As a passionate and detail-oriented
                <strong>Fullstack Developer</strong>, I aim to leverage my
                comprehensive knowledge in both frontend and backend
                technologies to create innovative, user-centric web
                applications. With a strong background in relevant technologies,
                e.g., React, Node.js, SQL. I am dedicated to delivering
                high-quality, scalable solutions that drive business success.I
                thrive in dynamic, collaborative environments and am committed
                to continuous learning and staying ahead of industry trends. My
                goal is to contribute my technical expertise and problem-solving
                skills to a forward-thinking team, where I can help shape the
                future of web development and enhance user experiences.
              </p>
              <div className="btn-position">
                <a
                  href={`${process.env.PUBLIC_URL}/Shivani Hagone.pdf`}
                  download="Shivani Hagone.pdf"
                >
                  <button className="nav_btn">Download My CV</button>
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
