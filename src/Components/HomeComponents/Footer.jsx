import React from "react";
import Rocket from "../../Assests/rocketbackground.png";
// import resume from "../../Assets/sarojresume.pdf"

const Footer = () => {
  return (
      <div
        className="footer-main"
        style={{ backgroundImage: `url(${Rocket})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-content">
                <h3>Saroj Ghalan</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-content">
                <h4>My CV</h4>
                <button className="button-main">
                              See my CV
                            </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-content">
                <h4>Contact Me</h4>
                <ul>
                  <li>
                    <p>
                      Email : <span>codewithsaroj@gmail.com</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Phone : <span>+977 9808193670</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
