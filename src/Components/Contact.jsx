import React from "react";
import "./Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Form submitted:", formData);

    emailjs
      .sendForm(
        "service_leakyah",
        "template_ax6c4m8",
        form.current,
        "8afFtc7Mz__olm6qv"
      )
      .then(
        (result) => {
          alert("email sent successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <div className="main-div" >
        <h2 className="title">Contact Me!</h2>
        <div className=" container col-10 col-md-6">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="sub-block">
              <label htmlFor="fullName" className="label">Full Name:</label>
              <br></br>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-50"
              />
            </div>
            <div className="sub-block">
              <label htmlFor="email" className="label">Email Address:</label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-50"
              />
            </div>
            <div className="sub-block">
              <label htmlFor="phone" className="label">Phone Number:</label>
              <br></br>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your number"
                value={formData.phone}
                onChange={handleChange}
                className="w-50"
              />
            </div>
            <div className="sub-block">
              <label htmlFor="message" className="label">Your Message:</label>
              <br></br>
              <textarea
                id="message"
                name="message"
                placeholder="Text here..."
                value={formData.message}
                onChange={handleChange}
                className="w-50"
              />
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
