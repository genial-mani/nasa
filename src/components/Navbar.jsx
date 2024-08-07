import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar bg-slate-800 text-slate-300 rounded-full p-5  mt-5  fixed mx-auto top-2 z-10" >
      <div className="container-fluid flex gap-10 justify-between">
        <Link className="navbar-brand" to={"/home"}>
          SpaceXplorer
        </Link>
        <div className="remaining-navbar" id="navbarNav">
          <ul className="navbar-nav flex gap-10">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                APOD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/earth-landscape'}>Earth Landscape</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/mars-weather-api'} >Mars</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
