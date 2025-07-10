import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item"> 
              <a href="#" className="nav-link">My resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
