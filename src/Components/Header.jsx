import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <h4 className="h4">My Portfolio</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-container"
            id="navbarNavAltMarkup"
          >
            <div class="links">
              <Link
                className="active menu"
                aria-current="page"
                to="/"
                target="_self"
              >
                About
              </Link>
              <Link
                className="active menu"
                aria-current="page"
                to="/skills"
                target="_self"
              >
                Skills
              </Link>
              <Link
                className="active menu"
                aria-current="page"
                to="/projects"
                target="_self"
              >
                Projects
              </Link>
              <Link
                className="active menu"
                aria-current="page"
                to="/contact"
                target="_self"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
