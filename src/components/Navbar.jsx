import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          SpaceXplorer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={"/apod"}>
                APOD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/earth-landscape'}>Earth Landscape</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/mars-weather-api'} >Mars Weather API</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
