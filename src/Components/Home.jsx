import React from "react";
import AboutMe from "./HomeComponents/AboutMe";
import Footer from "./HomeComponents/Footer";
import InspirationBanner from "./HomeComponents/InspirationBanner";
import MasterBanner from "./HomeComponents/MasterBanner";
import MyProjects from "./HomeComponents/MyProjects";
import MyServices from "./HomeComponents/MyServices";

const Home = () => {
  return (
    <div className="home-main">
      <ul className="home-ul">
        <li>
          <a href="https://www.linkedin.com/in/saroj-ghalan-bab96a226" target="_blank">
          <p className="home-p">
            <i class="fa-brands fa-linkedin"></i> <span className="home-span">LinkedIn</span>
          </p>
          </a>
        </li>
        <li>
        <a href="https://github.com/hypeka" target="_blank">
          <p className="home-p">
            {" "}
            <i class="fa-brands fa-github"></i>
            <span className="home-span">Github</span>
          </p>
          </a>
        </li>
        <li>
        <a href="https://www.facebook.com/xaroz.tmng/" target="_blank">
          <p className="home-p">
            {" "}
            <i class="fa-brands fa-facebook"></i>
            <span className="home-span">Facebook</span>
          </p>
          </a>
        </li>
        <li>
          <p className="home-p">
            {" "}
            <i class="fa-brands fa-square-gitlab"></i>
            <span className="home-span">Gitlab</span>
          </p>
        </li>
      </ul>
      <MasterBanner />
      <InspirationBanner />
      <MyServices />
      <AboutMe />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Home;
