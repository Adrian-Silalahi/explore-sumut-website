import React, { Component } from "react";
import "./Index-footer.css";
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="atas">
          <div className="content">
            <div className="row">
              <div className="col-sm-6 col1">
                <h2>Explore Sumut</h2>
              </div>
              <div className="col-sm-6 col2">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <AiFillFacebook size={35} color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <FaTwitter size={35} color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                      <AiFillYoutube size={35} color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <AiOutlineInstagram size={35} color="white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bawah">
          <div className="content">
            <p>Copyright © 2022 - 2023 Explore Sumut All Right Reserved</p>
          </div>
        </div>
      </div>
    );
  }
}
