import React, { Component, Fragment } from 'react';
import "./Index-home.css";
import Navigation from '../../../Components/Molekul/Navbar/Index-navigation';

class Home extends Component {
  
  render() {
    return (
      <Fragment>
        <div className="Home" id='Home'>
          <div className="myBg">
          <Navigation />
            <div className="content">
              <h1>Explore north sumatra and enjoy <br /> an unforgettable experience </h1>
              <a href="#About"><button >START</button></a>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}


export default Home

