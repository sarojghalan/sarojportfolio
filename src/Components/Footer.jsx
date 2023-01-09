import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assests/logosaroj.png'
// import resume from "../../Assets/sarojresume.pdf"

const Footer = () => {
  return (
    <div
      className="footer-main main-1 "
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="footer-content">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="footer-content">
              <h4>My CV</h4>
              <NavLink to="/my_cv">
              <button className="button-main" >See my CV</button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="footer-content">
              <h4>Contact Me</h4>
              <div className="container">
                <ul className="footer-ul">
                  <li>
                    <p>
                    <i class="fa-solid fa-envelope"></i> : <span>codewithsaroj@gmail.com</span>
                    </p>
                  </li>
                  <li>
                    <p>
                    <i class="fa-solid fa-phone"></i> : <span>+977 9808193670</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
            <p>© 2022. <span>Saroj Ghalan</span> . All Rights Reserved.  Developed By :  <span>Saroj G.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
