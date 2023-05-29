import React, { Component, Fragment } from "react";
import "./Index-navigation.css";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  componentDidMount() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY);
      if (this.window.scrollY === 0) {
        navbar.style.backgroundColor = "transparent";
      } else {
        navbar.style.backgroundColor = "#009688";
      }
    });
  }
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Nav.Link className="navbar-brand  text-light fs-3 fw-bold " href="#">
            Explore Sumut
          </Nav.Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse daftar-halaman" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Nav.Link className="nav-Link text-light" href="#Home">
                  Home{" "}
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-Link text-light" href="#About">
                  About
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-Link text-light" href="#Destination">
                  Destination
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-Link text-light" href="#Gallery">
                  Gallery{" "}
                </Nav.Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
